import { motion, AnimatePresence } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";

export const InvitationModal = ({ setIsOpen }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, zIndex: 50 }}
      animate={{ opacity: 1, zIndex: 50 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-full h-full bg-bgDarkTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-center items-center h-full">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center pt-24 sm:pt-0">
              <div className="flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                <div className="text-white mr-2 text-8xl">
                  <TailcastLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-3xl">
                  Tailcast
                </div>
              </div>
              <form
                action="https://formspree.io/f/mblrrknq"
                method="POST"
                className="flex flex-wrap -m-2 w-full sm:w-4/5 mx-auto"
              >
                <div className="w-full p-2">
                  <label className="block text-primaryText mb-2">First Name:</label>
                  <input
                    className="px-4 py-3 w-full text-dark font-medium outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 text-lg"
                    type="text"
                    name="first_name"
                    required
                  />
                </div>
                <div className="w-full p-2">
                  <label className="block text-primaryText mb-2">Last Name:</label>
                  <input
                    className="px-4 py-3 w-full text-dark font-medium outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 text-lg"
                    type="text"
                    name="last_name"
                    required
                  />
                </div>
                <div className="w-full p-2">
                  <label className="block text-primaryText mb-2">Company Name:</label>
                  <input
                    className="px-4 py-3 w-full text-dark font-medium outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 text-lg"
                    type="text"
                    name="company_name"
                  />
                </div>
                <div className="w-full p-2">
                  <label className="block text-primaryText mb-2">Your Email:</label>
                  <input
                    className="px-4 py-3 w-full text-dark font-medium outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 text-lg"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="w-full p-2">
                  <label className="block text-primaryText mb-2">Your Message:</label>
                  <textarea
                    className="px-4 py-3 w-full h-32 text-dark font-medium outline-none border bg-gray-200 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 text-lg"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="w-full p-2 mt-4">
                  <button
                    className="py-4 px-6 w-full text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200 text-lg"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div
              className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
