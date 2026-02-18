import './PageTransition.css'

export default function PageTransition({ phase, isVisible, direction }) {
  if (!isVisible) return null

  return (
    <div className={`page-overlay ${phase} ${direction}`}>
      <div className="loader">Loading...</div>
    </div>
  )
}