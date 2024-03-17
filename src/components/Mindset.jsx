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

const Mindset = () => {
  return (
    <>
        <NavbarReturn/>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Projet Personnel :</p>
        <h2 className={styles.sectionHeadText}>Mindset - Application de rencontre à l'aveugle.</h2>
      </motion.div>

        <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] leading-[30px]'
        >
            <br/><br/>

            Mindset est une application de rencontre innovante que j'ai développée en tant que projet personnel. L'application vise à créer des liens authentiques en privilégiant la personnalité et les valeurs partagées plutôt que l'apparence physique. Elle offre une expérience unique où les photos de profil ne sont révélées que petit à petit après discussion entre les utilisateurs.

            <br/><br/>

            Pour mener ce projet à bien, j'ai mobilisé mes compétences en :
            <span className={'text-[20px] text-amber-50'}> #Flutter </span> et
            <span className={'text-[20px] text-amber-50'}> #Dart </span> pour le développement cross-platform, assurant ainsi une expérience utilisateur fluide sur tous les appareils. J'ai également utilisé
            <span className={'text-[20px] text-amber-50'}> #JAVA </span> et des techniques de
            <span className={'text-[20px] text-amber-50'}> #Maquettage WebMaquettage Web </span> pour construire le backend et concevoir l'interface utilisateur.

            <br/><br/>

            Ce projet a également fait appel à mes compétences transverses :
            <span className={'text-[20px] text-amber-50'}> #Analyse du besoin client</span>,
            <span className={'text-[20px] text-amber-50'}> #Agilité</span>,
            <span className={'text-[20px] text-amber-50'}> #Communication</span>,
            <span className={'text-[20px] text-amber-50'}> #Auto-formation</span>,
            <span className={'text-[20px] text-amber-50'}> #Conformité Légale</span>, et
            <span className={'text-[20px] text-amber-50'}> #Analyse du retour sur investissement</span>, qui ont été cruciales pour répondre efficacement aux besoins des utilisateurs et garantir la conformité du produit.

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

export default SectionWrapper(Mindset, "mindset");
