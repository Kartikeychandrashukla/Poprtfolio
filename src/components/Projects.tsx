import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../constants/personalInfo';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Full-Stack', 'React', 'Real-Time', 'AI Integration'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <section id="projects" className="section-padding dark:bg-primary light:bg-slate-50">
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
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-24 h-1 bg-accent mx-auto"
            />
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-accent text-primary shadow-glow'
                    : 'glass text-slate-300 hover:text-accent'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-xl overflow-hidden card-hover group"
              >
                {/* Project Header */}
                <div className="p-6 border-b border-slate-700/50">
                  <h3 className="text-xl font-bold mb-2 dark:text-white light:text-slate-900 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Project Body */}
                <div className="p-6 space-y-4">
                  {/* Key Metrics */}
                  {project.keyMetrics && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-accent">
                        Key Metrics:
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.keyMetrics.map((metric, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-slate-400 flex items-center gap-1"
                          >
                            <span className="text-accent">✓</span>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 dark:text-white light:text-slate-900">
                      Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 flex gap-2"
                        >
                          <span className="text-accent">▹</span>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-accent">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 dark:text-white light:text-slate-900">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded bg-accent/10 text-accent border border-accent/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 text-xs rounded bg-accent/10 text-accent border border-accent/30">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="p-6 pt-0 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-primary transition-all duration-300"
                  >
                    <FiGithub />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-primary rounded-lg hover:shadow-glow transition-all duration-300"
                  >
                    <FiExternalLink />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
