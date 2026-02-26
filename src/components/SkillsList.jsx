import './SkillsList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faNpm, faHtml5, faCss3Alt, faGithub, faGitAlt } from '@fortawesome/free-brands-svg-icons'

export default function SkillsList({children}) {
    return (
        <section className='my-skills'>
          {children}
          <div className='skills-list'>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faJs} />
              <p>JavaScript</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faReact} /> 
              <p>React</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faHtml5} />
              <p>HTML5</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faCss3Alt} />
              <p>CSS3</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faGithub} />
              <p>GitHub</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faGitAlt} />
              <p>Git</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faNpm} />
              <p>NPM</p>
            </div>
          </div>
        </section>
    )
}