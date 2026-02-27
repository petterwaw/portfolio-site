import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Home.css"

export default function Home({ handleTransition }) {

    const links = [
        { label: "About", path: "/about" },
        { label: "Projects", path: "/projects" },
        { label: "Contact", path: "/contact" },
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            setActiveIndex((prev) => (prev + 1) % links.length)
        }

        if (e.key === "ArrowUp") {
            setActiveIndex((prev) =>
            prev === 0 ? links.length - 1 : prev - 1
            )
        }

        if (e.key === "Enter") {
            handleTransition(links[activeIndex].path)
        }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [activeIndex])

    return (
      
    <div className="home">

      <div className="home-signature">
        Piotr Wawrzkowicz
      </div>

      <nav>
        {links.map((link, index) => (
          <div
            key={link.path}
            className={`terminal-link ${
              index === activeIndex ? "active" : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => handleTransition(links[index].path) }
          >
            {link.label}
            {index === activeIndex && <span className="arrow">&lt;- </span>}
          </div>
        ))}
      </nav>

      
    </div>
  )
}

