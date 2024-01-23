import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "./routes";

export default function NavMobile() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
    
  // hide dropdown upon clicking away
  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="fixed top-3 left-3">
      <Hamburger rounded toggled={isOpen} toggle={setOpen} size={20} label="Show menu" hideOutline={true} />
        {isOpen && (
          <div className="">
            <ul className="">
              {
                routes.map((route) => {
                  return (
                    <li key={route.title} className="">
                      <a onClick={() => setOpen((prev) => !prev)} className="" href={route.href}>
                        <span className="">{route.title}</span>
                      </a>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        )}
    </div>
  );
}