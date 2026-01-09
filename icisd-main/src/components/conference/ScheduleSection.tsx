import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, MapPin, Coffee, Mic2, Users } from "lucide-react";

const scheduleData = {
  day1: {
    date: "6th April 2026",
    title: "Day 1 – Opening & Foundations",
    events: [
      {
        time: "08:00 – 09:00",
        title: "Registration & Welcome Coffee",
        type: "break",
        icon: Coffee,
        location: "Main Lobby",
      },
      {
        time: "09:00 – 09:45",
        title: "Inaugural Ceremony & Welcome Address",
        type: "keynote",
        icon: Mic2,
        location: "Grand Auditorium",
      },
      {
        time: "10:00 – 11:30",
        title: "Keynote Session",
        type: "keynote",
        icon: Mic2,
        location: "Grand Auditorium",
      },
      {
        time: "11:30 – 11:45",
        title: "Networking Break",
        type: "break",
        icon: Coffee,
        location: "Exhibition Hall",
      },
      {
        time: "11:45 – 13:00",
        title: "Technical Session – I",
        type: "session",
        icon: Users,
        location: "Hall A",
      },
      {
        time: "13:00 – 14:00",
        title: "Lunch Break",
        type: "break",
        icon: Coffee,
        location: "Dining Area",
      },
      {
        time: "14:00 – 15:30",
        title: "Technical Session – II",
        type: "session",
        icon: Users,
        location: "Hall B",
      },
      {
        time: "15:30 – 15:45",
        title: "Tea Break",
        type: "break",
        icon: Coffee,
        location: "Exhibition Hall",
      },
      {
        time: "15:45 – 17:30",
        title: "Workshop / Panel Discussion",
        type: "workshop",
        icon: Users,
        location: "Conference Hall",
      },
    ],
  },
  day2: {
    date: "7th April 2026",
    title: "Day 2 – Research & Innovation",
    events: [
      {
        time: "09:00 – 09:30",
        title: "Morning Coffee",
        type: "break",
        icon: Coffee,
        location: "Main Lobby",
      },
      {
        time: "09:30 – 11:00",
        title: "Technical Session – III",
        type: "session",
        icon: Users,
        location: "Hall A",
      },
      {
        time: "11:00 – 11:15",
        title: "Tea Break",
        type: "break",
        icon: Coffee,
        location: "Exhibition Hall",
      },
      {
        time: "11:15 – 13:00",
        title: "Technical Session – IV",
        type: "session",
        icon: Users,
        location: "Hall B",
      },
      {
        time: "13:00 – 14:00",
        title: "Lunch Break",
        type: "break",
        icon: Coffee,
        location: "Dining Area",
      },
      {
        time: "14:00 – 15:30",
        title: "Paper Presentation Session",
        type: "session",
        icon: Users,
        location: "Conference Hall",
      },
      {
        time: "15:30 – 16:00",
        title: "Valedictory Function",
        type: "keynote",
        icon: Mic2,
        location: "Grand Auditorium",
      },
      {
        time: "16:00 – 16:30",
        title: "Certificate Distribution & Closing",
        type: "keynote",
        icon: Mic2,
        location: "Grand Auditorium",
      },
    ],
  },
};

const badgeStyles = {
  keynote: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  session: "bg-sky-50 text-sky-700 border border-sky-200",
  workshop: "bg-violet-50 text-violet-700 border border-violet-200",
  break: "bg-slate-100 text-slate-600 border border-slate-200",
};

export const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState("day1");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const currentSchedule = scheduleData[activeDay];

  return (
    <section id="schedule" className="py-16 md:py-20 bg-slate-50">
      <div className="container-conference" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
            Event Timeline
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Conference Schedule
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Conference conducted on <strong>6th & 7th April 2026</strong> with
            keynote addresses, technical sessions, and workshops.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["day1", "day2"].map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`
                px-6 py-3 rounded-lg font-semibold text-sm
                transition-all duration-200
                ${
                  activeDay === day
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-emerald-500"
                }
              `}
            >
              <div>{scheduleData[day].title}</div>
              <div className="text-xs opacity-80">
                {scheduleData[day].date}
              </div>
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {currentSchedule.events.map((event, index) => (
              <div
                key={index}
                className="
                  bg-white
                  border border-slate-200
                  rounded-xl
                  p-5
                  flex gap-4
                  shadow-sm
                  hover:shadow-lg
                  transition-all duration-200
                "
              >
                <div className="min-w-[130px] font-semibold text-emerald-600 flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" />
                  {event.time}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="font-bold text-slate-900">
                      {event.title}
                    </h4>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${badgeStyles[event.type]}`}
                    >
                      {event.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
