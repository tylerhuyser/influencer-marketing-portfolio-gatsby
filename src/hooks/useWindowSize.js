import { useState, useEffect } from 'react'

export default function useWindowSize () {
  
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleWindowResize)
    handleWindowResize()

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return windowSize
}