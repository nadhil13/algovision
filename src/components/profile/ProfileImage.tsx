
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ProfileImageProps {
  photo: string;
  name: string;
  index: number;
}

const ProfileImage = ({ photo, name, index }: ProfileImageProps) => {
  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        type: "spring" as const,
        stiffness: 200
      }
    }
  };

  return (
    <div className="relative mb-6 group/image">
      <motion.div 
        className="w-32 h-32 mx-auto rounded-full overflow-hidden relative"
        whileHover="hover"
      >
        {/* Animated ring that doesn't obstruct content */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-400/40"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.img
          src={photo}
          alt={name}
          className="w-full h-full object-cover relative z-10 rounded-full"
          variants={imageVariants}
          whileHover="hover"
        />
      </motion.div>

      {/* Enhanced star icon */}
      <motion.div 
        className="absolute -top-2 -right-2 z-20"
        whileHover={{
          scale: 1.2,
          rotate: 180,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <Star className="w-4 h-4 text-white" />
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileImage;
