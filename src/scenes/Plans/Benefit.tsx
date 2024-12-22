import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mt-5 rounded-3xl bg-[#F9F9F9] hover:bg-[#F6DCCD] md:w-[263px] w-4/5 md:h-[257px] px-5 py-6 text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
       {icon}
      </div>

      <h4 className="font-semibold text-[#000] text-3xl">{title}</h4>
      <p className="my-3 text-[#909090] text-sm">{description}</p>
      <div
        className="mx-auto w-[147px] h-[48px] rounded-xl border border-[#F77A40] text-center flex items-center justify-center hover:bg-[#F6DCCD]"
        onClick={() => setSelectedPage(SelectedPage.AboutUs)}
      >
        <button className="text-[#F77A40] text-[16px] font-medium hover:text-[#292D32]">Learn more</button>
       
      </div>
    </motion.div>
  );
};

export default Benefit;
