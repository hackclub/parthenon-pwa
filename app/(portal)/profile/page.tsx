import Title from "@/app/components/launch/Title";
import Badge from "@/app/components/launch/Badge";
import Image from "next/image";
import { BadgeFromID, getBadgesFromID, getGoddessFromID, getInfoFromID } from "@/app/airtable";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import { getBadgeCatalog, getUserEarnedBadgeIDs } from "@/app/api/badges/store/catalog";
import { doChecks } from "@/app/checks";

export default async function Home() {
  const c = await cookies()
  const USER_ID = c.get('user_id')?.value

  //this is put in here bc we use UserID in getEarnedUserBadges...
  if (!USER_ID) {
    redirect("/login"); // redirect() is typed as `never`, so TS knows we don't continue
  }

  
  await doChecks(USER_ID)

  const this_user = await getInfoFromID(USER_ID)

    const [catalog, earnedIds] = await Promise.all([
      getBadgeCatalog(),                 // cached (10 min)
      getUserEarnedBadgeIDs(USER_ID),     // fresh each request
    ])
    const earnedSet = new Set(earnedIds)
    // for (let i = 0; i<10; i++) {
    //   console.log(String(earnedSet.has(catalog[i].id)))
    // }

    const goddess = await getGoddessFromID(USER_ID)
    const goddess_msg = `Patron of ${goddess}`

  return (
    <div className="w-full text-black">
        <Title user={this_user} text="[name]'s Profile" subtitle={goddess_msg}/>
        <div className="p-4 mx-auto w-full">
        <div className="w-full p-4 bg-[#DBC491] rounded-lg">
        <div className="grid gap-3 grid-cols-3">
    {catalog.map(b => (
      <Badge key={b.id} object={b} earned={String(earnedSet.has(b.id))} />
    ))}
  </div>
</div>
</div>
    </div>
  );
}