import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import NavbarReturn from "./NavbarReturn.jsx";
import {Link} from "react-router-dom";

const ServiceCard = ({ index, title}) => (

  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'
    >
        <Link
            to={"source_code_link"}
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

const LogisticSupportSite = () => {
  return (
    <>
        <NavbarReturn/>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Projet Professionnel :</p>
            <h2 className={styles.sectionHeadText}>Egytronics - Site web de Support de solution logistique.</h2>
        </motion.div>

        <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] leading-[30px]'
        >
            <br/><br/>

            J'ai conçu, développé et déployé un site web de contact pour le support d'une solution logistique avancée, ciblant les professionnels des secteurs militaire et naval. Conçu pour s'étendre à l'échelle internationale, le site permet des échanges directs et efficaces avec les utilisateurs du monde entier, reflétant un engagement envers une accessibilité et une communication sans frontières.

            <br/><br/>

            Pour mener ce projet à bien, j'ai mobilisé mes compétences en :
            <span className={'text-[20px] text-amber-50'}> #CSS </span> et
            <span className={'text-[20px] text-amber-50'}> #HTML </span> a été fondamentale pour créer une interface claire et fonctionnelle, tandis que le
            <span className={'text-[20px] text-amber-50'}> #Maquettage Web </span>
            a aidé à conceptualiser et affiner l'expérience utilisateur.
            <br/><br/>

            Ce projet a été l'occasion de renforcer des compétences transversales primordiales telles que :
            <span className={'text-[20px] text-amber-50'}> #Analyse du besoin client</span>,
            <span className={'text-[20px] text-amber-50'}> #Communication</span>,
            <span className={'text-[20px] text-amber-50'}> #Auto-formation</span>, et
            <span className={'text-[20px] text-amber-50'}> #Conformité Légale</span>,
            assurant que le projet répond aux exigences de sécurité et de réglementation internationales.

        </motion.div>

      <p className={styles.sectionSubText2 } >Compétences Techniques :</p>

      <div className='mt-6 flex flex-wrap gap-5'>
        <ServiceCard title={"#Maquettage Web"}></ServiceCard>
        <ServiceCard title={"#HTML"}></ServiceCard>
        <ServiceCard title={"#CSS"}></ServiceCard>
      </div>

        <p className={styles.sectionSubText2 } >Compétences Transverses :</p>

        <div className='mt-6 flex flex-wrap gap-5'>
            <ServiceCard title={"#Analyse du besoin client"}></ServiceCard>
            <ServiceCard title={"#Communication"}></ServiceCard>
            <ServiceCard title={"#Auto-formation"}></ServiceCard>
            <ServiceCard title={"#Conformité Légale"}></ServiceCard>
        </div>
    </>
  );
};

export default SectionWrapper(LogisticSupportSite , "logisticSupportSite");
