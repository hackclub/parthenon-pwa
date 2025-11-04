import { NextResponse } from 'next/server'
import { getBadgeCatalog } from '@/app/api/badges/store/catalog'

export async function GET(request: Request) {
  const data = await getBadgeCatalog()
  const res = NextResponse.json({ badges: data })
  // Allow browser/proxy to cache a little too (optional)
  res.headers.set('Cache-Control', 'public, max-age=300') // 5 min
  return res
}