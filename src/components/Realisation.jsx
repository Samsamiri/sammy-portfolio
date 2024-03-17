import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import {close, github} from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {Link} from "react-router-dom";

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
              className={`text-[14px] ${tag.color}`}
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

      </Link>
  );
};

const Realisation = () => {
  return (
    <>
        <p className={`${styles.sectionSubText} `}>Mes Réalisations</p>
        <h2 className={`${styles.sectionHeadText}`}>Projets.</h2>

      <div className='w-full flex'>
        <p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Les projets suivants mettent en avant mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit, accompagné de liens vers le détail du projet.

            <p className={'text-[14px] font-extralight font'}> <span className={'text-red-600'}>* </span>Les tags, précédés du signe "#", situés sous les cartes, regroupent les compétences techniques et transversales utilisées pour mener à bien le projet en question.</p>

        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Realisation, "realisation");
