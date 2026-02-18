import { Outlet } from "react-router-dom"
import "./SubPagesLayout.css"

export default function SubPagesLayout({ handleTransition }) {
  return (
    <>
        <span 
            className="back-arrow"
            onClick={() => handleTransition(-1, "backward") }
        >
            &lt;- 
        </span>
        <Outlet />
    </>
  )
}