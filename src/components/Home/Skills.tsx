"use client"

const skillGroups = [
    {
        category: "Linguagem de Programação",
        skills: [
            { name: "Node.js", icon: "/icons/nodejs-original.svg" },
            { name: "Javascript", icon: "/icons/javascript-original.svg" },
            { name: "Python", icon: "/icons/python-original.svg" },
            { name: "Golang", icon: "/icons/go-original.svg" },
        ]
    },
    {
        category: "Banco de Dados",
        skills: [
            { name: "MongoDB", icon: "/icons/mongodb-original.svg" },
            { name: "PostgreSQL", icon: "/icons/postgresql-original.svg" },
            { name: "Firebase", icon: "/icons/firebase-original.svg" },
        ],
    },
    {
        category: "FrameWorks",
        skills: [
            { name: "Next.js", icon: "/icons/nextjs-original.svg" },
            { name: "React.js", icon: "/icons/react-original.svg" },
            { name: "Nest.js", icon: "/icons/nestjs-original.svg" },
            { name: "Angular", icon: "/icons/angular-original.svg" },
        ],
    },
    {
        category: "Estilização",
        skills: [
            { name: "Tailwind CSS", icon: "/icons/tailwindcss-original.svg" },
            { name: "Bootstrap", icon: "/icons/bootstrap-original.svg" },
            { name: "Framer Motion", icon: "/icons/framermotion.svg" },
            { name: "Figma", icon: "/icons/figma-original.svg" },
        ],
    },
    {
        category: "Outros",
        skills: [
            { name: "Docker", icon: "/icons/docker-original.svg" },
            { name: "Nginx", icon: "/icons/nginx-original.svg" },
            { name: "Photoshop", icon: "/icons/photoshop-original.svg" },
            { name: "Insomnia", icon: "/icons/insomnia-original.svg" },
        ],
    },
]

import { motion } from "framer-motion"
import Image from "next/image"

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-black">
            <div className="container px-6 mx-auto">
                {/* Título e descrição */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="inline-block px-4 py-2 text-3xl font-bold text-white md:text-4xl ">
                        Skills
                    </h2>
                    <p className="mt-2 text-gray-400">
                        As habilidades, ferramentas e tecnologias em que sou realmente bom:
                    </p>
                </motion.div>

                {/* Grupos de habilidades */}
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    {skillGroups.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            className="mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
                        >
                            <h3 className="mb-6 text-xl font-semibold text-pink-400">{group.category}</h3>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {group.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        className="flex flex-col items-center justify-center md:p-4 border border-blue-900/30 bg-[#0A1428] rounded-lg transition-colors hover:border-blue-600/50"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            className="relative w-12 h-12 mb-3"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Image
                                                src={skill.icon || "/placeholder.svg"}
                                                alt={skill.name}
                                                width={48}
                                                height={48}
                                                className="object-contain w-full h-full transition-all filter brightness-100 hover:brightness-110"
                                            />
                                        </motion.div>
                                        <span className="text-sm text-center text-gray-300">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}