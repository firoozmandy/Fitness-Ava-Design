import React from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";

import BlogImage from "@/assets/Blog.png";
import EllipseImage from "@/assets/Ellipse .png";
import Frame from "@/assets/Frame.png";

import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function Blog({ setSelectedPage }: Props) {
  return (
    <section id="blog" className="w-full ">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Blog)}>
        <div className="items-center md:mx-36 mx-14 justify-between gap-20 md:-mt-10 md:flex">
          {/* {graphics} */}
          <img
            className=" md:-mt-52 size-2/6 opacity-0 md:opacity-100"
            src={BlogImage}
            alt="Benefit-page"
          />

          {/* {description} */}
          <div className=" mb-20 md:py-44">
            {/* {title} */}
            <div className="flex ">
              <div className="before:absolute before:-top-20 before:-left-10 before:-z-[1] before:content-abstractwaves">
                <motion.div
                  className=""
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    <span className=" textPlans font-extrabold md:text-[50px] text-[40px] ">
                      WHAT OUR TRAINEES SAY
                    </span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* {description} */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="text-[#909090] md:w-[430px] w-[250px]">
                <p className="my-5 ">
                  I absolutely love yoga classes offered by this gym! The
                  instructors are knowledgeable, the workouts are challenging,
                  and the convenience of working out from home is unbeatable.
                  Highly recommend!
                </p>
                <div className="mt-5">
                  <img className="w-24" src={EllipseImage} alt="Ellipse " />
                  <div className="-mt-24 ml-36">
                    <span className="text-[#000] text-[22px] font-normal">
                      Elizabeth Martinez
                    </span>
                    <p>Los Angeles , CA</p>
                    <div className="flex flex-row size-4 mt-2">
                      <img src={Frame} alt="star1" />
                      <img src={Frame} alt="star2" />
                      <img src={Frame} alt="star3" />
                      <img src={Frame} alt="star4" />
                      <img src={Frame} alt="star5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* {button} */}
            <div className="relative md:mt-10 mt-1">
              <div className=" before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <button className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] transition-colors text-[#000] text-[14px] hover:bg-[#F77A40] border border-[#F77A40] rounded-full">
                  <RiArrowLeftSLine className="text-[#F77A40] size-8 mx-auto hover:text-[#fff] " />
                </button>
                <button className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] text-[#000] ml-3 text-[14px] transition-colors border hover:bg-[#F77A40] border-[#F77A40] rounded-full">
                  <RiArrowRightSLine className="text-[#F77A40] hover:text-[#fff] size-8 mx-auto" />
                </button>
              </div>
            </div>
            <div className="md:border-2 md:w-[828px] md:h-[300px] w-16 h-10 flex flex-grow md:-ml-[330px] md:-mt-44 opacity-[1%] md:opacity-[3%] md:text-[200px] md:leading-[300px]">
              TRAINING
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Blog;
