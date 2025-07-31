
import { motion } from "framer-motion";

const CardAnimations = () => {
  return (
    <>
      {/* Subtle animated border glow */}
      <motion.div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)`,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Subtle animated border */}
      <motion.div
        className="absolute inset-0 rounded-lg border border-transparent group-hover:border-blue-300/30 dark:group-hover:border-blue-600/30 transition-all duration-500"
        whileHover={{
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
        }}
      />
    </>
  );
};

export default CardAnimations;
