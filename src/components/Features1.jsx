import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8 mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle"></span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                Empowering Security, Defending Your Future
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                Gain a competitive edge with industry-leading security practices by incorporating advanced threat prevention measures that anticipate and neutralize potential security threats effectively. Implement cutting-edge security protocols to safeguard your assets and maintain operational integrity, and develop tailored strategic security plans that align with your business goals, ensuring robust defense and future readiness.
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Enhanced Threat Detection and Prevention</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Operational Resilience and Asset Protection</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Strategic Alignment with Business Objectives</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="w-full flex justify-center">
              <img
    src="/dist/_astro/feature1.CzWyNRQ6.png"
    alt="Feature image 1"
    className="rounded-xl"
    style={{ maxWidth: '180%', height: 'auto' }}
    aria-label="Feature image 1"
  />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

