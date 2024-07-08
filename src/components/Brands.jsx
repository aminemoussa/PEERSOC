import { motion } from "framer-motion";

const logos = [
  { src: "../src/assets/logos/eid.png", alt: "Eid Logo" },
  { src: "../src/assets/logos/fi.png", alt: "Fi Logo" },
  { src: "../src/assets/logos/sumo.png", alt: "Sumo Logo" },
  // Add more logos if needed
];

const scrollVariants = {
  animate: {
    x: [0, -700], // Adjust -1000 based on the width of the logos
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10, // Adjust the speed of the scrolling
        ease: "linear"
      }
    }
  }
};

export const Brands = () => (
  <section className="py-12 sm:py-24 bg-bgDark1 w-full lg:mt-16 mb-8 lg:mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-start lg:text-left text-center">
          <div className="w-2/3 sm:w-[620px] lg:w-full mx-auto lg:mx-0 lg:pl-20">
            <motion.div
              className="flex flex-wrap -m-4"
              variants={scrollVariants}
              animate="animate"
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="w-1/2 sm:w-1/3 py-6 px-4 flex justify-center"
                  transition={{ duration: 0.3 }}
                >
                  <img src={logo.src} alt={logo.alt} className="h-16" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
