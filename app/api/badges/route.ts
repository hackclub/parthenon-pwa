import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import Airtable from 'airtable'
import { redirect } from 'next/navigation'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appjvns14juc7Z2Vc')

export async function GET(req: Request) {
  // optionally: guard with a simple Referer/origin check
  return POST(req) // reuse the same implementation
}

export async function POST(req: Request) {
  const c = await cookies()
  const USER_ID = c.get('user_id')?.value
  
    if (!USER_ID) {
        redirect('/login')
    }

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

    redirect('/')
  }