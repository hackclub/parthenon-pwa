import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Workshops() {
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
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus.",
      host: "Estella",
      time: "11 am",
    },
    {
      title: "Frontend Skills - React Workshop",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede.",
      host: "Emily Rodriguez",
      time: "9:00 AM - 11:00 AM",
    },
    {
      title: "Djano Workshop",
      description:
        "Mauris ipsum nulla, malesuada ut, efficitur eu, tempor et, tellus. Nulla facilisi. Morbi imperdiet, mauris ac auctor dictum.",
      host: "Dr. Alex Thompson",
      time: "3:00 PM - 5:00 PM",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-[#F4E3C1] p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#3B5435]">
            Workshops
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold text-[#3B5435] mb-3">
                  {workshop.title}
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {workshop.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="font-medium text-[#3B5435] mr-2">
                      Host:
                    </span>
                    <span className="text-gray-800">{workshop.host}</span>
                  </div>

                  <div className="flex items-center">
                    <span className="font-medium text-[#3B5435] mr-2">
                      Time:
                    </span>
                    <span className="text-gray-800">{workshop.time}</span>
                  </div>
                </div>
                2
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
