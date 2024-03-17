import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import NavbarReturn from "./NavbarReturn.jsx";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Mindset = () => {
  return (
    <>
        <NavbarReturn/>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>A Propos.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px]'
      >
          Actuellement <span className={'text-[20px] text-amber-50'}>alternant</span> chez <span className={'text-[20px] text-amber-50'}><u><a  href={"https://www.dedalus.com/fr/fr/"}>Dedalus Healthcare France</a></u></span> à Artigues-près-Bordeaux pour <span className={'text-[20px] text-amber-50'}>ma quatrième année de formation</span> à <span className={'text-[20px] text-amber-50'}><u><a  href={"https://www.esiea.fr/lecole/les-campus/campus-agen/"}> ESIEA Agen.</a></u></span>

          <br/>
          <br/>

          je suis en train de façonner mon expertise en <span className={'text-[20px] text-amber-50'}>développement logicel et web</span> durant cette quatrième année à ESIEA Agen. Animé par une forte <span className={'text-[20px] text-amber-50'}>capacité d'adaptation</span> et un <span className={'text-[20px] text-amber-50'}>esprit collaboratif,</span> je m'<span className={'text-[20px] text-amber-50'}>intègre</span> aisément au sein d'équipes multidisciplinaires, en <span className={'text-[20px] text-amber-50'}>apportant dynamisme et réflexion stratégique.</span> Doté d'un <span className={'text-[20px] text-amber-50'}>esprit analytique</span>, je suis constamment à l'affût de nouvelles façons d'optimiser les processus et de <span className={'text-[20px] text-amber-50'}>résoudre des problèmes complexes.</span> Les expériences professionnelles m'ont doté d'une <span className={'text-[20px] text-amber-50'}>aisance dans la communication</span> et m'ont inculqué l'importance de la <span className={'text-[20px] text-amber-50'}>responsabilité et de l'engagement</span> envers des objectifs communs.

          <br/>
          <br/>
          <span className={'text-[20px] text-amber-50'}>Projet professionnel :</span>
          <br/>
          Concernant mon projet professionnel, je suis dans une <span className={'text-[20px] text-amber-50'}>phase d'évaluation</span>, balançant entre la vision globale d'un <span className={'text-[20px] text-amber-50'}>architecte logiciel</span> et l'orientation produit d'un <span className={'text-[20px] text-amber-50'}>product owner</span>. Ce dilemme professionnel reflète mon aspiration à <span className={'text-[20px] text-amber-50'}>influer</span> significativement sur le <span className={'text-[20px] text-amber-50'}>développement de solutions technologiques</span> et à orchestrer des projets qui <span className={'text-[20px] text-amber-50'}>résolvent</span> des <span className={'text-[20px] text-amber-50'}>défis réels</span>.

          <br/>
          <br/>

          <span className={'text-[20px] text-amber-50'}>Centres d'intérêts :</span>
          <br/>
          <span className={'text-[20px] text-amber-50'}>Mon approche professionnelle</span> est ancrée dans une <span className={'text-[20px] text-amber-50'}>passion</span> pour le <span className={'text-[20px] text-amber-50'}>commerce</span> et la <span className={'text-[20px] text-amber-50'}>technologie de pointe</span>. Je suis captivé par les évolutions rapides du <span className={'text-[20px] text-amber-50'}>marché des crypto-monnaies</span> et je reste à l'avant-garde des tendances en <span className={'text-[20px] text-amber-50'}>réalité virtuelle</span> et en <span className={'text-[20px] text-amber-50'}>modélisation 3D</span>. Ouvert au monde, j'aime approfondir ma connaissance des <span className={'text-[20px] text-amber-50'}>langues étrangères</span>, ce qui enrichit mon interaction avec des cultures diverses. Pour garder un équilibre, je m'investis régulièrement dans la <span className={'text-[20px] text-amber-50'}>musculation</span> et les <span className={'text-[20px] text-amber-50'}>sports de combat</span>, des activités qui renforcent ma <span className={'text-[20px] text-amber-50'}>discipline et ma détermination</span>.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Mindset, "mindset");
