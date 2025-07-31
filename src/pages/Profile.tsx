
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import TeamMember from "@/components/profile/TeamMember";
import FloatingIcons from "@/components/profile/FloatingIcons";
import CourseInfo from "@/components/profile/CourseInfo";
import ProjectInfo from "@/components/profile/ProjectInfo";
import { teamMembers } from "@/data/teamMembers";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
              Kelompok 8
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Tim Developer yang berdedikasi dalam mengembangkan proyek Analisis Algoritma
          </p>
          
          <CourseInfo />
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={member.nim} className="relative">
              <FloatingIcons />
              <TeamMember member={member} index={index} />
            </div>
          ))}
        </div>

        <ProjectInfo />
      </div>
    </div>
  );
};

export default Profile;
