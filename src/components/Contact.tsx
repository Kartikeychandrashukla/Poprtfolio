import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../constants/personalInfo';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSubmitStatus({ type: null, message: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', subject: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // EmailJS configuration
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

      // Template parameters matching EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'kartikey.picc@gmail.com',
      };

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { Icon: FiLinkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { Icon: FiGithub, url: personalInfo.github, label: 'GitHub' },
    { Icon: SiLeetcode, url: personalInfo.leetcode, label: 'LeetCode' },
  ];

  return (
    <section id="contact" className="section-padding dark:bg-primary light:bg-slate-50">
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
              Let's Build Something{' '}
              <span className="gradient-text">Amazing Together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-400 dark:text-slate-400 light:text-slate-600"
            >
              Open to opportunities and collaborations
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-24 h-1 bg-accent mx-auto mt-4"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 dark:text-white light:text-slate-900">
                  Get In Touch
                </h3>
                <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 mb-8">
                  I'm currently available for freelance work and full-time opportunities.
                  If you have a project in mind or just want to chat, feel free to reach
                  out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:shadow-glow transition-all">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white light:text-slate-900">
                      Email
                    </h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-slate-400 hover:text-accent transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:shadow-glow transition-all">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white light:text-slate-900">
                      Phone
                    </h4>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-slate-400 hover:text-accent transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:shadow-glow transition-all">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white light:text-slate-900">
                      Location
                    </h4>
                    <p className="text-slate-400">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4 dark:text-white light:text-slate-900">
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map(({ Icon, url, label }) => (
                    <motion.a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 rounded-lg bg-accent/10 text-accent hover:shadow-glow transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 dark:text-white light:text-slate-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border ${
                      errors.name ? 'border-red-500' : 'border-slate-700'
                    } dark:text-white light:text-slate-900 focus:outline-none focus:border-accent transition-colors`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 dark:text-white light:text-slate-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border ${
                      errors.email ? 'border-red-500' : 'border-slate-700'
                    } dark:text-white light:text-slate-900 focus:outline-none focus:border-accent transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 dark:text-white light:text-slate-900"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border ${
                      errors.subject ? 'border-red-500' : 'border-slate-700'
                    } dark:text-white light:text-slate-900 focus:outline-none focus:border-accent transition-colors`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 dark:text-white light:text-slate-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border ${
                      errors.message ? 'border-red-500' : 'border-slate-700'
                    } dark:text-white light:text-slate-900 focus:outline-none focus:border-accent transition-colors resize-none`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/10 border border-green-500/50 text-green-400'
                        : 'bg-red-500/10 border border-red-500/50 text-red-400'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full px-8 py-4 bg-accent text-primary rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-glow transition-all duration-300 btn-glow ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
