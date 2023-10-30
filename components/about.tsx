'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing my graduation in Electronics and Communication Engineering, I was introduced to programming
        towards the end of my studies. This introduction ignited a curiosity within me, and I subsequently shifted my
        focus to the software industry. I'm deeply intrigued by the ever-evolving trends, technologies, and tools in the
        web development world
      </p>

      <p>
        When I'm not immersed in coding, I have a keen interest in sports. I love playing badminton and cricket, and
        once in a while, I dive into swimming.
      </p>
    </motion.section>
  );
}
