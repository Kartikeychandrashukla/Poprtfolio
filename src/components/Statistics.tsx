import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { statistics } from '../constants/personalInfo';
import { Statistic } from '../types';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

interface StatCardProps {
  stat: Statistic;
  index: number;
  inView: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index, inView }) => {
  const numericValue = parseFloat(stat.value);
  const { count, ref: counterRef } = useAnimatedCounter(numericValue, 2000, 0);

  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="glass p-6 rounded-xl text-center group hover:shadow-glow transition-all duration-300"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
        {stat.value.includes('.') ? count.toFixed(1) : Math.floor(count)}
        {stat.suffix}
      </div>
      <div className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
        {stat.label}
      </div>
    </motion.div>
  );
};

const Statistics: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding dark:bg-primary-light light:bg-white">
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
              Impact by <span className="gradient-text">Numbers</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-24 h-1 bg-accent mx-auto"
            />
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {statistics.map((stat, index) => (
              <StatCard key={stat.id} stat={stat} index={index} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
