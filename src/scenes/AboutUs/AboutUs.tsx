import React from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import AboutImage from "../../assets/About image.png";


type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function AboutUs({ setSelectedPage }: Props) {


  return (
    <section
      id="aboutUs"
      className="mx-auto h-[330px] mb-32 pt-24 bg-[#F9F9F9]"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
        <motion.div
          className="md:mx-32 mx-28 -mt-14 flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="textPlans md:text-[42px] text-[27px] font-black">
            GET THE LATEST UPDATE FROM US
          </span>
          <p className="md:w-full w-64 md:my-2 my-3 text-[#909090]">
            Join our mailing list by entering your email for exclusive
            information
          </p>
          {/* input */}
          <div className="w-full max-w-sm min-w-[200px] mt-10">
            <div className="relative ">
              <input
                type="email"
                className="md:w-full w-60 p-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Type your email address here"
              />
              <button
                className="absolute w-14 md:w-32 md:right-1 -right-10 md:top-1 top-[0.9px] md:text-[16px] text-[8px] rounded bg-[#F77A40] py-2 px-2.5 border border-transparent text-center text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Get update
              </button>
            </div>
          </div>
        </motion.div>
        {/* -mt-80 ml-[760px] opacity-0 md:opacity-100 */}
        <img
          className="opacity-0 md:opacity-100 md:mx-[800px] md:-my-[340px]"
          src={AboutImage}
          alt="AboutImage"
        />
      </motion.div>
    
    </section>
  );
}

export default AboutUs;
