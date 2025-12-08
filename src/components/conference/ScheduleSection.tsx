import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, MapPin, Coffee, Mic2, Users } from "lucide-react";

const scheduleData = {
  day1: {
    date: "Feb 15, 2026",
    title: "Day 1 - Opening & Foundations",
    events: [
      { time: "08:00 - 09:00", title: "Registration & Welcome Coffee", type: "break", icon: Coffee, location: "Main Lobby" },
      { time: "09:00 - 09:45", title: "Inaugural Ceremony & Welcome Address", type: "keynote", icon: Mic2, location: "Grand Auditorium" },
      { time: "10:00 - 11:30", title: "Keynote: Future of Renewable Energy Systems", type: "keynote", icon: Mic2, speaker: "Dr. Elena Vasquez", location: "Grand Auditorium" },
      { time: "11:30 - 11:45", title: "Networking Break", type: "break", icon: Coffee, location: "Exhibition Hall" },
      { time: "11:45 - 13:00", title: "Technical Session: AI & Smart Technologies", type: "session", icon: Users, location: "Hall A" },
      { time: "13:00 - 14:00", title: "Lunch & Poster Presentations", type: "break", icon: Coffee, location: "Dining Area" },
      { time: "14:00 - 15:30", title: "Workshop: Sustainable Engineering Practices", type: "workshop", icon: Users, location: "Workshop Room 1" },
      { time: "15:30 - 17:00", title: "Panel Discussion: Climate Policy & Action", type: "session", icon: Mic2, location: "Grand Auditorium" },
      { time: "17:00 - 18:30", title: "Technical Session: Green Finance & ESG", type: "session", icon: Users, location: "Hall B" },
      { time: "19:00 - 21:00", title: "Welcome Dinner & Networking", type: "break", icon: Coffee, location: "Rooftop Garden" },
    ],
  },
  day2: {
    date: "Feb 16, 2026",
    title: "Day 2 - Innovation & Practice",
    events: [
      { time: "08:30 - 09:00", title: "Morning Coffee & Networking", type: "break", icon: Coffee, location: "Main Lobby" },
      { time: "09:00 - 10:30", title: "Keynote: Circular Economy Revolution", type: "keynote", icon: Mic2, speaker: "Prof. Anders Lindberg", location: "Grand Auditorium" },
      { time: "10:30 - 10:45", title: "Refreshment Break", type: "break", icon: Coffee, location: "Exhibition Hall" },
      { time: "10:45 - 12:15", title: "Technical Session: Smart Cities & IoT", type: "session", icon: Users, location: "Hall A" },
      { time: "12:15 - 13:15", title: "Lunch Break", type: "break", icon: Coffee, location: "Dining Area" },
      { time: "13:15 - 14:45", title: "Workshop: Data Science for Sustainability", type: "workshop", icon: Users, location: "Workshop Room 2" },
      { time: "15:00 - 16:30", title: "Technical Session: Biotechnology Innovations", type: "session", icon: Users, location: "Hall B" },
      { time: "16:30 - 17:30", title: "Q&A with Industry Leaders", type: "session", icon: Mic2, location: "Grand Auditorium" },
      { time: "17:30 - 18:00", title: "Closing Ceremony & Awards", type: "keynote", icon: Mic2, location: "Grand Auditorium" },
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
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentSchedule = scheduleData[activeDay];

  return (
    <section id="schedule" className="section-padding bg-background">
      <div className="container-conference" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-semibold mb-4">
            Event Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conference Schedule
          </h2>
          <p className="text-muted-foreground">
            Two days of intensive learning, networking, and inspiration with world-class 
            speakers and cutting-edge research presentations.
          </p>
        </motion.div>

        {/* Day Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center gap-4 mb-10"
        >
          {(["day1", "day2"] as const).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeDay === day
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground border border-border hover:bg-muted"
              }`}
            >
              <span className="block text-base">{scheduleData[day].title}</span>
              <span className={`block text-sm mt-0.5 ${activeDay === day ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {scheduleData[day].date}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Schedule Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-3">
              {currentSchedule.events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="card-conference flex flex-col sm:flex-row gap-4 items-start"
                >
                  {/* Time */}
                  <div className="flex items-center gap-2 text-primary font-semibold min-w-[140px]">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="font-bold text-foreground">{event.title}</h4>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium capitalize ${typeColors[event.type]}`}>
                        {event.type}
                      </span>
                    </div>
                    {event.speaker && (
                      <p className="text-sm text-primary font-medium mb-1">Speaker: {event.speaker}</p>
                    )}
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};