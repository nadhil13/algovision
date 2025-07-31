
import { motion } from "framer-motion";

const CourseInfo = () => {
  return (
    <motion.div 
      className="mt-8 p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-blue-200/50 dark:border-slate-700/50 max-w-md mx-auto shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Mata Kuliah</h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium">Analisis Algoritma</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Semester Ganjil 2024/2025</p>
    </motion.div>
  );
};

export default CourseInfo;
