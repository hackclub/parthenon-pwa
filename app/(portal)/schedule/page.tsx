import { getInfoFromID } from "@/app/airtable";
import { doChecks } from "@/app/checks";
import Title from "@/app/components/launch/Title";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Schedule() {
    const c = await cookies()
    const USER_ID = c.get('user_id')?.value

  await doChecks(USER_ID)

  const this_user = await getInfoFromID(USER_ID)

    const workshops = [
        {
          title: "Create your Own PCB Badge!",
          description:
            "Learn how to create your own PCB badge that you can show off at Parthenon!",
          host: "Meghana",
          time: "9 am",
        },
        {
          title: "Learn some Game Dev in Godot",
          description:
            "Learn how to make your own 2d platformer in Godot!",
          host: "Tongyu",
          time: "10 am",
        },
        {
          title: "Frontend Skills - Next.JS Workshop",
          description:
            "Create a dynamic, full-stack site with Next.js and React!!",
          host: "Celeste",
          time: "10 AM",
        },
      ];

  return (
    <div className="bg-[#F4E3C1] text-black max-w-screen overflow-x-hidden">
        <Title user="" text="Schedule" />
      <div className="flex justify-center items-center mt-12 mb-16">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&mode=AGENDA&src=Y181NmQwZjdkYjJiMGZmYzlmMzU1NzRiMjkzODNkMzBjYzc3NjhkZGE5NTI1M2Q5ZGVlNzZkNWI2OTI5YmIwNzZlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23f09300"
          className="border border-[#777] rounded-lg bg-[#F4E3C1] shadow-lg"
          width="80%"
          height="500px"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="font-[Augustus] font-semibold text-[#3B5435] mb-3">
                  {workshop.title}
                </h2>
                <p className="font-[Romanica] text-gray-700 mb-4 leading-relaxed">
                  {workshop.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="font-medium text-[#3B5435] mr-2 font-[Augustus]">
                      Host:
                    </span>
                    <span className="text-gray-800 font-[Augustus]">{workshop.host}</span>
                  </div>

                  <div className="flex items-center">
                    <span className="font-medium text-[#3B5435] mr-2 font-[Augustus]">
                      Time:
                    </span>
                    <span className="text-gray-800 font-[Augustus]">{workshop.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
}