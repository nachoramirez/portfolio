import { useState, useEffect } from 'react'

export const useObserver = (Ref) => {
  const [isVisible, setIsVisible] = useState()
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }
  useEffect(() => {
    const Observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      setIsVisible(entry.isIntersecting)
    }, options)

    isVisible && setHasBeenVisible(true)

    Ref.current && Observer.observe(Ref.current)
    return () => {
      Ref.current && Observer.unobserve(Ref.current)
    }
  }, [Ref, isVisible])

  return hasBeenVisible
}
