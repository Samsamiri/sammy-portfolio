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

const TableauIndicateur = () => {
  return (
    <>
        <NavbarReturn/>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Dedalus Healthcare France :</p>
        <h2 className={styles.sectionHeadText}> Tableaux de bord d'indicateurs pour la surveillance de patients à risque.</h2>
      </motion.div>

        <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] leading-[30px]'
        >
            <br/><br/>

            Dans le cadre de ce projet d'entreprise, j'ai développé un tableau de bord d'indicateurs visant à améliorer la surveillance des patients à risque en milieu hospitalier. Cet outil a été conçu pour permettre au personnel soignant de suivre efficacement et en temps réel des données critiques, améliorant la réactivité face aux urgences médicales.

            <br/><br/>

            J'ai mis à profit mes compétences en :
            <span className={'text-[20px] text-amber-50'}> #Angular </span>,
            <span className={'text-[20px] text-amber-50'}> #HTML </span>,
            <span className={'text-[20px] text-amber-50'}> #JAVA </span>, et
            <span className={'text-[20px] text-amber-50'}> #Maquettage Web </span>
            pour réaliser l'interface utilisateur et le backend de l'application. La stylisation a été effectuée avec
            <span className={'text-[20px] text-amber-50'}> #CSS </span>, garantissant une expérience utilisateur cohérente et intuitive.

            <br/><br/>

            Mon travail a également bénéficié de compétences transversales telles que :
            <span className={'text-[20px] text-amber-50'}> #Agilité </span>,
            <span className={'text-[20px] text-amber-50'}> #Analyse du besoin client </span>, et
            <span className={'text-[20px] text-amber-50'}> #Communication </span>,
            qui ont été essentielles pour adapter l'outil aux exigences spécifiques du milieu hospitalier et pour communiquer efficacement avec les parties prenantes.
        </motion.div>

      <p className={styles.sectionSubText2 } >Compétences Techniques :</p>

      <div className='mt-6 flex flex-wrap gap-5'>
        <ServiceCard title={"#Angular"}></ServiceCard>
        <ServiceCard title={"#Maquettage Web"}></ServiceCard>
        <ServiceCard title={"#JAVA"}></ServiceCard>
        <ServiceCard title={"#HTML"}></ServiceCard>
        <ServiceCard title={"#CSS"}></ServiceCard>
      </div>

        <p className={styles.sectionSubText2 } >Compétences Transverses :</p>

        <div className='mt-6 flex flex-wrap gap-5'>
            <ServiceCard title={"#Analyse du besoin client"}></ServiceCard>
            <ServiceCard title={"#Agilité"}></ServiceCard>
            <ServiceCard title={"#Communication"}></ServiceCard>
            <ServiceCard title={"#Auto-formation"}></ServiceCard>
            <ServiceCard title={"#Conformité Légale"}></ServiceCard>
            <ServiceCard title={"#Analyse du retour sur investissement"}></ServiceCard>
        </div>
    </>
  );
};

export default SectionWrapper(TableauIndicateur, "tableauIndicateur");
