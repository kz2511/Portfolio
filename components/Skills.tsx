"use client"
import React, { useState } from 'react'
import { LampContainer } from './ui/Lamp'
import { motion } from "motion/react";
import { skills } from '@/data';
import Tooltip from '@mui/material/Tooltip';
import { CustomTooltip } from './ui/CustomTooltip';

const Skills = () => {

  const [skillSelected, setskillSelected] = useState(0)
  const [anim, setanim] = useState(false)
  return (
    <section id='skills' className='py-20 pb-0'>
      <h1 className="heading">
        My {" "} <span className="text-purple">Skills</span>
      </h1>

      <div className="relative w-full mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          onViewportEnter={() => setanim(true)}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex-center flex-col"
        >
          <div className="flex-center w-full max-w-5xl flex-wrap gap-8 md:gap-10">
            {skills.map(({ Icon, name, prog, color }, idx) => (
              <CustomTooltip key={name} title={name} arrowSx={{ color: color }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.25, zIndex: 50, y: -10 }}
                  transition={{
                    delay: idx * 0.05,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-4 cursor-pointer relative group"
                >
                  <motion.span
                    className="text-4xl md:text-5xl rounded-full text-white p-4 md:p-5 flex-center transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]"
                    style={{
                      background: color,
                      boxShadow: anim ? `0 10px 30px -10px ${color}` : "none",
                    }}
                  >
                    <Icon />
                  </motion.span>
                  <span className="text-sm font-bold text-foreground bg-white/80 px-4 py-1.5 rounded-full border border-border shadow-sm backdrop-blur-sm group-hover:border-primary/30 group-hover:bg-white transition-colors">
                    {name}
                  </span>
                </motion.div>
              </CustomTooltip>
            ))}
          </div>
        </motion.div>
      </div>
      {/* <div className='flex-center  mt-16'>
            <div className='flex flex-wrap gap-6 w-[70%]'>
              <div className='border backdrop-blur-xl relative w-[24rem] h-[20rem] border-[#f06529] rounded-2xl lg:p-10 py-6 p-5 flex max-lg:flex-col lg:items-center gap-2  before:bg-black-100 before:absolute before:-top-0.5 before:left-6 before:h-1 before:w-20 before:backdrop-blur-xl '>
                <h2 className='text-[#f06529] z-1 bg-black-100 px-1 absolute -top-6 text-5xl left-10'><FaHtml5 /></h2>


              </div>
            </div>
          </div> */}


    </section>
  )
}

export default Skills