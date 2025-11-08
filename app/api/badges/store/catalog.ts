import 'server-only'
import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY! }).base('appjvns14juc7Z2Vc')

//ooh this is important
type Badge = { id: string; name: string; desc: string; points: number; src: string; color: string}

let badgeCache: { data: Badge[]; expires: number } | null = null

export async function getBadgeCatalog(): Promise<Badge[]> {
  const now = Date.now()
  //recaching:
  if (badgeCache && now < badgeCache.expires) return badgeCache.data

  // 🔹 One query to load ALL badges (much faster than N x filterByFormula)
  const records = await base('Badges')
    .select({ view: 'Grid view' })
    .all()

  const data: Badge[] = records.map(r => ({
    id: (r.get('ID') as string) ?? '',
    name: (r.get('name') as string) ?? '',
    desc: ((r.get('desc') as string) ?? (r.get('description') as string) ?? ''),
    points: typeof r.get('points') === 'number' ? (r.get('points') as number) : Number(r.get('points') ?? 0),
    src: (r.get('src') as string) ?? '',
    color: (r.get('color') as string) ?? '#EAA548',
  }))

  // cache for 10 minutes (tune as you like)
  badgeCache = { data, expires: now + 10 * 60 * 1000 }
  return data
}

export async function getUserEarnedBadgeIDs(slackUserId: string): Promise<string[]> {
  const recs = await base('Goddess Badges')
    .select({
      view: 'Grid view',
      filterByFormula: `{Slack ID} = "${slackUserId}"`,
      maxRecords: 1,
    })
    .firstPage()

  if (recs.length === 0) return []
  const badges = recs[0].get('Badges')
  return Array.isArray(badges)
    ? (badges as unknown as unknown[]).filter((v): v is string => typeof v === 'string')
    : []
}