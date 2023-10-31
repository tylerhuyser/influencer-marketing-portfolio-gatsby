import React, { useState, useEffect } from 'react'

export default function useWindowSize (initialState = 759, { ttl = 100 } = {}) {
  
  const [windowSize, setWindowSize] = useState({
    width: initialState,
    height: initialState
  })

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [ttl])

  return windowSize
}