"use client"

import type React from "react"
import { motion } from "framer-motion";
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Loading from "./loading"

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [effectStart, setEffectStart] = useState(true)
  const pathname = usePathname()

  // Função para determinar o texto do loading baseado na rota
  const getLoadingText = (path: string) => {
    // Remove a primeira barra
    const route = path.slice(1)

    if (route === "") return "Home"

    // Verifica se é uma rota de trabalho específico
    if (route.startsWith("work/")) {
      // Converte 'work/next-development' para 'Next Development'
      return route
        .split("/")[1]
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    }

    // Para rotas simples como 'about', 'skills', etc
    return route.charAt(0).toUpperCase() + route.slice(1)
  }

  useEffect(() => {
    setEffectStart(false)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, (getLoadingText(pathname) === "Home" ? 4300 : 1200))

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {<Loading text={getLoadingText(pathname)} />}
      {effectStart == false &&<motion.div
        initial={{ opacity: 0, y: 0 }} // Estado inicial: invisível e deslocado para baixo
        animate={{
          opacity: isLoading ? 0 : 1, // Controla a opacidade com base no estado `isLoading`
          y: isLoading ? 50 : 0, // Controla o deslocamento vertical com base no estado `isLoading`
          display: isLoading ? "none" : "block", // Controla a exibição com base no estado `isLoading`
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }} // Configuração da transição
      >
        {children}
      </motion.div>}
    </>
  )
}

