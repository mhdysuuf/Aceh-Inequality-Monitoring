import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base";
  
  const variants = {
    primary: "bg-gh-black text-white hover:bg-zinc-800 border border-transparent shadow-sm",
    secondary: "bg-white text-gh-black border border-gh-black hover:bg-zinc-100",
    outline: "bg-transparent border border-zinc-300 text-gh-black hover:border-gh-black",
    ghost: "bg-transparent text-zinc-600 hover:text-gh-black"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};