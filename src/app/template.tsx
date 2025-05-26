"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Loading from "./loading"
import LoadingDebug from "@/components/LoadingDebug"
import { useResourceLoader } from "@/hooks/useResourceLoader"
import { getPageResources, filterExistingImages } from "@/utils/resourceCollector"

export default function Template({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const [isLoadingExiting, setIsLoadingExiting] = useState(false)
  const [pageResources, setPageResources] = useState<{images: string[], fonts: string[], minLoadingTime: number}>({
    images: [],
    fonts: [],
    minLoadingTime: 2000
  })
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

  // Bloquear scroll durante loading
  useEffect(() => {
    if (!isLoadingExiting) {
      // Bloquear scroll
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      // Liberar scroll quando loading sair
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
    }
  }, [isLoadingExiting])

  // Carregar recursos da página
  useEffect(() => {
    const loadPageResources = async () => {
      const resources = getPageResources(pathname)
      
      // Filtrar apenas imagens que existem para evitar erros 404
      const existingImages = await filterExistingImages(resources.images)
      
      setPageResources({
        ...resources,
        images: existingImages
      })
    }

    loadPageResources()
  }, [pathname])

  // Hook de carregamento de recursos (agora só para monitorar progresso)
  const { progress, loadedResources, totalResources, resourcesLoaded } = useResourceLoader({
    images: pageResources.images,
    fonts: pageResources.fonts,
    minLoadingTime: pageResources.minLoadingTime,
    isAnimationComplete: true // Sempre true para não bloquear
  })

  // Callback para quando a animação dos "olás" termina
  const handleAnimationComplete = () => {
    setIsAnimationComplete(true)
    // Mostrar conteúdo quando animação terminar
    setShowContent(true)
  }

  // Callback para quando loading começa a sair
  const handleLoadingExit = () => {
    setIsLoadingExiting(true)
  }

  // Reset quando a rota muda
  useEffect(() => {
    setShowContent(false)
    setIsAnimationComplete(false)
    setIsLoadingExiting(false)
  }, [pathname])

  return (
    <>
      {/* Debug do loading (apenas em desenvolvimento) */}
      <LoadingDebug
        isLoading={!isLoadingExiting}
        progress={progress}
        loadedResources={loadedResources}
        totalResources={totalResources}
        images={pageResources.images}
        resourcesLoaded={resourcesLoaded}
        isAnimationComplete={isAnimationComplete}
      />

      {/* Loading - fica por cima até sair */}
      <AnimatePresence>
        {!isLoadingExiting && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 1,
              y: "-100vh"
            }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut" 
            }}
            className="fixed inset-0 z-50"
          >
            <Loading 
              text={getLoadingText(pathname)} 
              progress={progress}
              showProgress={false}
              onAnimationComplete={handleAnimationComplete}
              onLoadingExit={handleLoadingExit}
              isExiting={isLoadingExiting}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conteúdo principal - sempre presente, mas inicialmente escondido */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: showContent ? 1 : 0
        }}
        transition={{ 
          duration: 0.5,
          delay: showContent ? 0.3 : 0
        }}
        className="relative z-30"
      >
        {children}
      </motion.div>
    </>
  )
}