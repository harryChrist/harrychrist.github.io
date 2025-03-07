"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown } from "react-icons/fa6"
import experiences from "@/data/experiences"

export default function TimelineSection() {
  const [activeId, setActiveId] = useState<number | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const expandVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="min-h-screen bg-black px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Minha Jornada Profissional</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Um histórico das minhas experiências e conquistas ao longo dos anos
          </p>
        </header>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {experiences.map((experience, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${activeId === experience.id ? 'is-active' : ''}`}>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-[#0A1428] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
                <div
                  className={`h-8 w-8 rounded-full border-4 p-1 transition-all duration-300
        ${index === 0 ? "border-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.5)]" : ""} bg-[#050A14]`}
                >
                  <div
                    className={`h-full w-full rounded-full transition-colors
          ${index === 0 ? "bg-blue-600" : ""}`}
                  />
                </div>

              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#0A1428] p-6 rounded border border-blue-900/30 hover:border-blue-600/50 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <p className="text-lg font-medium">{experience.role}</p>
                  <time className="font-caveat font-medium text-white/70">{experience.period}</time>
                </div>
                <h3 className="text-xl font-bold text-blue-400">{experience.company}</h3>
                <p className="text-sm text-gray-400">
                  {experience.location} | {experience.period}
                </p>

                <div className={`mb-4 mt-3 flex flex-wrap gap-2`}>
                  {experience.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-blue-800 bg-blue-950/50 px-3 py-1 text-xs font-medium text-blue-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsExpanded(experience.id == activeId ? !isExpanded : true)
                    setActiveId(experience.id)
                  }}
                  className={`mt-2 flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-blue-400 transition-colors hover:bg-blue-950/50 hover:text-blue-300`}
                >
                  <FaChevronDown />
                  {isExpanded && activeId === experience.id ? "Menos detalhes" : "Mais detalhes"}
                </button>

                <AnimatePresence>
                  {isExpanded && activeId === experience.id && (
                    <motion.div
                      variants={expandVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="mt-4 overflow-hidden"
                    >
                      <h4
                        className={`mb-2 text-sm font-medium text-blue-300`}
                      >
                        Realizações:
                      </h4>
                      <ul className={`space-y-2 text-sm text-left`}>
                        {experience.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}