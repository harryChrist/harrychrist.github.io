"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { IoMoon, IoSunny } from "react-icons/io5"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evita problemas de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center gap-2 p-1 text-black transition-all rounded-full dark:text-white bg-primary text-primary-foreground hover:opacity-90"
    >
      {theme === "dark" ? (
        <IoSunny className="w-5 h-5" />
      ) : (
        <IoMoon className="w-5 h-5" />
      )}
    </button>
  )
}

