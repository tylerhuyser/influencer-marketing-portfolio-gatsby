import React, { useState, useRef, useEffect } from 'react'

export default function LazyImage({
  src,
  alt = "",
  placeholder = "",
  className = "",
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect()
          }
        });
      },
      { threshold: 0.1 }
    )

    observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : placeholder}
      alt={alt}
      className={className}
      {...props}
    />
  )

}