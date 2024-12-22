import { motion } from "framer-motion";

import { BenefitType, SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import Benefit from "./Benefit";

import BenefitImage from "@/assets/benefit.png";
import Framer5 from "@/assets/Frame 5.png";
import Framer7 from "@/assets/Frame 7.png";
import Framer8 from "@/assets/Frame 8.png";
import Framer9 from "@/assets/Frame 9.png";

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

const benefits: Array<BenefitType> = [
  {
    icon: <img src={Framer5} alt="FramerImage" />,
    title: "Yoga",
    description: " Find your balance both physically and mentally",
  },
  {
    icon: <img src={Framer7} alt="FramerImage" />,
    title: "Fitness",
    description: "Fitness is not a destination, it's a journey.",
  },
  {
    icon: <img src={Framer8} alt="framer" />,
    title: "Aerobic",
    description: "Every breath you take is one step closer to a stronger heart",
  },
  {
    icon: <img src={Framer9} alt="FramerImage" />,
    title: "Pilates",
    description: " Fitness is not a destination, it's a journey.",
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const Plans = ({ setSelectedPage }: Props) => {
  return (
    <section id="plans" className="min-h-full">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Plans)}>
        {/* {graphics && description} */}
        <div className="mt-16 md:mx-20 items-center justify-between gap-20 md:mt-0 md:flex">
          {/* {graphics} */}
          <img
            className="md:w-4/12 mx-auto opacity-0 md:opacity-100 w-0 "
            src={BenefitImage}
            alt="Benefit-page"
          />

          {/* {description} */}
          <div className="ml-20">
            {/* {title} */}
            <div className="relative ">
              <div className="before:absolute before:-top-20 before:-left-20 before:-z-[1] before:content-abstractwaves">
                <motion.div
                  className="relative"
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
                    <span className="textPlans text-[56px]  ">
                      MAKES YOU MORE ACTIVE AND IMPROVE MOODS{" "}
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
              {/* w-[430px] */}
              <div className="text-[#909090]">
                <p className="my-5 ">
                  Welcome to our online fitness class! We are so excited to have
                  you join us on this journey to a healthier you.
                </p>
                <p className="-mt-5">
                  Our virtual platform offers convenience and accessibility,
                  making it easier for you to incorporate fitness into your busy
                  schedule.
                </p>
              </div>
            </motion.div>
            {/* {button} */}
            <div className="relative mt-9">
              <div className=" before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <button className=" w-[140px] h-[40px] text-[#000] text-[14px] bg-[#F6DCCD] border border-[#F77A40] rounded-2xl">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* {mini div} */}
        {/* " md:my-auto ml-20 md:ml-0 mt-10" */}
        <motion.div
          className=" md:w-4/5 py-10 flex md:items-stretch items-center flex-col gap-0 md:mx-auto  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="textPlans text-[56px] md:mx-0"> OUR TRAINING PARAMS </span>
          <p className="text-[#909090] w-[330px] md:ml-[620px] md:-mt-14">
            Join our community today and start your journey towards a better,
            healthier you!
          </p>
        </motion.div>
        {/* {mini div} */}

        <motion.div
          className="md:flex md:px-44 items-center flex flex-col md:flex-row justify-between gap-8 md:mt-5 mt-12 md:ml-0 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Plans;
