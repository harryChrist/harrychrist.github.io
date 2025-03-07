"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce platform with Next.js and Stripe",
    image: "/placeholder.webp",
    link: "https://github.com",
    tags: ["Next.js", "Prisma", "Stripe"],
    category: "Web Development"
  },
  {
    id: 2,
    title: "AI Chat Interface",
    description: "AI-powered chat with natural language processing",
    image: "/placeholder.webp",
    link: "https://github.com",
    tags: ["OpenAI", "Next.js", "Tailwind"],
    category: "AI"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Real-time task management with collaboration",
    image: "/placeholder.webp",
    link: "https://github.com",
    tags: ["React", "Node.js", "Socket.io"],
    category: "Productivity"
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application",
    image: "/placeholder.webp",
    link: "https://github.com",
    tags: ["React Native", "Firebase", "Expo"],
    category: "Mobile"
  },
]

const categories = ["Todos", ...new Set(projects.map((project) => project.category))]

export default function ProjectSection() {
  const [filter, setFilter] = useState("Todos")

  const filteredProjects = filter === "Todos" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore my technical solutions and development projects
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? " bg-white text-black "
                  : "bg-gray-800 hover:bg-secondary/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-border"
              >
                <div className="relative aspect-video group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-col justify-between items-start mb-4 space-y-1">
                    <span className="text-sm text-muted-foreground bg-muted rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  </div>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-gray-700 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <FaGithub className="h-4 w-4" />
                    View on GitHub
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}