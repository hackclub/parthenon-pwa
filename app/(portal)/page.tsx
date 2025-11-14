import { getGoddessFromID, getInfoFromID } from "@/app/airtable";
import Goddess, { GoddessList } from "@/app/components/launch/GoddessInfo";
import Title from '@/app/components/launch/Title'
import { cookies } from "next/headers";
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { doChecks } from '@/app/checks'

export default async function Page() {

  const c = await cookies()
  const USER_ID = c.get('user_id')?.value
  const this_user = await getInfoFromID(USER_ID)

  await doChecks(USER_ID)

  const goddess_name = await getGoddessFromID(USER_ID)
  var this_goddess = new Goddess("", "", "", "");

  for (let i=0; i < GoddessList.length; i++) {
    if (GoddessList[i].name==goddess_name) {
      this_goddess = GoddessList[i]
      break;
    }
  }

  const customStyles = {
    border: `6px solid ${this_goddess.color}`,
  };

var classes = "border rounded-lg p-4 bg-[#DBC491]"

  return (
    <div className="w-full text-black max-w-screen overflow-x-hidden">
      <Title user={this_user} text="Welcome to Parthenon, [name]!" />
      <Image
        src="/nycskyline.png"
        alt=""
        width={3000}
        height={1500}
        className="h-[25vw] w-auto m-auto"
      />
      <h1 className="font-[Augustus] my-5">Welcome to NYC, {this_user}!</h1>
      <h1 className="font-[Augustus] my-5">Your patron goddess is...</h1>
      <div className={classes} style={customStyles}>
        <Image 
        src={this_goddess.src}
        alt=""
        width={3000}
        height={1500}
        className="w-1/3 m-auto god_img"
        />
        <h1 className="font-[Augustus]">{this_goddess.name}</h1>
        <p className="font-[Romanica]">{this_goddess.desc}</p>
      </div>
      <div className="h-[30px]">

      </div>
    </div>
  )
}
