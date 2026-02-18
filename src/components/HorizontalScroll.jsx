import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./HorizontalScroll.css"
import Card from "./Card";
import { projects } from "../data/dataProjects";

export default function HorizontalScroll() {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])

    return (
        <section className="horizontal-scroll" ref={targetRef}>
            <motion.div className="scroll-content">
                <motion.div className="scroll-item" style={{ x }}>
                    {projects.map((project) => (
                        <Card key={project.id} project={project} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}