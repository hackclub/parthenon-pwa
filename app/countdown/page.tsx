import Header from "../components/Header";
import Image from "next/image";
import Countdown from "../components/Countdown";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
import { getGoddessFromID, getInfoFromID } from "@/app/airtable";

export default async function PortalPage() {

    const c = await cookies()
    const USER_ID = c.get('user_id')?.value

    if (!USER_ID) {
        redirect('/login')
    }

    const this_user = await getInfoFromID(USER_ID)

    if (!this_user) {
        redirect('/oops/slack')
      }

  return (
    <div className="min-h-screen bg-[#F4E3C1] flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col mt-8 items-center md:mt-30 p-10">
        <h1 className="text-black text-4xl font-[Augustus] font-bold mb-8 text-center">
          Welcome, {this_user}, to your Parthenon Portal!
        </h1>

        <h3 className="font-[Windsol] p-4">
          <em>
            You find a pristine slab in the ruins... perhaps it must be broken
            to discover what secrets lie inside...
          </em>
        </h3>

        <Image
          src="/slab.png"
          alt=""
          width={3000}
          height={1500}
          className="lg:w-1/3 md:w-1/2 sm:w-3/4 m-auto"
        />

        <h2 className="text-2xl font-bold font-[Greek] text-center my-6 text-black">
          Countdown to Parthenon
        </h2>

        <Countdown targetDate="2025-11-14T17:00:00" />
      </div>
    </div>
  );
}