
import { motion } from "framer-motion";

interface SkillsListProps {
  skills: string[];
  index: number;
}

const SkillsList = ({ skills, index }: SkillsListProps) => {
  const skillVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        type: "spring" as const,
        stiffness: 400
      }
    }
  };

  return (
    <div className="mb-6">
      <motion.h4 
        className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
        whileHover={{ scale: 1.05 }}
      >
        Keahlian
      </motion.h4>
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill, skillIndex) => (
          <motion.span
            key={skill}
            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700 cursor-pointer font-medium"
            variants={skillVariants}
            whileHover="hover"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.2 + skillIndex * 0.1 + 0.8,
              type: "spring" as const,
              stiffness: 500,
              damping: 15
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
