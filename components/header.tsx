'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed left-1/2 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] top-3 sm:top-6 h-[3.25rem] w-11/12 max-w-[36rem] rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed left-1/2 -translate-x-1/2 top-[1.2rem] sm:top-[1.7rem] h-[initial] py-0">
        <ul className="flex items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 w-[initial] flex-nowrap gap-5">
          {links.map((link) => (
            <motion.li
              className="full-rounded sm:h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 gap-1',
                  {
                    'text-gray-950 dark:text-gray-200': activeSection === link.name,
                    'dark:hover:text-gray-300': activeSection !== link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.icon}
                <span className="sm:block hidden">{link.name}</span>

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-300 rounded-full absolute inset-0 -z-10 dark:bg-gray-100"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
