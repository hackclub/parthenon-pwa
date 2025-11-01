import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import crypto from 'crypto'
import { redirect } from 'next/navigation';

const dotenv = require('dotenv');
dotenv.config();

export async function GET(req: Request) {
  const c = await cookies()

  c.delete('slack_oauth_state')
  c.delete('slack_oidc_nonce')
  c.delete('user_id')

  return redirect("/")
}