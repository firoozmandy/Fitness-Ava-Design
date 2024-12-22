import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import useMediaQueries from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";

import HomepageGraphic from "@/assets/HompageGraphic.png";
import VectorSvg from "@/assets/Vector.svg";
import videoCircle from "@/assets/video-circle.svg";
import BlogImg from "@/assets/BlogImg.png";

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQueries("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* {imag && main heder} */}
      <motion.div
        className="md:flex flex-grow mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* {main heder} */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* {heaDings} */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20 -mt-32"
          >
            <div
              className="flex flex-col mt-60 sm:w-[550px] w-80 md:w-full md:mt-20"
              id="text"
            >
              <span className="text-[#f77a40] md:text-[80px] text-5xl">
                stay healthy !{" "}
              </span>
              <span className="md:text-[80px] text-5xl">
                {" "}
                even if you stay at home{" "}
              </span>
              <img
                src={BlogImg}
                alt="BlogImg"
                className=" opacity-0 md:opacity-100 w-20 md:w-[103.1px] flex flex-grow md:-mt-20 sm:ml-[440px] md:mx-60 mx-32 -mt-14"
              />
            </div>
            <div className="w-80">
              <p className="mt-5 text-sm text-[#909090]  ">
                With our professional trainers, we will guide you with the best
                program to help you get healthy and ideal body.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <button className="Button-home md:w-[260px] md:h-[44px] md:text-[16px] text-[10px] w-[180px] h-[35px]">
              Start Your 30-Days Free Trial
            </button>
            <AnchorLink
              className="md:text-sm text-[12px] font-bold"
              onClick={() => setSelectedPage(SelectedPage.AboutUs)}
              href={`#${SelectedPage.AboutUs}`}
            >
              <div className=" flex-shrink-0 flex text-[#000000]">
                <img src={videoCircle} alt="videoCircle" />
                <img
                  src={VectorSvg}
                  alt="VectorSvg"
                  className="ml-5 mt-4 absolute"
                />
                <span className=" no-underline mt-4 ml-2">Watch Video</span>
              </div>
            </AnchorLink>
          </motion.div>
        </div>
        {/* {image} */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:-scroll-mt-48 mt-10 md:justify-items-end">
          <img className="" src={HomepageGraphic} alt="HomepageGraphic" />
        </div>
      </motion.div>
      <div className="md:border-2 md:w-[828px] md:h-[300px] w-16 h-10 flex flex-grow md:ml-96 md:-mt-48 opacity-[1%] md:opacity-[5%] md:text-[200px] md:leading-[300px]">
        Exercise{" "}
      </div>
      {isAboveMediumScreen && ""}
    </section>
  );
};

export default Home;
