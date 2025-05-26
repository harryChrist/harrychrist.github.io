// Utilitário para coletar todos os recursos que precisam ser pré-carregados

export const getPageResources = (pathname: string) => {
  const baseImages = [
    '/icon.png',
    '/me.png',
    '/henrique.png',
    '/me2.png'
  ]

  const projectImages = [
    '/projects/mahoureader/home.png',
    '/projects/mahoureader/novel.png', 
    '/projects/mahoureader/reader.png',
    '/projects/mahoureader/biblioteca.png',
    '/projects/mahoureader/admin.png',
    '/projects/botscans/home.png',
    '/projects/botscans/admin.png',
    '/placeholder.webp'
  ]

  const techStackImages: string[] = [
    '/icons/nodejs-original.svg',
    '/icons/javascript-original.svg',
    '/icons/python-original.svg',
    '/icons/go-original.svg',
    '/icons/mongodb-original.svg',
    '/icons/postgresql-original.svg',
    '/icons/firebase-original.svg',
    '/icons/nextjs-original.svg',
    '/icons/react-original.svg',
    '/icons/nestjs-original.svg',
    '/icons/angular-original.svg',
    '/icons/tailwindcss-original.svg',
    '/icons/bootstrap-original.svg',
    '/icons/framermotion.svg',
    '/icons/figma-original.svg',
    '/icons/docker-original.svg',
    '/icons/nginx-original.svg',
    '/icons/photoshop-original.svg',
    '/icons/insomnia-original.svg'
  ]

  // Fontes do Google que estão sendo usadas
  const fonts = [
    'Geist',
    'Geist Mono'
  ]

  // Recursos específicos por página
  switch (pathname) {
    case '/':
    case '/home':
      return {
        images: [...baseImages, ...projectImages, ...techStackImages],
        fonts,
        minLoadingTime: 4500 // Mais tempo para permitir animações tranquilas na home
      }
    
    default:
      return {
        images: baseImages,
        fonts,
        minLoadingTime: 3000 // Mais tempo para outras páginas também
      }
  }
}

// Função para pré-carregar imagens críticas
export const preloadCriticalImages = () => {
  const criticalImages = [
    '/me2.png', // Imagem principal da home
    '/henrique.png', // Imagem do about
    '/icon.png' // Favicon
  ]

  criticalImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
}

// Função para verificar se uma imagem existe
export const imageExists = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

// Função para filtrar apenas imagens que existem
export const filterExistingImages = async (images: string[]): Promise<string[]> => {
  const results = await Promise.allSettled(
    images.map(async (src) => {
      const exists = await imageExists(src)
      return exists ? src : null
    })
  )

  return results
    .filter((result): result is PromiseFulfilledResult<string> => 
      result.status === 'fulfilled' && result.value !== null
    )
    .map(result => result.value)
} 