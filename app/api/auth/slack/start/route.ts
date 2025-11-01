import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import crypto from 'crypto'

const dotenv = require('dotenv');
dotenv.config();

export async function GET(req: Request) {
  const clientId = process.env.SLACK_CLIENT_ID!
  const redirectUri = process.env.SLACK_REDIRECT_URI!
  console.log(clientId)
  console.log(redirectUri)

  const state = crypto.randomBytes(16).toString('hex')
  const nonce = crypto.randomBytes(16).toString('hex')

  const c = await cookies()

  c.set('slack_oauth_state', state, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 600 })
  c.set('slack_oidc_nonce', nonce, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 600 })

  const url = new URL('https://slack.com/openid/connect/authorize')
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('client_id', clientId)
  url.searchParams.set('scope', 'openid profile email')
  url.searchParams.set('redirect_uri', redirectUri)
  url.searchParams.set('state', state)
  url.searchParams.set('nonce', nonce)

  return NextResponse.redirect(url)
}