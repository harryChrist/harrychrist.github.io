"use client"

import { useEffect, useState } from 'react'

interface LoadingDebugProps {
  isLoading: boolean
  progress: number
  loadedResources: number
  totalResources: number
  images: string[]
  resourcesLoaded?: boolean
  isAnimationComplete?: boolean
}

export default function LoadingDebug({ 
  isLoading, 
  progress, 
  loadedResources, 
  totalResources, 
  images,
  resourcesLoaded = false,
  isAnimationComplete = false
}: LoadingDebugProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostrar apenas em desenvolvimento
    //setIsVisible(process.env.NODE_ENV === 'development')
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-[9999] bg-black/80 text-white p-4 rounded-lg text-xs max-w-xs">
      <h3 className="font-bold mb-2">Loading Debug</h3>
      <div className="space-y-1">
        <p>Loading Visible: {isLoading ? '✅' : '❌'}</p>
        <p>Resources Progress: {progress}%</p>
        <p>Resources: {loadedResources}/{totalResources}</p>
        <p>Resources Loaded: {resourcesLoaded ? '✅' : '⏳'}</p>
        <p>Animation Complete: {isAnimationComplete ? '✅' : '⏳'}</p>
        <p>Total Images: {images.length}</p>
        <div className="mt-2 text-xs opacity-70">
          <p>• Animation controls loading exit</p>
          <p>• Content shows when animation ends</p>
          <p>• Both move up together</p>
        </div>
      </div>
      
      {images.length > 0 && (
        <details className="mt-2">
          <summary className="cursor-pointer">Images to load</summary>
          <div className="mt-1 max-h-32 overflow-y-auto">
            {images.map((img, index) => (
              <div key={index} className="text-xs opacity-70">
                {img}
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  )
} 