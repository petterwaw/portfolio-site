import './Card.css'
import img from '../assets/1.jpg'

export default function Card({ project }) {
    return (
        <div className="card">
            <img src={project.image} alt={project.title} className="card-image" />
            <div className='card-content'>
                <h2 className="card-title">{project.title}</h2>
                <p className="card-description">{project.description}</p>
            </div>
        </div>
    )
}

