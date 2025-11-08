import { redirect } from 'next/navigation'

export default async function SignoutPage() {

  redirect('/api/auth/slack/end/') // or wherever
}