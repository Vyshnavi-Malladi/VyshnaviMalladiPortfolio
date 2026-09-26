import { motion, useScroll, useSpring } from "framer-motion";
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 1e-3 });
  return <motion.div
    aria-hidden
    style={{ scaleX }}
    className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-primary via-violet to-accent"
  />;
}
export {
  ScrollProgress
};
