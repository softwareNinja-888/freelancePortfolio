import { motion } from "framer-motion";
import { Button } from './Button'

export function Introduction() {
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

      const toSection = (section) => {
        const contactSection = document.getElementById(`${section}`);
        contactSection ? contactSection?.scrollIntoView({ behavior: "smooth" }) : null

      };
      
  return (
    <div className="">
        
      <div className="flex flex-col items-center md:items-start justify-center gap-3 w-full lg:w-10/12">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-3xl font-space m-0">
        Building Web Applications That <br />
          <motion.span variants={itemVariants} className="text-[50px] text-[#4801a7] font-poppins">
           Drive Results
          </motion.span>
          <br />
          <motion.span variants={itemVariants} className="text-[18px] font-space "> I transform your ideas into interactive web realities, focusing on usability and performance.</motion.span>
          <br />
          <div className="max-w-[19%] mt-4">
            <hr className="w-full h-[3px] bg-[#4801a7]" />
          </div>
          <motion.div onClick={()=>{toSection('contact')}} className="mt-10 flex justify-center lg:justify-normal" variants={itemVariants}>
            <Button  text="Let's Talk" width='w-44' classNew="font-poppins hover:bg-secondary hover:text-primary transition-all duration-300"/>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}