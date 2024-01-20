import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

export default function NavMobile() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="fixed top-3 left-3">
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
    );
}