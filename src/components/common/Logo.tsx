import React from 'react';
import { BookOpenCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600"
      >
        <BookOpenCheck size={20} className="text-white" />
      </motion.div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-tight tracking-tight text-gray-800 dark:text-white">AIDA</span>
        <span className="text-[10px] font-medium leading-tight text-blue-600 dark:text-blue-400">by IBM Research</span>
      </div>
    </Link>
  );
};

export default Logo;