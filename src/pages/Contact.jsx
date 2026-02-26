import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Contact() {
  return (
    <div className="contact-wrapper">
      <section className="contact-info">
        <h2>Get in <span className="pink-bg">touch</span></h2>
        <hr/>
        <p>If you'd like to discuss a job offer, project, or just want to say hi, feel free to reach out!</p>
        <div className="contact-methods">
          <div className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon={faAt} />
            <a href="mailto:piotr19.02@wp.pl">piotr19.02@wp.pl</a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon={faGithub} />
            <a href="https://github.com/piotr-wawrzkowicz" target="_blank" rel="noopener noreferrer">GitHub/piotr-wawrzkowicz</a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/piotr-wawrzkowicz-061984384/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+48884777011">+48 884-777-011</a>
          </div>
        </div>
      </section>
    </div>
  )
}