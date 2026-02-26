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

      if (e.deltaY > 0 && !snappingDown.current && scrollY < sectionTop - 5) {
        e.preventDefault();
        doSnap(sectionTop, snappingDown);
        return;
      }

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
        <p className='projects-description'>This page showcases selected projects 
          I’ve built while learning front-end development. Each project focuses on different 
          concepts such as API integration, state management, or dynamic UI updates. 
          They reflect my progress and practical approach to building real applications. <br /><br/> (scroll down please :D)</p>
      </section>
      <div ref={scrollRef}>
        <HorizontalScroll />
      </div>
      <section> </section>
    </>
  )
}