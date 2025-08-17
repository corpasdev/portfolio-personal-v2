import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Button from './Button';

export default function HeroContent() {
  // Configuración de animaciones para elementos individuales
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.2,
        staggerChildren: 0.15,
      },
    },
  };

  const socialItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        className="flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Badge */}
        <motion.div
          className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-[var(--background-accent)] text-[var(--secondary)] text-sm"
          variants={itemVariants}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2"></span>
          Disponible para proyectos
        </motion.div>

        {/* Headline */}
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight"
          variants={itemVariants}
        >
          Senior Frontend Engineer <br />
          <span className="text-[var(--primary)]">& UX/UI Designer</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl text-[var(--secondary)] max-w-2xl mb-8"
          variants={itemVariants}
        >
          Creo experiencias digitales atractivas y accesibles con código limpio y diseño centrado en el usuario. 
          Especializado en React, Astro y Motion para sitios web de alto rendimiento.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-12"
          variants={itemVariants}
        >
          <Button 
            variant="primary" 
            size="lg"
            href="/projects"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Ver proyectos
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            href="/contact"
          >
            Contactar
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex items-center space-x-6"
          variants={socialVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="https://github.com/brandoncorpas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
            variants={socialItemVariants}
            whileHover={{ y: -3 }}
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/brandoncorpas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
            variants={socialItemVariants}
            whileHover={{ y: -3 }}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://twitter.com/brandoncorpas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
            variants={socialItemVariants}
            whileHover={{ y: -3 }}
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
