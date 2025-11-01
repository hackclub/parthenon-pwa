import Title from "@/app/components/launch/Title";
import Badge from "@/app/components/launch/Badge";
import Image from "next/image";
import { BadgeFromID, getBadgesFromID, getInfoFromID } from "@/app/airtable";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

export default async function Home() {
  const c = await cookies()
  const USER_ID = c.get('user_id')?.value
  
  if (!USER_ID) {
      redirect('/api/auth/slack/start')
    }


  const this_user = await getInfoFromID(USER_ID)

  const current_badges = await getBadgesFromID(USER_ID)
  console.log("current badges =", current_badges)

  const badge_elements = []

  for (let i = 1; ; i++) {
    const envKey = `BADGE${i}`           // builds "BADGE1", "BADGE2", ...
    const badgeValue = process.env[envKey]
  
    if (!badgeValue) break                // stop when no more badges
  
    const badge = await BadgeFromID(badgeValue)

    var is_earned=""
    if (current_badges) {
    if (current_badges.includes(badgeValue)) {
      var is_earned="true"
      console.log("is earned")
    } else {
      console.log("is not earned")
    }
  }

    badge_elements.push(<Badge object={badge} earned={is_earned} />);
      }


  return (
    <div className="w-full">
        <Title user={this_user} text="[name]'s Profile" subtitle="Patron of Bellona, Goddess of War"/>
        <div className="p-4 mx-auto w-full">
        <div className="w-full p-4 bg-nav rounded-lg">
        <div className="grid grid-cols-3 gap-4">
            {badge_elements}
         </div>
</div>
</div>
    </div>
  );
}