import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "./routes";
import Link from "next/link";
import { Bounce, Flip, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function NavMobile() {
  const [isOpen, setOpen] = useState(false);
  const clickRef = useRef(null);
    
  // hide dropdown upon clicking away
  useClickAway(clickRef, () => setOpen(false));

  const handleRouteClick = (route) => {
    setOpen(false);
    // setOpen((prev) => !prev)
    if (route.title === "writing") {
      handleWritingTabClick();
    }
  };

  const handleWritingTabClick = () => {
    // show the toast when 'writing' tab is clicked
    toast.info('stay tuned', {
      position: "top-center",
      autoClose: 8000,
      toastId: 123, // prevents stacking of toasts while also not needing to add state
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Flip,
    });
  }

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
                        <Link onClick={() => handleRouteClick(route)} href={route.href}>
                          <span className="font-normal text-sm">{route.title}</span>
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