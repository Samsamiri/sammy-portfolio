import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {Link} from "react-router-dom";

const ServiceCard = ({ index, title, lien}) => (

    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'
        >
            <Link
                to={lien}
                onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                }}
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[100] flex justify-evenly items-center flex-col'
                >

                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </Link>
        </motion.div>
    </Tilt>

);

const Technique = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} md:text-[40px] text-amber-50`}>Compétences Techniques</p>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

        <div className='mt-20 flex flex-wrap gap-7'>
            <ServiceCard title={"#Flutter"} ></ServiceCard>
            <ServiceCard title={"#Dart"} ></ServiceCard>
            <ServiceCard title={"#JAVA"} lien={"/java"}></ServiceCard>
            <ServiceCard title={"#Maquettage Web"}></ServiceCard>
            <ServiceCard title={"#HTML"}></ServiceCard>
            <ServiceCard title={"#CSS"}></ServiceCard>
            <ServiceCard title={"#Angular"} lien={"/angular"}></ServiceCard>

        </div>
    </>
  );
};

export default SectionWrapper(Technique, "technique");
