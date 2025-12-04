import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../constants/personalInfo';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Expert':
        return '95%';
      case 'Advanced':
        return '85%';
      case 'Intermediate':
        return '70%';
      case 'Proficient':
        return '80%';
      default:
        return '50%';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'from-accent to-green-400';
      case 'Advanced':
        return 'from-blue-400 to-accent';
      case 'Intermediate':
        return 'from-yellow-400 to-accent';
      case 'Proficient':
        return 'from-purple-400 to-accent';
      default:
        return 'from-gray-400 to-accent';
    }
  };

  return (
    <section id="skills" className="section-padding dark:bg-primary-light light:bg-white">
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
              Technical <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-24 h-1 bg-accent mx-auto"
            />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-6 dark:text-white light:text-slate-900">
                  {skillCategory.category}
                </h3>
                <div className="space-y-6">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-600">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold text-accent">
                          {skill.level}
                        </span>
                      </div>
                      <div className="h-2 bg-slate-700/50 dark:bg-slate-700/50 light:bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: getLevelWidth(skill.level) } : { width: 0 }
                          }
                          transition={{
                            duration: 1,
                            delay: 0.7 + categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: 'easeOut',
                          }}
                          className={`h-full bg-gradient-to-r ${getLevelColor(
                            skill.level
                          )} rounded-full shadow-glow`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
