"use client"

import { useState, useEffect, useCallback } from 'react'

interface UseResourceLoaderProps {
  images?: string[]
  fonts?: string[]
  minLoadingTime?: number
  isAnimationComplete?: boolean
}

interface LoadingState {
  isLoading: boolean
  progress: number
  loadedResources: number
  totalResources: number
  resourcesLoaded: boolean
}

export function useResourceLoader({ 
  images = [], 
  fonts = [], 
  minLoadingTime = 2000,
  isAnimationComplete = false
}: UseResourceLoaderProps = {}): LoadingState {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    progress: 0,
    loadedResources: 0,
    totalResources: 0,
    resourcesLoaded: false
  })

  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
      img.src = src
    })
  }, [])

  const preloadFont = useCallback((fontFamily: string): Promise<void> => {
    return new Promise((resolve) => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          resolve()
        })
      } else {
        // Fallback para navegadores mais antigos
        setTimeout(resolve, 100)
      }
    })
  }, [])

  useEffect(() => {
    const loadResources = async () => {
      const startTime = Date.now()
      const totalResources = images.length + fonts.length + 1 // +1 para o DOM
      
      setLoadingState(prev => ({
        ...prev,
        totalResources
      }))

      let loadedCount = 0

      const updateProgress = () => {
        loadedCount++
        const progress = Math.round((loadedCount / totalResources) * 100)
        setLoadingState(prev => ({
          ...prev,
          loadedResources: loadedCount,
          progress
        }))
      }

      try {
        // Aguardar o DOM estar pronto
        if (document.readyState === 'loading') {
          await new Promise(resolve => {
            document.addEventListener('DOMContentLoaded', resolve)
          })
        }
        updateProgress()

        // Carregar imagens
        const imagePromises = images.map(async (src) => {
          try {
            await preloadImage(src)
            updateProgress()
          } catch (error) {
            console.warn(`Failed to preload image: ${src}`, error)
            updateProgress() // Continua mesmo se uma imagem falhar
          }
        })

        // Carregar fontes
        const fontPromises = fonts.map(async (font) => {
          try {
            await preloadFont(font)
            updateProgress()
          } catch (error) {
            console.warn(`Failed to preload font: ${font}`, error)
            updateProgress()
          }
        })

        // Aguardar todos os recursos
        await Promise.allSettled([...imagePromises, ...fontPromises])

        // Garantir tempo mínimo de loading
        const elapsedTime = Date.now() - startTime
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime)
        
        if (remainingTime > 0) {
          await new Promise(resolve => setTimeout(resolve, remainingTime))
        }

        // Marcar recursos como carregados
        setLoadingState(prev => ({
          ...prev,
          resourcesLoaded: true,
          progress: 100
        }))

      } catch (error) {
        console.error('Error loading resources:', error)
        // Mesmo com erro, marca recursos como carregados após o tempo mínimo
        const elapsedTime = Date.now() - startTime
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime)
        
        setTimeout(() => {
          setLoadingState(prev => ({
            ...prev,
            resourcesLoaded: true,
            progress: 100
          }))
        }, remainingTime)
      }
    }

    loadResources()
  }, [images, fonts, minLoadingTime, preloadImage, preloadFont])

  return loadingState
} 