"use client"

import { useEffect, useState, useRef } from "react"

interface LoadingProps {
  text: string
  progress?: number
  showProgress?: boolean
  onAnimationComplete?: () => void
  onLoadingExit?: () => void
  isExiting?: boolean
}

const helloTranslations = [
  { language: "English", translation: "Hello" },
  { language: "Spanish", translation: "Hola" },
  { language: "French", translation: "Bonjour" },
  { language: "German", translation: "Hallo" },
  { language: "Italian", translation: "Ciao" },
  { language: "Russian", translation: "Привет" },
  { language: "Slovak", translation: "Ahoj" },
  { language: "Chinese", translation: "你好" },
  { language: "Japanese", translation: "こんにちは" },
  { language: "Korean", translation: "헬로" },
  { language: "Arabic", translation: "مرحبا" },
  { language: "Turkish", translation: "Merhaba" },
  { language: "Dutch", translation: "Hallo" },
  { language: "Swedish", translation: "Hej" },
  { language: "Polish", translation: "Cześć" },
  { language: "Czech", translation: "Ahoj" },
  { language: "Hungarian", translation: "Szia" },
]



export default function Loading({ text, progress = 0, showProgress = false, onAnimationComplete, onLoadingExit, isExiting = false }: LoadingProps) {
  const [currentHello, setCurrentHello] = useState("Hello")
  const [currentLanguage, setCurrentLanguage] = useState("English")
  const [fadeClass, setFadeClass] = useState("opacity-100")
  const [isClosing, setIsClosing] = useState(false)
  const [isFinishing, setIsFinishing] = useState(false) // Controla quando parar de trocar palavras
  const usedTranslationsRef = useRef<string[]>(["Hello"]) // Usar ref para evitar re-renders

  useEffect(() => {
    if (text === "Home") {
      let interval: NodeJS.Timeout
      let iterationCount = 0
      const maxIterations = 10

      const initialDelay = setTimeout(() => {
        interval = setInterval(() => {
          if (iterationCount < maxIterations && !isFinishing) {
            setFadeClass("opacity-0")
            
            setTimeout(() => {
              // Filtrar traduções que ainda não foram usadas
              const availableTranslations = helloTranslations.filter(
                translation => !usedTranslationsRef.current.includes(translation.translation)
              )
              
              // Se todas foram usadas, resetar (exceto a atual)
              if (availableTranslations.length === 0) {
                usedTranslationsRef.current = [currentHello]
                const resetAvailable = helloTranslations.filter(
                  translation => translation.translation !== currentHello
                )
                const randomIndex = Math.floor(Math.random() * resetAvailable.length)
                const selected = resetAvailable[randomIndex]
                setCurrentHello(selected.translation)
                setCurrentLanguage(selected.language)
                usedTranslationsRef.current = [currentHello, selected.translation]
              } else {
                // Escolher aleatoriamente das disponíveis
                const randomIndex = Math.floor(Math.random() * availableTranslations.length)
                const selected = availableTranslations[randomIndex]
                setCurrentHello(selected.translation)
                setCurrentLanguage(selected.language)
                usedTranslationsRef.current = [...usedTranslationsRef.current, selected.translation]
              }
              
              setFadeClass("opacity-100")
            }, 200)
            
            iterationCount++
          } else {
            clearInterval(interval)
            setIsFinishing(true) // Parar de trocar palavras
            
            setFadeClass("opacity-0")
            setTimeout(() => {
              setCurrentHello("Olá")
              setCurrentLanguage("Portuguese")
              setFadeClass("opacity-100")
              
              setTimeout(() => {
                onAnimationComplete?.()
                
                // Iniciar animação de fechamento
                setTimeout(() => {
                  setIsClosing(true)
                  
                  // Aguardar animação de fechamento antes de sair
                  setTimeout(() => {
                    onLoadingExit?.()
                  }, 800)
                }, 600)
              }, 800)
            }, 200)
          }
        }, 400)
      }, 500)

      return () => {
        clearTimeout(initialDelay)
        clearInterval(interval)
      }
    } else {
      // Para outras rotas, parar imediatamente de trocar palavras
      setIsFinishing(true)
      
      const timer = setTimeout(() => {
        onAnimationComplete?.()
        
        setTimeout(() => {
          setIsClosing(true)
          
          setTimeout(() => {
            onLoadingExit?.()
          }, 800)
        }, 400)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [text, onAnimationComplete, onLoadingExit])

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {/* Background preto completo com animação de fechamento */}
      <div 
        className="absolute inset-0 bg-black transition-all duration-800 ease-in-out"
        style={{
          borderBottomLeftRadius: isClosing ? '50vh' : '0',
          borderBottomRightRadius: isClosing ? '50vh' : '0'
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Texto principal com animação mais suave */}
        <div className="relative mb-8">
          <h1 
            className={`text-5xl font-bold tracking-wider text-white capitalize md:text-6xl lg:text-7xl xl:text-8xl transition-all duration-300 ease-out ${fadeClass} transform hover:scale-105`}
          >
            {text === "Home" ? currentHello : text}
          </h1>
          
          {/* Indicador de idioma para Home */}
          {text === "Home" && (
            <p 
              className={`text-center text-sm md:text-base text-gray-300 mt-4 transition-all duration-300 ease-out ${fadeClass}`}
            >
              {currentLanguage}
            </p>
          )}
          
          {/* Efeito de brilho mais sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -skew-x-12 animate-shimmer" />
        </div>

        {/* Barra de progresso */}
        {showProgress && (
          <div className="w-64 md:w-80 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Carregando recursos...</span>
              <span className="text-sm text-gray-400">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
            </div>
          </div>
        )}

        {/* Indicador de loading mais suave */}
        <div className="flex space-x-3 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white rounded-full animate-bounce opacity-50"
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: '0.5s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Efeito de vinheta mais sutil */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
    </div>
  )
}