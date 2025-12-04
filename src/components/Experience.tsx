import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import { experiences } from '../constants/personalInfo';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-padding dark:bg-primary-light light:bg-white">
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
              Work <span className="gradient-text">Experience</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-24 h-1 bg-accent mx-auto"
            />
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="relative pl-8 pb-12 border-l-2 border-accent/30 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-glow" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 md:p-8 rounded-xl hover:shadow-glow transition-all duration-300"
                >
                  {/* Company Logo Placeholder */}
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                        <FiBriefcase className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold dark:text-white light:text-slate-900">
                          {exp.company}
                        </h3>
                        <p className="text-accent font-semibold">{exp.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Period and Location */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 dark:text-white light:text-slate-900">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-slate-300 dark:text-slate-300 light:text-slate-600"
                        >
                          <span className="text-accent mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 dark:text-white light:text-slate-900">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
