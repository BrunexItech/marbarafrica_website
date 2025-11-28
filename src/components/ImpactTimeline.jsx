import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  Lightbulb,
  FileText,
  Users,
  Heart,
  BarChart3,
  BookOpen,
} from "lucide-react";

const timelineData = [
  {
    date: "January 2024",
    title: "Project Inception & Planning",
    description:
      "Initial conceptualization and planning phase. Assembled research team, defined objectives, and established partnerships with key institutions.",
    icon: <Lightbulb className="w-5 h-5 text-white" />,
    status: "completed",
    stats: ["5 Research Partners", "Team Assembled"],
    progress: 100,
  },
  {
    date: "March 2024",
    title: "Ethics Approval & Funding",
    description:
      "Secured ethics approval from institutional review boards and obtained funding from NIMH. All regulatory requirements met.",
    icon: <FileText className="w-5 h-5 text-white" />,
    status: "completed",
    stats: ["Ethics Approved", "Funding Secured"],
    progress: 100,
  },
  {
    date: "June 2024",
    title: "Team Training & Site Setup",
    description:
      "Completed comprehensive training for research staff across all sites. Established protocols and set up data collection systems.",
    icon: <Users className="w-5 h-5 text-white" />,
    status: "completed",
    stats: ["25 Staff Trained", "Protocols Established"],
    progress: 100,
  },
  {
    date: "September 2024 - Present",
    title: "Data Collection Phase",
    description:
      "Currently recruiting participants and collecting data across all research sites. Real-time monitoring of progress and data quality.",
    icon: <Heart className="w-5 h-5 text-white" />,
    status: "active",
    stats: ["342 Participants Recruited", "Data Quality Monitored"],
    progress: 65,
  },
  {
    date: "January 2025",
    title: "Data Analysis",
    description:
      "Begin comprehensive analysis of collected data using advanced statistical methods and machine learning techniques.",
    icon: <BarChart3 className="w-5 h-5 text-white" />,
    status: "future",
    stats: ["Statistical Analysis", "Machine Learning"],
    progress: 0,
  },
  {
    date: "July 2025",
    title: "Publication & Dissemination",
    description:
      "Prepare research findings for publication in peer-reviewed journals and present at international conferences.",
    icon: <BookOpen className="w-5 h-5 text-white" />,
    status: "future",
    stats: ["Research Papers", "Conference Presentations"],
    progress: 0,
  },
];

const statusColors = {
  completed: "bg-green-500",
  active: "bg-yellow-500",
  future: "bg-gray-300",
};

export default function ImpactTimeline() {
  const [completedTextIndex, setCompletedTextIndex] = useState({});

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Heartbeat Button */}
          <motion.div
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full mb-4 cursor-pointer shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            Research Journey
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-2">
            MarBar Africa Research Timeline
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track our progress from conception to completion of this
            groundbreaking mental health research
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 w-full flex flex-col items-center">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-3/4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {/* Marker */}
              <div className="flex-shrink-0 relative z-10 mb-4 sm:mb-0">
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${statusColors[item.status]}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  {item.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="sm:ml-8 w-full">
                <motion.div
                  className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.35 }}
                >
                  <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                  {/* Streaming Text */}
                  <p className="text-gray-700 mb-4 min-h-[3rem]">
                    {!completedTextIndex[index] ? (
                      <Typewriter
                        words={[item.description]}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={30}
                        deleteSpeed={20}
                        delaySpeed={500}
                        onLoopDone={() =>
                          setCompletedTextIndex((prev) => ({
                            ...prev,
                            [index]: true,
                          }))
                        }
                      />
                    ) : (
                      item.description // render as static text after typing
                    )}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      item.status === "completed"
                        ? "Completed"
                        : item.status === "active"
                        ? "In Progress"
                        : "Upcoming",
                      ...item.stats,
                    ].map((stat, i) => (
                      <motion.span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.35 + i * 0.2 }}
                      >
                        {stat}
                      </motion.span>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${statusColors[item.status]}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.35 }}
                    ></motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
