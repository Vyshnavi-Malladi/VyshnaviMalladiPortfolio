import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
const offsets = {
  up: { x: 0, y: 32 },
  left: { x: -36, y: 0 },
  right: { x: 36, y: 0 },
  none: { x: 0, y: 0 }
};
function Reveal({
  children,
  direction = "up",
  delay = 0,
  className
}) {
  const offset = offsets[direction];
  return <motion.div
    className={cn(className)}
    initial={{ opacity: 0, ...offset }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
      {children}
    </motion.div>;
}
export {
  Reveal
};
