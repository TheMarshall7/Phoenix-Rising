import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

export const Section = ({ children, className = "", id = "" }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`section-padding ${className}`}>
    <div className="container mx-auto">
      {children}
    </div>
  </section>
);

export const Button = ({ children, className = "", variant = "primary", onClick, type = "button" }: { 
  children: ReactNode, 
  className?: string, 
  variant?: "primary" | "secondary" | "outline",
  onClick?: () => void,
  type?: "button" | "submit" | "reset"
}) => {
  const baseStyles = "px-10 py-5 font-medium transition-all duration-700 text-[10px] tracking-[0.3em] uppercase flex items-center justify-center gap-4 group overflow-hidden relative rounded-full";
  const variants = {
    primary: "bg-ink text-cream hover:bg-sage hover:text-ink",
    secondary: "bg-burgundy text-cream hover:bg-ink hover:text-cream",
    outline: "border border-ink/20 text-ink hover:bg-ink hover:text-cream"
  };
  
  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      <span className="relative z-10 flex items-center gap-4">
        {children}
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-500" />
      </span>
    </button>
  );
};
