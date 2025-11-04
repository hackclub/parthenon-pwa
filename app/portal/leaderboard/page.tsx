import Title from "@/app/components/launch/Title";
import Image from "next/image";
import Leaderboard from "@/app/components/launch/Leaderboard";
import { getGoddessFromID, getInfoFromID } from "@/app/airtable";
import Goddess, { GoddessList } from "@/app/components/launch/GoddessInfo";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const c = await cookies()
  const USER_ID = c.get('user_id')?.value

  if (!USER_ID) {
      redirect('/api/auth/slack/start')
    }

  const this_user = await getInfoFromID(USER_ID)
  const goddess_name = await getGoddessFromID(USER_ID)
  var this_goddess = new Goddess("default", "", "")

  for (let i=0; i < GoddessList.length; i++) {
    if (GoddessList[i].name==goddess_name) {
      this_goddess = GoddessList[i]
      break;
    }
  }
  
  //TODO: get "ranking list" with numbers
    return (
      <div className="w-full text-black">
          <Title user={this_user} text="Leaderboard" />
          <div className="p-4 mx-auto w-full">
          <div className="w-full p-4 bg-[#DBC491] rounded-lg">
            <Leaderboard this_goddess={this_goddess}/>
            </div>
            </div>
      </div>)}

