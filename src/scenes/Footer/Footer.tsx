import Logo from "@/assets/Logo.png";
import Logo2 from "@/assets/Logo2.png";
import vectorSvg from "@/assets/vector.png";
import parande from "@/assets/parande.png";
import faceBook from "@/assets/faceBook.png";
import gmail from "@/assets/gmail.png";
import gmail2 from "@/assets/gmai2.png";
import insta1 from "@/assets/insta1.png";
import insta2 from "@/assets/insta2.png";
import insta3 from "@/assets/insta3.png";


const Footer = () => {
  return (
    <footer className="bg-[#FFF] py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="flex md:ml-0 ml-0 items-end flex-grow">
            <img src={Logo} alt="logo" className="w-16 h-10" />
            <img src={Logo2} alt="logo" className="w-34 h-9" />
          </div>
          <p className="my-5 text-[#909090] text-xl font-normal">
            Fitmoves provide more than 60+ professional personal trainer
          </p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0 text-[#484242] text-base font-normal">
          <h4 className="font-semibold text-xl text-[#000]"> Menu </h4>
          <p className="my-5"> Home </p>
          <p className="my-5 "> Plans </p>
          <p className="my-5"> Blogs </p>
          <p> About us </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-[#484242] text-base font-normal">
          <h4 className="font-semibold text-xl text-[#000]"> Programs </h4>
          <p className="my-5"> Yoga </p>
          <p className="my-5 "> Fitness</p>
          <p className="my-5"> Aerobic </p>
          <p> Pilates </p>
        </div>
        <div className="mt-16 basis-2/4 md:mt-0 text-[#484242] text-base font-normal">
          <h4 className="font-semibold text-xl text-[#000]">
            {" "}
            Terms & Conditions
          </h4>
          <p className="my-5"> Privacy Policy </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 text-[#484242] text-base font-normal">
          <h4 className="font-semibold text-xl text-[#000]"> Contact us </h4>
          <div className="flex flex-row items-center w-52 gap-3">
            {/* <img src={vectorSvg} className="w-5 h-5" alt="vectorSvg" /> */}
            <p className="my-5"> +88 1730 116 399 </p>
          </div>
          <img src={gmail2} alt="gmail" className="" />
          <div className="flex flex-row items-center gap-9 -my-[21px] mx-5">
            <img src={gmail} className="-mx-5" alt="gmail " />
            <p> Fitmoves@gmail.com </p>
          </div>
          <div className="flex flex-grow my-10 gap-3">
            <div className="bg-[#FA907D] w-9 h-9 rounded-lg flex items-center justify-center">
              <img src={insta2} alt="in" />
              <div className=" absolute">
              <img src={insta3} alt="in" className="" />
              <img src={insta1} alt="in" />
              </div>
            </div>
            <div className="bg-[#FA907D] w-9 h-9 rounded-lg flex items-center justify-center">
              <img src={parande} alt="parande" />
            </div>
            <div className="bg-[#FA907D] w-9 h-9 rounded-lg flex items-center justify-center ">
              <img src={faceBook} alt="faceBook" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
