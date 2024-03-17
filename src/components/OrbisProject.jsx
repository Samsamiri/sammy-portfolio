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

const OrbisProject = () => {
  return (
    <>
        <NavbarReturn/>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>DEDALUS HEALTHCARE FRANCE :</p>
        <h2 className={styles.sectionHeadText}>Orbis - Logiciel de gestion de santé pour hôpitaux.</h2>
      </motion.div>

        <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] leading-[30px]'
        >
            <br/><br/>

            Dans le cadre de mon alternance, j'ai intégré le projet Orbis, un système de gestion de la santé élaboré pour les hôpitaux et cliniques d'envergure. Ma contribution s'est focalisée sur l'amélioration de fonctionnalités existantes et le développement de nouvelles capacités au sein de l'équipe dédiée à la pharmacie, ainsi qu'à la correction de bugs remontés par les clients renforçant ainsi l'efficacité et la performance du logiciel.

            <br/><br/>

            Au cœur de ce projet, mes compétences techniques ont été mises à l'épreuve, notamment avec :
            <span className={'text-[20px] text-amber-50'}> #HTML </span>,
            <span className={'text-[20px] text-amber-50'}> #CSS </span>,
            <span className={'text-[20px] text-amber-50'}> #Angular </span>, et
            <span className={'text-[20px] text-amber-50'}> #JAVA </span>.
            Ces outils ont été essentiels pour développer une interface utilisateur fonctionnelle et pour garantir la fiabilité du backend.

            <br/><br/>

            Les compétences transversales telles que :
            <span className={'text-[20px] text-amber-50'}> #Analyse du besoin client </span>,
            <span className={'text-[20px] text-amber-50'}> #Agilité </span>,
            <span className={'text-[20px] text-amber-50'}> #Communication </span>,
            <span className={'text-[20px] text-amber-50'}> #Auto-formation </span>,
            <span className={'text-[20px] text-amber-50'}> #Conformité Légale </span>, et
            <span className={'text-[20px] text-amber-50'}> #Analyse du retour sur investissement </span>,
            ont également joué un rôle clé dans la collaboration avec l'équipe de développement et dans la compréhension approfondie des exigences du domaine médical.

        </motion.div>

      <p className={styles.sectionSubText2 } >Compétences Techniques :</p>

      <div className='mt-6 flex flex-wrap gap-5'>
        <ServiceCard title={"#Flutter"}></ServiceCard>
        <ServiceCard title={"#Dart"}></ServiceCard>
        <ServiceCard title={"#JAVA"}></ServiceCard>
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

export default SectionWrapper(OrbisProject, "orbisProject");
