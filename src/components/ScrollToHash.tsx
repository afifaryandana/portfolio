import { useEffect } from "react"
import { useLocation } from "react-router"

// Scrolls to the section matching the URL hash (e.g. /#about).
// React Router doesn't do this on its own for in-app links.
export default function ScrollToHash() {
  const { hash, key } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    // wait a frame so the page has rendered before scrolling
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
    return () => cancelAnimationFrame(frame)
  }, [hash, key])

  return null
}
