import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "./routes";
import Link from "next/link";

export default function NavMobile() {
  const [isOpen, setOpen] = useState(false);
  const clickRef = useRef(null);
    
  // hide dropdown upon clicking away
  useClickAway(clickRef, () => setOpen(false));

  return (
    <div ref={clickRef} className="fixed top-3 left-3 z-10">
      <Hamburger rounded toggled={isOpen} toggle={setOpen} size={25} label="Show menu" hideOutline={false} />
        {isOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ul>
                {
                  routes.map((route, index) => {
                    return (
                      <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + index / 10,
                        }}
                        key={route.title}>
                        <Link onClick={() => setOpen((prev) => !prev)} href={route.href}>
                          <span className="font-medium">{route.title}</span>
                        </Link>
                      </motion.li>
                    );
                  })
                }
              </ul>
            </motion.div>
          </AnimatePresence>
        )}
    </div>
  );
}