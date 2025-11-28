import { Dumbbell, Brain, Cross } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Impact() {
  const impacts = [
    {
      title: "Capacity Impact",
      description:
        "Enhancing collaborative research capabilities across institutions and building sustainable mental health research infrastructure.",
      icon: <Dumbbell className="w-10 h-10 text-blue-600" />,
      metric: 5,
      label: "RESEARCH SITES",
      gradient: "from-blue-100 via-indigo-100 to-blue-50",
    },
    {
      title: "Policy Impact",
      description:
        "Generating evidence-based mental health research from routine clinical settings to inform policy decisions.",
      icon: <Brain className="w-10 h-10 text-indigo-600" />,
      metric: 25,
      label: "POLICY PAPERS",
      gradient: "from-indigo-100 via-purple-100 to-purple-50",
    },
    {
      title: "Clinical Research",
      description:
        "Provider and user-centered research focusing on practical applications in clinical practice.",
      icon: <Cross className="w-10 h-10 text-purple-600" />,
      metric: 342,
      label: "PARTICIPANTS",
      gradient: "from-purple-100 via-pink-100 to-blue-50",
    },
  ];

  // Count-up hook
  function useCountUp(target) {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const end = target;
      const duration = 1200; // ms
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }, [target]);
    return count;
  }

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Tag */}
        <div className="flex justify-center mb-6">
          <span className="px-5 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm shadow-sm animate-pulse">
            OUR IMPACT
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-900 mb-3">
          Transforming Mental Health Research
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-14 text-lg">
          Through innovative approaches and collaborative partnerships
        </p>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, idx) => {
            const count = useCountUp(impact.metric);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className={`
                  group p-8 rounded-3xl shadow-xl border border-gray-200 
                  hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3
                  bg-gradient-to-br ${impact.gradient} bg-animate
                `}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-6 mx-auto"
                >
                  {impact.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                  {impact.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {impact.description}
                </p>

                {/* Metrics */}
                <div className="text-center">
                  <span className="text-3xl font-bold text-blue-700">{count}</span>
                  <span className="block text-xs mt-1 tracking-wide text-gray-500 uppercase">
                    {impact.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Gradient animation */}
      <style jsx>{`
        .bg-animate {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
