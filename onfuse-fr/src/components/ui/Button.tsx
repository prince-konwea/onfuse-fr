import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, className }) => {
  return (
    <motion.button
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.05 }}
  onClick={onClick}
  className={`
    ${className}
    bg-gradient-to-r from-[#037DD6] to-[#6900ee]
    group
    text-white 
    py-5 px-20 
    rounded-full 
    font-semibold k
    shadow-lg 
    border
    hover:border-[#4FD1C5]
    transition-all duration-300
    flex items-center gap-4
  `}
>

  Continue
  <ArrowRight className="w-5 h-5 font-medium  group-hover:translate-x-7 duration-300 ease-in-out text-white" />

</motion.button>

  );
};

export default Button;
