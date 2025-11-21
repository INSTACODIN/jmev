'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fallback?: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  sizes?: string
  priority?: boolean
}

export default function ImageWithFallback({
  src,
  alt,
  fallback,
  fill = false,
  width,
  height,
  className = '',
  sizes,
  priority = false,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  // Generate a colored placeholder based on the alt text or use provided fallback
  const getFallbackUrl = () => {
    if (fallback) return fallback
    
    // Generate a placeholder based on model name or content
    const modelName = alt.toLowerCase()
    let color = '0ea5e9' // default blue
    
    if (modelName.includes('elight')) color = '0ea5e9'
    else if (modelName.includes('ev3')) color = '22c55e'
    else if (modelName.includes('ev2')) color = '0284c7'
    else if (modelName.includes('hero') || modelName.includes('background')) color = 'e0f2fe'
    else if (modelName.includes('charging') || modelName.includes('recharge')) color = 'dcfce7'
    else if (modelName.includes('showroom')) color = 'bae6fd'
    
    const size = fill ? '1920x1080' : width && height ? `${width}x${height}` : '800x600'
    return `https://via.placeholder.com/${size}/${color}/ffffff?text=${encodeURIComponent(alt)}`
  }

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(getFallbackUrl())
    }
  }

  // Use fallback if error occurred or if src is already a placeholder
  const finalSrc = hasError ? imgSrc : src
  const isPlaceholder = finalSrc.includes('via.placeholder.com')

  const imageProps: any = {
    src: finalSrc,
    alt,
    className,
    priority,
    unoptimized: isPlaceholder,
    onError: handleError,
  }

  if (fill) {
    imageProps.fill = true
    if (sizes) imageProps.sizes = sizes
  } else {
    if (width) imageProps.width = width
    if (height) imageProps.height = height
  }

  return <Image {...imageProps} />
}

