import { useEffect, useRef } from 'react'
import Card from '../components/Card'
import HorizontalScroll from '../components/HorizontalScroll'
import './Projects.css'

export default function Projects() {
  const introRef = useRef(null);
  const scrollRef = useRef(null);
  const snappedRef = useRef(false);

  useEffect(() => {
    const snappingDown = { current: false };
    const snappingUp = { current: false };

    const doSnap = (targetY, lockRef) => {
      lockRef.current = true;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      setTimeout(() => { lockRef.current = false; }, 1000);
    };

    const handleWheel = (e) => {
      const section = scrollRef.current;
      const intro = introRef.current;
      if (!section || !intro) return;

      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;
      const localScroll = scrollY - sectionTop;

      // down: anywhere above section → snap to section start
      if (e.deltaY > 0 && !snappingDown.current && scrollY < sectionTop - 5) {
        e.preventDefault();
        doSnap(sectionTop, snappingDown);
        return;
      }

      // up: near the start of section (even mid-animation) → snap to intro
      if (e.deltaY < 0 && !snappingUp.current) {
        const nearStart = scrollY >= sectionTop - window.innerHeight * 0.5 && scrollY <= sectionTop + 50;
        if (nearStart) {
          e.preventDefault();
          doSnap(intro.offsetTop, snappingUp);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <>
      <section className='projects-intro' ref={introRef}>
        <h1 className='projects-title'>Projects</h1>
        <p className='projects-description'>A collection of my projects showcasing my skills and creativity. Each project is a unique expression of my passion for coding and design. Explore the diverse range of projects I've worked on, from web applications to interactive experiences. Each project reflects my dedication to learning and growth in the world of technology.</p>
      </section>
      <div ref={scrollRef}>
        <HorizontalScroll />
      </div>
      <section> </section>
    </>
  )
}