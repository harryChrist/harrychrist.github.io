"use client"

import { useEffect, useState } from "react"

interface LoadingProps {
  text: string
}

const helloTranslations = [
  { language: "English", translation: "Hello" },
  { language: "Spanish", translation: "Hola" },
  { language: "French", translation: "Bonjour" },
  { language: "German", translation: "Hallo" },
  { language: "Italian", translation: "Ciao" },
  { language: "Russian", translation: "Привет" },
  { language: "Eslovaco", translation: "ahoj" },
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
  { language: "Tcheco", translation: "Dobrý den," },
  { language: "Sueco", translation: "Hallå" },
]

export default function Loading({ text }: LoadingProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentHello, setCurrentHello] = useState("Hello") // Começa com "Hello"

  useEffect(() => {
    if (text === "Home") {
      let interval: NodeJS.Timeout
      let iterationCount = 0
      const maxIterations = 10 // Número fixo de trocas

      // Delay inicial de 500ms
      const initialDelay = setTimeout(() => {
        interval = setInterval(() => {
          if (iterationCount < maxIterations) {
            const randomIndex = Math.floor(Math.random() * helloTranslations.length)
            setCurrentHello(helloTranslations[randomIndex].translation)
            iterationCount++
          } else {
            clearInterval(interval)
            setCurrentHello("Olá")
            // Pausa de 500ms após "Olá" antes de animar
            setTimeout(() => {
              setIsAnimating(true)
            }, 500)
          }
        }, 100) // Intervalo de 100ms para trocas mais fluidas
      }, 500)

      return () => {
        clearTimeout(initialDelay)
        clearInterval(interval)
      }
    } else {
      // Para outras rotas, apenas esperar 1000ms e animar
      const timer = setTimeout(() => {
        setIsAnimating(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [text])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ease-in-out ${
        isAnimating ? "-translate-y-full rounded-b-[40vw]" : ""
      }`}
    >
      <div className="absolute inset-0 bg-black flex items-center justify-center rounded-none">
        <h1 className="text-5xl font-bold tracking-wider text-white capitalize md:text-6xl lg:text-7xl xl:text-8xl">
          {text === "Home" ? currentHello : text}
        </h1>
      </div>
    </div>
  )
}