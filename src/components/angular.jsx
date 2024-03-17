import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import NavbarReturn from "./NavbarReturn.jsx";
import {Link} from "react-router-dom";
import Tilt from "react-tilt";
import {projectsInAngular} from "../constants/index.js";


const ProjectCard = ({
                         index,
                         name,
                         description,
                         tagsTechnique,
                         tagsTransverse,
                         image,
                         source_code_link,
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


const Angular = () => {
    return (
        <>
            <NavbarReturn />
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Compétence Technique :</p>
                <h2 className={styles.sectionHeadText}>Angular.</h2>
            </motion.div>

            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] leading-[30px]'
            >
                <p>
                    Angular est un framework structurant pour le développement de front-end qui a été essentiel dans la création d'interfaces utilisateur interactives et performantes dans mes projets.
                </p>

                <p className='mt-4'>
                    <strong>Tableaux de bord d'indicateurs</strong> - <Link to="/projects/indicators-dashboard" className="text-amber-50">Voir le projet</Link><br/>
                    Utilisant Angular, j'ai construit des interfaces réactives pour les tableaux de bord médicaux, permettant une visualisation et une interaction fluides avec les données en temps réel pour les professionnels de la santé.
                </p>

                <p className='mt-4'>
                    <strong>Orbis - Logiciel de gestion de santé pour hôpitaux</strong> - <Link to="/projects/orbis-healthcare" className="text-amber-50">Voir le projet</Link><br/>
                    J'ai utilisé Angular pour créer des composants modulaires et des services injectables, ce qui a permis d'obtenir un système de gestion de santé hautement évolutif et maintenable au sein de l'architecture Orbis.
                </p>

                <p className='mt-4'>
                    Ces applications de Angular démontrent sa puissance et sa flexibilité, et reflètent mon engagement à construire des solutions front-end de haute qualité qui sont non seulement fonctionnelles, mais aussi esthétiquement plaisantes.
                </p>
            </motion.div>

                <p className="sm:text-[23px] font-bold mt-20 text-secondary uppercase tracking-wider">Mes projets Angular :</p>

            <div className='mt-10 flex flex-wrap gap-7'>
                {projectsInAngular.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Angular, "angular");