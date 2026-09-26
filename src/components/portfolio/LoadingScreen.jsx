import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/constants/portfolio";
function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);
  return <AnimatePresence>
      {!done && <motion.div
    className="fixed inset-0 z-[100] grid place-items-center bg-background"
    exit={{ opacity: 0, filter: "blur(8px)" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
          <div className="flex flex-col items-center gap-6">
            <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-primary via-violet to-accent text-xl font-bold text-primary-foreground shadow-2xl"
  >
              {profile.name.split(" ").map((n) => n[0]).join("")}
            </motion.div>
            <div className="h-[3px] w-48 overflow-hidden rounded-full bg-secondary">
              <motion.div
    className="h-full rounded-full bg-gradient-to-r from-primary via-violet to-accent"
    initial={{ width: "0%" }}
    animate={{ width: "100%" }}
    transition={{ duration: 1.1, ease: "easeInOut" }}
  />
            </div>
          </div>
        </motion.div>}
    </AnimatePresence>;
}
export {
  LoadingScreen
};
