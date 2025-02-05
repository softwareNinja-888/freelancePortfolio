import { motion } from "framer-motion";
import { Preview } from "./helper/Preview";
import { Button } from './helper/Button'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // Changed to flex-row on medium screens and added items-center for vertical alignment
    <div className="flex flex-col lg:flex-row text-black gap-20 lg:gap-10 lg:px-16 max-w-screen items-start justify-center bg-primary py-28">
      {/* Changed width to full on mobile, half on medium screens and aligned items to start on medium */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center md:items-start justify-center gap-3 w-full md:w-1/2 px-4"
      >
        {/* Added md:text-left for better desktop alignment */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center text-4xl font-roboto flex-wrap text-center md:text-left mb-4"
        >
          Building Web Applications That Drive Results
        </motion.div>
        {/* Added md:text-left for better desktop alignment */}
        <motion.div
          variants={itemVariants}
          className="text-sm leading-7 text-center md:text-left mb-10 font-lora"
        >
          I transform your ideas into interactive web realities, focusing on usability and performance.
        </motion.div>
        <motion.button variants={itemVariants}>
          <Button text="Let's Talk" width='w-36'/>
        </motion.button>
      </motion.div>

      {/* Added width control for medium screens */}
      <div className="w-full md:w-1/2 justify-items-center">
        <Preview/>
      </div>
    </div>
  )
}