"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Loading from "./loading"

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true) // Controla o loading
  const [showContent, setShowContent] = useState(false) // Controla o conteúdo
  const pathname = usePathname()

  // Função para definir o texto do loading com base na rota
  const getLoadingText = (path: string) => {
    const route = path.slice(1)
    if (route === "") return "Home"
    if (route.startsWith("work/")) {
      return route
        .split("/")[1]
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    }
    return route.charAt(0).toUpperCase() + route.slice(1)
  }

  // Efeito para simular o tempo de loading e ativar o conteúdo
  useEffect(() => {
    const loadingTime = getLoadingText(pathname) === "Home" ? 3200 : 1700
    const timer = setTimeout(() => {
      setIsLoading(false) // Desativa o loading
      setShowContent(true) // Ativa o conteúdo
    }, loadingTime)

    return () => clearTimeout(timer) // Limpa o timer ao desmontar
  }, [pathname])

  return (
    <>
      {/* Mostra o loading enquanto isLoading for true */}
      {isLoading && <Loading text={getLoadingText(pathname)} />}
      
      {/* Mostra o conteúdo só quando showContent for true */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Estado inicial (invisível e deslocado)
          animate={{ opacity: 1, y: 0 }} // Estado final (visível e no lugar)
          transition={{ duration: 1, ease: "backInOut" }} // Animação suave
        >
          {children}
        </motion.div>
      )}
    </>
  )
}