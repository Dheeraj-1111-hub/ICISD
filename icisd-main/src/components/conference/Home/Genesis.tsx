import { MapPin, Users } from "lucide-react";

const timelineEvents = [
  {
    year: "2020",
    title: "Going Virtual",
    description:
      "SRM IST Vadapalani’s CSE Department embraced borderless learning by hosting the inaugural virtual Research Conference on IoT, Cloud and Data Science (RCICD - 2020) on May 11, 2020.",
    image: "2020.png",
    attendees: "289 Online",
    sponsor: "",
  },
  {
    year: "2021",
    title: "The Embers",
    description:
      "Virtual International Research Conference on IOT, CLOUD & DATA SCIENCE (IRCICD ) was conducted by the CSE department of SRMIST Vadapalani campus  on 23rd and 24th, April ,2021",
    image: "2021.png",
    attendees: "280 Online",
    sponsor: "",
  },
  {
    year: "2022",
    title: "Reimagining Connection",
    description:
      "Fifth International Conference on IoT, Cloud Computing and Data Science (IRCICD 2022)  conducted on 6th and 7th May, 2022 ",
    image: "2022.png",
    attendees: "297 Online",
    sponsor: "/springer.png",
  },
  {
    year: "2023",
    title: "The Return",
    description:
      "The 2023 International Research Conference (IRCICD) brought together global experts and researchers to explore the synergy between IoT, Cloud computing, and Data Science.",
    image: "2023.png",
    attendees: "390 Attendees",
    sponsor: "/springer.png",
  },
  {
    year: "2025",
    title: "The Triumph",
    description:
      "The Department of Computer Science and Engineering, SRM Institute of Science and Technology, Vadapalani Campus, organized ICISD’25, an International-level Conference on the theme Intelligent Systems and Digital Transformation.",
    image: "2025.JPG",
    attendees: "360 Attendees",
    sponsor: "/atlantis.svg",
  },
];

const Genesis = () => {
  return (
    // Changed bg-gray-50 to bg-white or a very light green (bg-green-50) if you prefer
    // sticking to standard clean white background here for contrast.
    <div className="min-h-screen bg-white py-12 px-4 mt-5 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Genesis of the Conference
        </h2>
        <div className="mt-4 flex justify-center">
          {/* Added a small green divider accent */}
          <div className="h-1 w-20 bg-green-600 rounded"></div>
        </div>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Where Innovation Meets Integration.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line (Spine) - Light Gray for subtlety */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 md:translate-x-0" />

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ event, isLeft }) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* 1. Date/Dot Marker */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-green-600 border-4 border-white shadow-md z-10">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>

      {/* 2. Content Spacer */}
      <div className="hidden md:block w-1/2" />

      {/* 3. The Card */}
      <div
        className={`w-full md:w-1/2 pl-12 md:pl-0 ${
          isLeft ? "md:pr-12" : "md:pl-12"
        }`}
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl group">
          {/* Image Area */}
          <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
            <img
              src={
                event.image.startsWith("http")
                  ? event.image
                  : `/Timeline/${event.image}`
              }
              alt={event.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />

            {/* Year Badge */}
            <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              {event.year}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {event.description}
            </p>

            {/* --- NEW: Sponsor Logo Section --- */}
            {event.sponsor && (
              <div className="mb-4 flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                  Paper Publication
                </span>
                <img
                  src={event.sponsor}
                  alt="Sponsor Logo"
                  className="h-12 object-contain  hover:grayscale-0 transition-all opacity-90 hover:opacity-100"
                />
              </div>
            )}
            {/* --------------------------------- */}

            {/* Metadata Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
              <div className="flex items-center gap-1 group-hover:text-green-700 transition-colors">
                <Users className="w-3 h-3 text-green-600" />
                <span>{event.attendees}</span>
              </div>
              {event.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-green-600" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genesis;
