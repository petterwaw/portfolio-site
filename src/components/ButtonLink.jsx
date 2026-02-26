import './ButtonLink.css'

export default function ButtonLink({ children, link }) {
    return (
        <a href={link} className="btn-link" target='_blank'>
            <span className="btn-link-text">{children}</span>
        </a>
    )
}