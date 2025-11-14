import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import Airtable from 'airtable'
import { redirect } from 'next/navigation'
import { getGoddessFromID, getInfoFromID } from '@/app/airtable'
import { sendSlackMessage } from './bot/bot'
import { doChecks } from '@/app/checks'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appfpPZsw1cEUkzQ7')

export async function GET(req: Request) {
  // optionally: guard with a simple Referer/origin check
  return POST(req) // reuse the same implementation
}

export async function POST(req: Request) {
  const c = await cookies()
  const USER_ID = c.get('user_id')?.value
  
    await doChecks(USER_ID)

    const { searchParams } = new URL(req.url)
    const badge = searchParams.get('badge')

    const user_record = await base('Goddess Badges')
      .select({
        view: 'Grid view',
        filterByFormula: `{Slack ID} = "${USER_ID}"`,
        maxRecords: 1,
      })
      .firstPage()

    if (user_record.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const recordId = user_record[0].id

    // Normalize existing badges to string[]
    const existing = user_record[0].get('Badges')
    const currentBadges: string[] = Array.isArray(existing)
      ? (existing as unknown as unknown[])
          .filter((v): v is string => typeof v === 'string')
      : []
    
    // Get badge safely (if you used searchParams.get('badge'))
    const badgeParam = typeof badge === 'string' ? badge : '' // <-- if 'badge' might be null/undefined
    if (!badgeParam.trim()) {
      return NextResponse.json({ error: 'Missing badge parameter' }, { status: 400 })
    }
    
    // De-dupe and build the next array of strings only
    const nextBadges: string[] = Array.from(new Set([...currentBadges, badgeParam]))
    
    // Update the Multiple select field (expects string[])
    const updated = await base('Goddess Badges').update([
      {
        id: recordId,
        fields: {
          Badges: nextBadges,
        },
      },
    ])

    //NOW update the goddess points
    const goddess_name = await getGoddessFromID(USER_ID)
    console.log(goddess_name)
    const goddess_record = await base('Goddess Points')
    .select({
      view: 'Grid view',
      filterByFormula: `{Name} = "${goddess_name}"`,
      maxRecords: 1,
    })
    .firstPage()

    const old_points = Number(goddess_record[0].get("Points"))

    //GET POINTS FROM BADGE THING

    const badge_record = await base('Badges')
    .select({
      view: 'Grid view',
      filterByFormula: `{ID} = "${badgeParam}"`,
      maxRecords: 1,
    })
    .firstPage()

    const new_points = old_points + Number(badge_record[0].get("points"))

    const updated_points = await base('Goddess Points').update([
      {
        id: goddess_record[0].id,
        fields: {
          Points: new_points,
        },
      },
    ])

    //NOW have the slack bot do smth
    const username = await getInfoFromID(USER_ID)
    await sendSlackMessage("C09D6QF2DS4", `*${username} just earned ${badge_record[0].get("name")}, earning ${goddess_name} ${badge_record[0].get("points")} points! Hoorah!*`);

    //FINALLY redirect

    redirect('/')
  }