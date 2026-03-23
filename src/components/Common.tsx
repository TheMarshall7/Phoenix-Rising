import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => (
  <section id={id} className={`section-padding ${className}`}>
    {children}
  </section>
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'sage';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-10 py-5 text-[10px] tracking-[0.4em] uppercase font-bold transition-all duration-500 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-forest text-cream hover:bg-ink hover:text-white shadow-lg translate-y-0 hover:-translate-y-1",
    outline: "border border-ink/20 text-ink hover:border-forest hover:text-forest hover:bg-forest/5",
    ghost: "text-ink/60 hover:text-forest tracking-widest px-0 py-0",
    sage: "bg-sage text-ink hover:bg-forest hover:text-cream px-12"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const FadeIn: React.FC<{ children: React.ReactNode; className?: string; [key: string]: any }> = ({ children, className = "", ...props }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    {...props}
  >
    {children}
  </motion.div>
);
