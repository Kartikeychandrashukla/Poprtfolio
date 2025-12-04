import React from 'react';
import { FiLinkedin, FiGithub, FiMail, FiHeart } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';
import { personalInfo } from '../constants/personalInfo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiLinkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FiGithub, url: personalInfo.github, label: 'GitHub' },
    { icon: SiLeetcode, url: personalInfo.leetcode, label: 'LeetCode' },
    { icon: FiMail, url: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative mt-24 py-12 border-t border-slate-700/50 dark:border-slate-700 light:border-slate-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              <span className="gradient-text">Kartikey Shukla</span>
            </h3>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm">
              Frontend Developer specializing in building exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 dark:text-white light:text-slate-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      document.getElementById(item.toLowerCase())?.scrollIntoView({
                        behavior: 'smooth',
                      });
                    }}
                    className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 dark:text-white light:text-slate-900">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400 dark:text-slate-400 light:text-slate-600">
                {personalInfo.location}
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-accent transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-accent transition-colors duration-300"
                >
                  {personalInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-100 text-slate-400 hover:text-accent hover:bg-accent/10 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-slate-700/50 dark:border-slate-700 light:border-slate-200">
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm flex items-center justify-center">
            <span>© {currentYear} Kartikey Chandra Shukla. Built with</span>
            <FiHeart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
            <span>and React</span>
          </p>
          <p className="text-slate-500 dark:text-slate-500 light:text-slate-500 text-xs mt-2">
            Designed & Developed with passion for excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
