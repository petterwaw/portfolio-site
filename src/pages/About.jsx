import {  NavLink } from 'react-router-dom'
import './About.css'
import SkillsList from '../components/SkillsList'

export default function About() {
  return (
    <div className='about-wrapper'>
      <section className='about'>
        <h1>
          <span className='small-h1'>Hi, my name is </span><br /><span className='pink-bg'>Piotr Wawrzkowicz</span>
        </h1>
        <hr />
        <p>
          I'm a passionate self-learning front-end developer with a strong foundation in JavaScript, HTML, and CSS.
          I have a degree in "Automation, Robotics and Control Systems", which has given me a solid 
          understanding of programming and problem-solving. I like to create things and solve problems, 
          that is why I decided to pursue a career in front-end development. <br /><br />
          When I am not behind my screen, I enjoy playing football, playing darts and spending time with my friends.
          <br /><br />
          If you want to check out my resume, you can find it <a href="#">here</a>.
        </p>
        <SkillsList><h2>My <span className='pink-bg'>Skills</span></h2></SkillsList >
        
      </section>
    </div>
  )
}