import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getUserEarnedBadgeIDs } from '@/app/api/badges/store/route'

export async function GET() {
  const c = await cookies()
  const userId = c.get('user_id')?.value
  if (!userId) return NextResponse.json({ badges: [] }, { status: 401 })

  // always fresh
  const ids = await getUserEarnedBadgeIDs(userId)
  // disable caching so “earned” refreshes every reload
  const res = NextResponse.json({ badges: ids })
  res.headers.set('Cache-Control', 'no-store')
  return res
}