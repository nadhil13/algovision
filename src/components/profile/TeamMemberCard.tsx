
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import ProfileImage from "./ProfileImage";
import MemberInfo from "./MemberInfo";
import SkillsList from "./SkillsList";
import CardAnimations from "./CardAnimations";

interface TeamMemberCardProps {
  member: {
    name: string;
    nim: string;
    role: string;
    photo: string;
    skills: string[];
    color: string;
    accent: string;
  };
  index: number;
}

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -15,
      scale: 0.8
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }),
    hover: {
      y: -15,
      scale: 1.02,
      transition: {
        duration: 0.3,
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="relative perspective-1000"
    >
      <Card className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50 hover:border-blue-300/50 dark:hover:border-blue-600/50 transition-all duration-500 transform overflow-hidden shadow-xl hover:shadow-2xl">
        <CardAnimations />
        
        <CardContent className="relative p-8 z-10">
          <ProfileImage 
            photo={member.photo} 
            name={member.name} 
            index={index} 
          />
          
          <MemberInfo 
            name={member.name}
            nim={member.nim}
            role={member.role}
            index={index}
          />

          <SkillsList 
            skills={member.skills}
            index={index}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;
