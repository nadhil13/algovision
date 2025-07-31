
import { motion } from "framer-motion";

const ProjectInfo = () => {
  return (
    <motion.div 
      className="mt-20 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl border border-blue-200/50 dark:border-slate-700/50 p-8 max-w-2xl mx-auto shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Tentang Proyek</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Proyek ini dikembangkan sebagai implementasi praktis dari mata kuliah Analisis Algoritma, 
          dengan fokus pada perbandingan efisiensi dan kompleksitas antara algoritma Brute Force dan Greedy. 
          Website ini menyajikan visualisasi interaktif yang memudahkan pemahaman karakteristik masing-masing algoritma.
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectInfo;
