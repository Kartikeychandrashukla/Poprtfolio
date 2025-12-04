import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { aboutMe } from '../constants/personalInfo';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { count: leetcodeCount, ref: leetcodeRef } = useAnimatedCounter(250);
  const { count: projectsCount, ref: projectsRef } = useAnimatedCounter(3);
  const { count: uptimeCount, ref: uptimeRef } = useAnimatedCounter(99.5, 2000, 0);

  const techIcons = [
    { Icon: SiReact, name: 'React', color: '#61DAFB' },
    { Icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  ];

  return (
    <section id="about" className="section-padding dark:bg-primary light:bg-slate-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4 dark:text-white light:text-slate-900"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-24 h-1 bg-accent mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image & Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Profile Image Placeholder */}
              <div className="relative mb-8">
                <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-blue-500/20 p-1">
                  <div className="w-full h-full rounded-2xl dark:bg-primary-light light:bg-white flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center text-6xl font-bold text-primary">
                        KCS
                      </div>
                      <p className="mt-6 text-slate-400 dark:text-slate-400 light:text-slate-600">
                        Professional Photo Placeholder
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div ref={leetcodeRef} className="text-center p-6 rounded-xl glass">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {leetcodeCount}+
                  </div>
                  <div className="text-sm text-slate-400">LeetCode Problems</div>
                </div>
                <div ref={projectsRef} className="text-center p-6 rounded-xl glass">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {projectsCount}+
                  </div>
                  <div className="text-sm text-slate-400">Major Projects</div>
                </div>
                <div ref={uptimeRef} className="text-center p-6 rounded-xl glass">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {uptimeCount.toFixed(1)}%
                  </div>
                  <div className="text-sm text-slate-400">Uptime</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="space-y-6">
                <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {aboutMe.split('\n\n').map((paragraph, index) => (
                    <span key={index} className="block mb-4">
                      {paragraph}
                    </span>
                  ))}
                </p>

                {/* Tech Stack Icons */}
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-6 dark:text-white light:text-slate-900">
                    Technologies I Work With
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                    {techIcons.map(({ Icon, name, color }, index) => (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl glass hover:shadow-glow transition-all duration-300 cursor-pointer"
                      >
                        <Icon className="w-10 h-10" style={{ color }} />
                        <span className="text-xs text-slate-400">{name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Download Resume Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('#', '_blank')}
                  className="mt-8 px-8 py-4 bg-accent text-primary rounded-lg font-semibold flex items-center gap-2 hover:shadow-glow transition-all duration-300 btn-glow"
                >
                  <FiDownload />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
