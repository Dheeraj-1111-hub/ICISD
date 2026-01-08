import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, MapPin, Coffee, Mic2, Users } from "lucide-react";

const scheduleData = {
  day1: {
    date: "6th April 2026",
    title: "Day 1 - Opening & Foundations",
    events: [
      {
        time: "08:00 - 09:00",
        title: "Registration & Welcome Coffee",
        type: "break",
        icon: Coffee,
        location: "Main Lobby",
      },
      {
        time: "09:00 - 09:45",
        title: "Inaugural Ceremony & Welcome Address",
        type: "keynote",
        icon: Mic2,
        location: "Grand Auditorium",
      },
      {
        time: "10:00 - 11:30",
        title: "Keynote Session",
        type: "keynote",
        icon: Mic2,
        location: "Grand Auditorium",
      },
      {
        time: "11:30 - 11:45",
        title: "Networking Break",
        type: "break",
        icon: Coffee,
        location: "Exhibition Hall",
      },
      {
        time: "11:45 - 13:00",
        title: "Technical Session – I",
        type: "session",
        icon: Users,
        location: "Hall A",
      },
      {
        time: "13:00 - 14:00",
        title: "Lunch Break",
        type: "break",
        icon: Coffee,
        location: "Dining Area",
      },
      {
        time: "14:00 - 15:30",
        title: "Technical Session – II",
        type: "session",
        icon: Users,
        location: "Hall B",
      },
      {
        time: "15:30 - 15:45",
        title: "Tea Break",
        type: "break",
        icon: Coffee,
        location: "Exhibition Hall",
      },
      {
        time: "15:45 - 17:30",
        title: "Workshop / Panel Discussion",
        type: "workshop",
        icon: Users,
        location: "Conference Hall",
      },
    ],
  },
  day2: {
    date: "7th April 2026",
    title: "Day 2 - Research & Innovation",
    events: [
      {
        time: "09:00 - 09:30",
        title: "Morning Coffee",
        type: "break",
        icon: Coffee,
        location: "Main Lobby",
      },
      {
        time: "09:30 - 11:00",
        title: "Technical Session – III",
        type: "session",
        icon: Users,
        location: "Hall A",
      },
      {
        time: "11:00 - 11:15",
        title: "Tea Break",
        type: "break",
        icon: Coffee,
        location: "Exhibition Hall",
      },
      {
        time: "11:15 - 13:00",
        title: "Technical Session – IV",
        type: "session",
        icon: Users,
        location: "Hall B",
      },
      {
        time: "13:00 - 14:00",
        title: "Lunch Break",
        type: "break",
        icon: Coffee,
        location: "Dining Area",
      },
      {
        time: "14:00 - 15:30",
        title: "Paper Presentation Session",
        type: "session",
        icon: Users,
        location: "Conference Hall",
      },
      {
        time: "15:30 - 16:00",
        title: "Valedictory Function",
        type: "keynote",
        icon: Mic2,
        location: "Grand Auditorium",
      },
      {
        time: "16:00 - 16:30",
        title: "Certificate Distribution & Closing",
        type: "keynote",
        icon: Mic2,
        location: "Grand Auditorium",
      },
    ],
  },
};

const typeColors = {
  keynote: "bg-primary text-primary-foreground",
  session: "bg-accent/20 text-accent-foreground border border-accent/30",
  workshop: "bg-emerald-100 text-emerald-800 border border-emerald-200",
  break: "bg-muted text-muted-foreground",
};

export const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState("day1");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const currentSchedule = scheduleData[activeDay];

  return (
    <section id="schedule" className="section-padding bg-background">
      <div className="container-conference" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-semibold mb-4">
            Event Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conference Schedule
          </h2>
          <p className="text-muted-foreground">
            Conference conducted on <strong>6th & 7th April 2026</strong> with
            technical sessions, workshops, and keynote addresses.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {["day1", "day2"].map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-lg font-semibold ${
                activeDay === day
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border"
              }`}
            >
              <div>{scheduleData[day].title}</div>
              <div className="text-sm opacity-80">{scheduleData[day].date}</div>
            </button>
          ))}
        </div>

        {/* Schedule */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-4xl mx-auto space-y-3"
          >
            {currentSchedule.events.map((event, index) => (
              <div key={index} className="card-conference flex gap-4">
                <div className="min-w-[130px] font-semibold text-primary flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {event.time}
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <h4 className="font-bold">{event.title}</h4>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        typeColors[event.type]
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" /> {event.location}
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
