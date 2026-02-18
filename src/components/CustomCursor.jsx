import './CustomCursor.css'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {

    const coords = useRef({ x: 0, y: 0 })
    const circlesRef = useRef([])

    

    const colors = [
        '#f472b6',
        '#f472b6', 
        '#f579bd', 
        '#f579bd',
        '#f680c5', 
        '#f680c5', 
        '#f786cc', 
        '#f786cc', 
        '#f88dd2', 
        '#f88dd2',
        '#f994d9', 
        '#f994d9', 
        '#fa9adf', 
        '#fa9adf', 
        '#faa1e6', 
        '#faa1e6',
        '#fba7eb', 
        '#fba7eb', 
        '#fcadf1', 
        '#fcadf1', 
        '#fcb4f7', 
        '#fcb4f7', 
        '#fdbafc',
        '#fdbafc'
        
    ]

    useEffect(() => {
        const circles = circlesRef.current

        circles.forEach((circle) => {
            if (!circle) return
            circle.x = 0
            circle.y = 0
        })

        const handleMouseMove = (e) => {
            coords.current.x = e.clientX
            coords.current.y = e.clientY
        }

        const animateCircles = () => {
            let x = coords.current.x
            let y = coords.current.y

            circles.forEach((circle, index) => {
                if (!circle) return
                circle.style.left = x - 8 + 'px'
                circle.style.top = y - 8 + 'px' 

                circle.style.scale = (circles.length - index) / circles.length

                circle.x = x
                circle.y = y

                const nextCircle = circles[index + 1] || circles[0]
                x += (nextCircle.x - x) * 0.3
                y += (nextCircle.y - y) * 0.3  
            })
            requestAnimationFrame(animateCircles)
        }

        window.addEventListener('mousemove', handleMouseMove)
        animateCircles()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <>
            {Array.from({ length: 24 }).map((_, index) => (
                <div
                    key={index}
                    className="cursor-circle"
                    ref={(el) => (circlesRef.current[index] = el)}
                    style={{ backgroundColor: colors[index], zIndex: 24 - index }}
                />
            ))}
        </>
    )
}