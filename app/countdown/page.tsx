import Header from "../components/Header";
import Image from "next/image";
import Countdown from "../components/Countdown";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getGoddessFromID, getInfoFromID } from "@/app/airtable";

export default async function PortalPage() {
  const c = await cookies();
  const USER_ID = c.get("user_id")?.value;

  if (!USER_ID) {
    redirect("/login");
  }

  const this_user = await getInfoFromID(USER_ID);

  if (!this_user) {
    redirect("/oops/slack");
  }

  return (
    <div className="min-h-screen bg-[#F4E3C1] flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col mt-8 items-center md:mt-30 p-10">
        {/* Normal text above image */}
        <h1 className="text-black text-4xl font-[Augustus] font-bold mb-6 text-center">
          Welcome, {this_user}, to your Parthenon Portal!
        </h1>

        <h3 className="font-[Windsol] text-black max-w-2xl text-center mb-10">
          <em>
            You find a pristine slab in the ruins... perhaps you must wait to see what knowledge it holds...
          </em>
        </h3>

        {/* Image with countdown overlay */}
        <div className="relative flex justify-center items-center w-full max-w-4xl">
          <Image
            src="/slab.png"
            alt="Stone slab"
            width={3000}
            height={1500}
            className="sm:w-full md:w-3/5 h-auto"
          />

          {/* Countdown centered on image */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl font-bold font-[Greek] text-black mb-4 drop-shadow-md">
              Countdown to Parthenon
            </h2>
            <Countdown targetDate="2025-11-14T17:00:00" />
          </div>
        </div>
      </div>
    </div>
  );
}