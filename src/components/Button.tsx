import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  // Configuración de tamaños
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-2.5 px-6',
  };

  // Configuración de variantes
  const variantClasses = {
    primary: 'bg-[var(--primary)] text-[var(--background)] hover:opacity-90',
    secondary: 'bg-[var(--background-accent)] text-[var(--foreground)] hover:bg-opacity-80',
    outline: 'bg-transparent border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:bg-opacity-10',
  };

  // Clases base compartidas
  const baseClasses = 'rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2';

  // Clases completas
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  // Componente de botón con animación
  const ButtonContent = () => (
    <>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </>
  );

  // Renderizado condicional basado en si es un enlace o un botón
  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <ButtonContent />
    </motion.button>
  );
}
