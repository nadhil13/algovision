
import { motion } from "framer-motion";

interface MemberInfoProps {
  name: string;
  nim: string;
  role: string;
  index: number;
}

const MemberInfo = ({ name, nim, role, index }: MemberInfoProps) => {
  return (
    <motion.div 
      className="text-center mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 + 0.5 }}
    >
      <motion.h3 
        className="text-xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
        whileHover={{
          scale: 1.05,
        }}
      >
        {name}
      </motion.h3>
      <motion.p 
        className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1"
        whileHover={{ scale: 1.02 }}
      >
        NIM: {nim}
      </motion.p>
      <motion.p 
        className="text-gray-600 dark:text-gray-400 text-sm"
        whileHover={{ scale: 1.02 }}
      >
        {role}
      </motion.p>
    </motion.div>
  );
};

export default MemberInfo;
