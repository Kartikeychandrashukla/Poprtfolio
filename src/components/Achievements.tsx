import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiExternalLink, FiCode, FiTrendingUp, FiDatabase } from 'react-icons/fi';
import { SiOpenai } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';
import { achievements } from '../constants/personalInfo';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return FiCode;
      case 'chart':
        return FiTrendingUp;
      case 'network':
        return BiNetworkChart;
      case 'database':
        return FiDatabase;
      case 'ai':
        return SiOpenai;
      default:
        return FiAward;
    }
  };

  return (
    <section id="achievements" className="section-padding dark:bg-primary light:bg-slate-50">
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
              Achievements & <span className="gradient-text">Certifications</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-24 h-1 bg-accent mx-auto"
            />
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = getIcon(achievement.icon);
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass p-6 rounded-xl card-hover group relative overflow-hidden"
                >
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2 dark:text-white light:text-slate-900 group-hover:text-accent transition-colors">
                      {achievement.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-sm font-medium text-accent mb-2">
                      {achievement.issuer}
                    </p>

                    {/* Date */}
                    {achievement.date && (
                      <p className="text-xs text-slate-500 mb-3">{achievement.date}</p>
                    )}

                    {/* Description */}
                    <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-4">
                      {achievement.description}
                    </p>

                    {/* Link */}
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                      >
                        View Certificate
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
