import { useState, useEffect, useRef } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  onLoad?: () => void
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  placeholder,
  onLoad 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const [imageSrc, setImageSrc] = useState<string>(placeholder || '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isInView) {
      const img = new Image()
      img.onload = () => {
        setImageSrc(src)
        setIsLoaded(true)
        if (onLoad) onLoad()
      }
      img.src = src
    }
  }, [isInView, src, onLoad])

  return (
    <div className={`lazy-image-container ${className}`}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
        style={{
          opacity: isLoaded ? 1 : 0.7,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
      {!isLoaded && isInView && (
        <div className="image-loader">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  )
}

export default LazyImage
