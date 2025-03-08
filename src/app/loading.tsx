"use client"

import AnimatedBackground from "@/components/Background"
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
  //{ language: "Portuguese", translation: "Olá" },
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
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, text === "Home" ? 4000 : 1000)

    return () => clearTimeout(timer)
  }, [text])

  useEffect(() => {
    if (text === "Home") {
      let interval: NodeJS.Timeout

      // Delay inicial de 500ms
      const initialDelay = setTimeout(() => {
        // Intervalo para mostrar palavras aleatórias a cada 150ms
        interval = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * helloTranslations.length)
          setCurrentHello(helloTranslations[randomIndex].translation)
        }, 150)

        // Depois de 2000ms, para o intervalo e define a palavra final como "Olá"
        setTimeout(() => {
          clearInterval(interval)
          setCurrentHello("Olá")
        }, 2500)
      }, 500)

      return () => {
        clearTimeout(initialDelay)
        clearInterval(interval)
      }
    }
  }, [text])

  return (
    <div className={"fixed inset-0 z-50 flex items-center justify-center" + isAnimating ? " none" : ""}>
      <div
        className={`absolute inset-0 bg-black flex items-center justify-center rounded-none transition-all duration-700 ease-in-out ${
          isAnimating ? "-translate-y-full rounded-b-[40vw]" : ""
        }`}
      >
        <h1 className="text-5xl font-bold tracking-wider text-white capitalize md:text-6xl lg:text-7xl xl:text-8xl">
          {text === "Home" ? currentHello : text}
        </h1>
      </div>
    </div>
  )
}