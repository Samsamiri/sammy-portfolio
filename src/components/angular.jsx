import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import NavbarReturn from "./NavbarReturn.jsx";
import {Link} from "react-router-dom";
import Tilt from "react-tilt";
import {projectsInJava} from "../constants/index.js";


const ProjectCard = ({
                         index,
                         name,
                         description,
                         tagsTechnique,
                         tagsTransverse,
                         image,
                         source_code_link,
                         taille,
                     }) => {
    return (
        <Link
            to={source_code_link}
            className='flex gap-2'
            onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
            }}
        >
            <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
                <Tilt
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
                >
                    <div className='relative w-full h-[230px]'>
                        <img
                            src={image}
                            alt='project_image'
                            className='w-full h-full object-cover rounded-2xl'
                        />
                    </div>

                    <div className='mt-5'>
                        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                    </div>

                    <br/>

                    <p className={'text-sm'}>Compétences techniques :</p>
                    <div className=' flex flex-wrap gap-2'>
                        {tagsTechnique.map((tag) => (
                            <p
                                key={`${name}-${tag.name}`}
                                className={`${tag.taille} ${tag.color}`}
                            >
                                #{tag.name}
                            </p>
                        ))}
                    </div>

                    <br/>

                    <p className={'text-sm'}>Compétences transverses :</p>
                    <div className='flex flex-wrap gap-2 '>
                        {tagsTransverse.map((tag) => (
                            <p
                                key={`${name}-${tag.name}`}
                                className={`text-[14px] ${tag.color}`}
                            >
                                #{tag.name}
                            </p>
                        ))}
                    </div>

                </Tilt>
            </motion.div>
        </Link>
    );
};


const Java = () => {
    return (
        <>
            <NavbarReturn />
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Compétence Technique :</p>
                <h2 className={styles.sectionHeadText}>Java.</h2>
            </motion.div>

            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] leading-[30px]'
            >
                <p>
                    Java, un langage clé pour le développement d'applications solides, il a été un élément essentiel de ma formation en informatique. Ma maîtrise de Java s'est étendue à travers plusieurs projets variés, allant des systèmes internes aux applications grand public.
                </p>

                <br/>
                <p className='mt-4  '>
                    <strong className={"text-[26px]"}>Tableaux de bord d'indicateurs</strong> - <Link to="/tableauIndicateur" className="text-amber-50">Voir le projet</Link><br/>
                    J'ai utilisé Java pour traiter et analyser les données critiques des patients à risque. Cela a permis de garantir la précision et la sécurité nécessaires dans le domaine de la santé.
                </p>
                <br/>

                <p className='mt-4'>
                    <strong className={"text-[26px]"}>Mindset, Application de rencontre à l'aveugle</strong> - <Link to="/mindset" className="text-amber-50">Voir le projet</Link><br/>
                    Java a été utilisé pour créer une backend robuste pour Mindset, en gérant les données utilisateur, en mettant en œuvre des fonctionnalités de matching et en facilitant la communication entre le client et le serveur.
                </p>
                <br/>

                <p className='mt-4'>
                    <strong className={"text-[26px]"}>Logiciel de gestion de santé Orbis</strong> - <Link to="/orbisProject" className="text-amber-50">Voir le projet</Link><br/>
                    Mon expérience avec Orbis a mis l'accent sur l'utilisation de Java pour développer des solutions critiques de gestion de santé. J'ai travaillé sur l'intégration de modules, l'amélioration de la performance du système et l'ajout de nouvelles fonctionnalités qui ont contribué à moderniser les processus hospitaliers.
                </p>
                <br/>

                <p className='mt-4'>
                    En somme, Java a été un allié incontournable dans mon parcours de développeur. Il m'a permis d'aborder avec assurance des domaines variés, de la santé à la rencontre en ligne, tout en renforçant mes compétences en logique de programmation, en conception de systèmes et en gestion de données.
                </p>
            </motion.div>

                <p className="sm:text-[23px] font-bold mt-20 text-secondary uppercase tracking-wider">Mes projets Java :</p>

            <div className='mt-10 flex flex-wrap gap-7'>
                {projectsInJava.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Java, "java");