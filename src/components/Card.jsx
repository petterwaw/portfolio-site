import './Card.css'
import img from '../assets/1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faNpm, faHtml5, faCss3Alt, faGithub, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import ButtonLink from './ButtonLink'

export default function Card({ project }) {
    return (
        <div className="card">
            <img src={project.image} alt={project.title} className="card-image" />
            <div className='card-content'>
                <div className='card-header'>
                    <h2 className="card-title">{project.title}</h2>
                    <div className='tech-stack'>
                        {project.techStack && project.techStack.map((tech, index) => (
                            <FontAwesomeIcon key={index} className='project-icon' icon={tech} />
                        ))}
                    </div>
                </div>
                <p className="card-description">{project.description}</p>           
                <div className='card-buttons'>
                    {project.gitLink && <ButtonLink link={project.gitLink}>GitHub</ButtonLink>}
                    {project.pageLink && <ButtonLink link={project.pageLink}>Live Demo</ButtonLink>}
                </div>
            </div>
        </div>
    )
}

