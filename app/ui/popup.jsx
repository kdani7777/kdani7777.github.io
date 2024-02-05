import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Alert = ({ show, onClose, onOpen }) => {
  const [timeLeft, setTimeLeft] = useState(10); // tracks time remaining for showing the alert

  /*
    Sets timer to close the alert based on value of timeLeft
  */
  useEffect(() => {
    let timeoutId;
    if (show) {
      // set a timeout to close the alert after 10 seconds
      timeoutId = setTimeout(() => {
        onClose();
      }, timeLeft * 1000);
    }
    // Cleanup
    // Clear the timeout if the component unmounts or the alert is closed
    return () => { clearTimeout(timeoutId) };
  }, [show, onClose, timeLeft]);

  /*
    Set timeLeft to decrement every 100 milliseconds
  */
  useEffect(() => {
    // Update the progress every 100 milliseconds
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => Math.max(prevTimeLeft - 0.01, 0));
    }, 10);

    // Clear the interval when the component unmounts or the alert is closed
    return () => { clearInterval(intervalId); }
  }, [show, onClose]);

  const progressBarWidth = (100 - ((10 - timeLeft) / 10) * 100) + "%";

  /* 
    Reset the alert state when writing tab is clicked
  */
  const resetAlert = () => {
    setTimeLeft(10); 
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50, when: "afterChildren" }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 0.3 
          }}
          className="absolute top-0 p-2 m-1 bg-black text-white text-center rounded-md
                    sm:w-1/2 md:w-96 lg:max-w-2xl xl:max-w-3xl"
        >
          <div className="flex justify-end">
            <button onClick={onClose} className="text-sm cursor-pointer">
              <span className="text-xl">&times;</span>
            </button>
          </div>
          <p>Coming soon!</p>
          <div className="bg-gray-300 h-2 mt-2 rounded-md">
            <div className="bg-blue-400 h-full rounded-md" style={{ width: progressBarWidth }}>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;