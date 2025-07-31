
import { motion } from "framer-motion";
import { Sparkles, Heart, Award, Star } from "lucide-react";

const FloatingIcons = () => {
  const floatingIcons = [
    { Icon: Sparkles, delay: 0 },
    { Icon: Heart, delay: 0.5 },
    { Icon: Award, delay: 1 },
    { Icon: Star, delay: 1.5 }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {floatingIcons.map(({ Icon, delay }, iconIndex) => (
        <motion.div
          key={iconIndex}
          className="absolute"
          style={{
            left: `${20 + iconIndex * 20}%`,
            top: `${10 + iconIndex * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-4 h-4 text-blue-400/30" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
