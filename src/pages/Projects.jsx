import Card from '../components/Card'
import HorizontalScroll from '../components/HorizontalScroll'
import './Projects.css'

export default function Projects() {
  return (
    <>
      <section className='projects-intro'>
        <h1 className='projects-title'>Projects</h1>
        <p className='projects-description'>A collection of my projects showcasing my skills and creativity. Each project is a unique expression of my passion for coding and design. Explore the diverse range of projects I've worked on, from web applications to interactive experiences. Each project reflects my dedication to learning and growth in the world of technology.</p>
      </section>
      <HorizontalScroll />
    </>
  )
}