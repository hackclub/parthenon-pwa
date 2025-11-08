// app/api/auth/slack/callback/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { jwtVerify, createRemoteJWKSet } from 'jose'

const SLACK_JWKS = createRemoteJWKSet(new URL('https://slack.com/openid/connect/keys'))

export async function GET(req: Request) {
  const url = new URL(req.url)
  const code = url.searchParams.get('code')
  const returnedState = url.searchParams.get('state')

  const c = await cookies()
  const storedState = c.get('slack_oauth_state')?.value
  const storedNonce = c.get('slack_oidc_nonce')?.value

  if (!code || !returnedState || returnedState !== storedState) {
    return NextResponse.json({ error: 'Invalid state or code' }, { status: 400 })
  }

  // Exchange code for tokens
  const tokenRes = await fetch('https://slack.com/api/openid.connect.token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.SLACK_CLIENT_ID!,
      client_secret: process.env.SLACK_CLIENT_SECRET!,
      code,
      redirect_uri: process.env.SLACK_REDIRECT_URI!,
      grant_type: 'authorization_code',
    })
  }).then(r => r.json() as Promise<any>)

  if (!tokenRes.ok) {
    return NextResponse.json({ error: tokenRes.error || 'Token exchange failed' }, { status: 400 })
  }

  const idToken = tokenRes.id_token as string

  // Verify the id_token (signature + claims)
  const { payload } = await jwtVerify(idToken, SLACK_JWKS, {
    issuer: 'https://slack.com',
    audience: process.env.SLACK_CLIENT_ID!, // OIDC: aud = client_id
  })

  // Check nonce
  if (!storedNonce || payload.nonce !== storedNonce) {
    return NextResponse.json({ error: 'Invalid nonce' }, { status: 400 })
  }

  // Slack puts user id in a namespaced claim. Fallback to sub just in case.
  const slackUserId =
    (payload['https://slack.com/user_id'] as string | undefined) ||
    (payload.sub as string | undefined)

  if (!slackUserId) {
    return NextResponse.json({ error: 'No Slack user id found' }, { status: 400 })
  }

  // Optional: team/workspace id if you need it
  // const teamId = payload['https://slack.com/team_id'] as string | undefined

  // Clear transient cookies
  c.set('slack_oauth_state', '', { path: '/', maxAge: 0, secure: process.env.NODE_ENV === 'production' })
  c.set('slack_oidc_nonce', '', { path: '/', maxAge: 0, secure: process.env.NODE_ENV === 'production' })

  // Set your app cookie with the Slack user id
  c.set('user_id', slackUserId, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })

  // Redirect user into your app
  const to = process.env.NEXT_PUBLIC_APP_URL!
  return NextResponse.redirect(to)
}