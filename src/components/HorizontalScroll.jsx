import { motion, useTransform, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./HorizontalScroll.css"
import Card from "./Card";
import { projects } from "../data/dataProjects";

export default function HorizontalScroll() {

    const targetRef = useRef(null);
    const isSnappingRef = useRef(false);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
        mass: 0.5,
        restDelta: 0.0001,
        restSpeed: 0.0001,
    });

    const isMobile = window.innerWidth <= 1000;
    const xStart = isMobile ? "6%" : "8%";
    const xEnd = isMobile ? `-${(projects.length - 1) * 92}vw` : "-68%";

    const x = useTransform(smoothProgress, [0, 1], [xStart, xEnd]);

    const [activeIndex, setActiveIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        setActiveIndex(Math.round(v * (projects.length - 1)));
    });

    const lastScrollYRef = useRef(0);

    useEffect(() => {
        let snapTimeout = null;

        const handleWheel = (e) => {
            if (snapTimeout) clearTimeout(snapTimeout);

            const direction = e.deltaY > 0 ? 1 : -1;

            snapTimeout = setTimeout(() => {
                if (isSnappingRef.current) return;
                const section = targetRef.current;
                if (!section) return;

                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                const sectionHeight = section.offsetHeight;
                const viewportHeight = window.innerHeight;
                const maxScroll = sectionHeight - viewportHeight;
                const localScroll = window.scrollY - sectionTop;

                if (localScroll < 0 || localScroll > maxScroll) return;

                const step = maxScroll / (projects.length - 1);
                const currentIndex = Math.round(localScroll / step);
                const targetIndex = Math.min(projects.length - 1, Math.max(0, currentIndex + direction));
                const targetScroll = sectionTop + targetIndex * step;

                if (Math.abs(targetScroll - window.scrollY) < 1) return;

                isSnappingRef.current = true;
                window.scrollTo({ top: targetScroll, behavior: "smooth" });

                setTimeout(() => { isSnappingRef.current = false; }, 600);
            }, 50);
        };

        window.addEventListener("wheel", handleWheel, { passive: true });
        return () => {
            window.removeEventListener("wheel", handleWheel);
            if (snapTimeout) clearTimeout(snapTimeout);
        };
    }, []);

    return (
        <section className="horizontal-scroll" ref={targetRef}>
            <div className="scroll-content">
                <motion.div className="scroll-item" style={{ x }}>
                    {projects.map((project, index) => {
                        const distance = Math.abs(index - activeIndex);
                        const scale = distance === 0 ? 1 : Math.max(0.82, 1 - distance * 0.15);
                        const blur = distance === 0 ? 0 : Math.min(6, distance * 2.5);
                        const opacity = distance === 0 ? 1 : Math.max(0.45, 1 - distance * 0.18);
                        return (
                            <motion.div
                                key={project.id}
                                animate={{ scale, opacity, filter: `blur(${blur}px)` }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                style={{ transformOrigin: "center" }}
                            >
                                <Card project={project} />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}