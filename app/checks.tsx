"use server";

import { redirect } from 'next/navigation'
import { getInfoFromID } from "@/app/airtable";

export async function doChecks(USER_ID: any) {
    if (!USER_ID) {
        redirect('/login')
      }
    
      //put in place b4 unveiling!!
      if (USER_ID!="U06TV3F4HEUf") {
        redirect('/countdown')
      }
    
      const this_user = await getInfoFromID(USER_ID)
    
      if (!this_user) {
        redirect('/oops/slack')
      }
}