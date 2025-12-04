import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../constants/personalInfo';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personalInfo.tagline;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialIcons = [
    { Icon: FiLinkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { Icon: FiGithub, url: personalInfo.github, label: 'GitHub' },
    { Icon: SiLeetcode, url: personalInfo.leetcode, label: 'LeetCode' },
    { Icon: FiMail, url: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-accent text-lg md:text-xl font-medium">
              Hi, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 dark:text-white light:text-slate-900"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typing Effect Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6 h-12 md:h-16"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold gradient-text">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-300 dark:text-slate-300 light:text-slate-600 mb-12 max-w-2xl"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-accent text-primary rounded-lg font-semibold flex items-center gap-2 hover:shadow-glow transition-all duration-300 btn-glow"
            >
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.open('https://drive.google.com/file/d/1P_Lu1IUNHgn869ncCc38qNMR8yxuSjCb/view?usp=sharing', '_blank')}
              className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold flex items-center gap-2 hover:bg-accent hover:text-primary transition-all duration-300"
            >
              <FiDownload />
              View Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-slate-600 dark:border-slate-600 light:border-slate-300 dark:text-white light:text-slate-900 rounded-lg font-semibold hover:border-accent hover:text-accent transition-all duration-300"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-6"
          >
            {socialIcons.map(({ Icon, url, label }, index) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-100 text-slate-300 hover:text-accent hover:bg-accent/10 hover:shadow-glow transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-accent rounded-full flex justify-center p-2"
            >
              <motion.div className="w-1 h-3 bg-accent rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
