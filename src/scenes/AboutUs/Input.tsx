// استفاده نکردم هنوز ////////////

import React from "react";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import { useForm } from "react-hook-form";
import AboutUsImage from "@/assets/AboutUs.jpg";

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function Input({ setSelectedPage }: Props) {
  const inputStyle = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-gray-700`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="aboutUs" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500 ">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Experience an all-in-one fitness plan that blends hypertrophy,
            strength, and performance. Build a strong, resilient body without
            burnout or injury using our proven methods and expert advice
          </p>
        </motion.div>
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/marya.firooz.1380@gmail.com"
              method="POST"
            >
              <input
                className={inputStyle}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" && "Max length is 100 char"}
                </p>
              )}
              <input
                className={inputStyle}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email addresses"}
                </p>
              )}

              <textarea
                className={inputStyle}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char"}
                </p>
              )}

              <button
                className="mt-5 rounded-lg bg-primary-300 px-20 py-3 text-gray-700 transition duration-500 hover:text-white"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className=" md:before:content-evoLvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img className="w-full" src={AboutUsImage} alt="About us" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Input;
