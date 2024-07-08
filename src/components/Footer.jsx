// Import necessary elements
import { TailcastLogo } from "../assets/logos/TailcastLogo";

// Define the footer content
const footerContent = {
  copyright: `© ${new Date().getFullYear()} PEERSOC. All rights reserved.`,
  contact: {
    phone: "+358 44 5040308",
    email: "amine.moussa@cybersecurity.fi",
  },
};

// Footer component
export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10 lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <TailcastLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  PEERSOC
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Your trusted partner in securing your digital assets with expert assessments and proactive solutions.
              </p>
              <p className="text-gray-100">{footerContent.copyright}</p>
            </div>
            <div className="w-full lg:w-2/3 flex justify-center lg:justify-end items-center mb-6 lg:mb-0">
              <div className="text-gray-400 text-center lg:text-right">
                <p>
                  Contact us
                  <br />
                  our Phone: {footerContent.contact.phone}
                  <br />
                  Email: {footerContent.contact.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
