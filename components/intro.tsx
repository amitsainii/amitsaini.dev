'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin } from 'react-icons/bs';
import { TiDownload } from 'react-icons/ti';
import { PiHandWavingLight } from 'react-icons/pi';
import { GiMicrophone } from 'react-icons/gi';
import { BsHeartFill, BsGithub } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';
import { MdEngineering } from 'react-icons/md';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/amit-saini.jpg"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-50 w-50 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <PiHandWavingLight className="inline" />, I'm Amit.
      </motion.h1>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Passionate about the ever-evolving landscape of <span className="font-bold">Web Development</span>{' '}
        <TbWorldWww className="inline" />, I’m a seasoned <span className="font-bold">Staff Software Engineer</span>{' '}
        <MdEngineering className="inline" /> and an <GiMicrophone className="inline" /> Aspiring Speaker with a{' '}
        <BsHeartFill className="text-red-500 inline" /> for all things <span className="font-bold">JavaScript</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/30"
          href="/Amit-Resume.pdf"
          download
        >
          Download Resume <TiDownload className="opacity-60 transition" />
        </a>
        <div className="flex gap-2">
          <a
            className="bg-white p-4 text-gray-700 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/30 dark:text-white"
            href="https://linkedin.com/in/amitsainii"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/30 dark:text-white"
            href="https://twitter.com/_amitsainii"
            target="_blank"
          >
            <FaSquareXTwitter />
          </a>

          <a
            className="bg-white p-4 text-gray-700 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/30 dark:text-white"
            href="https://github.com/amitsainii"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
