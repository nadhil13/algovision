
import TeamMemberCard from "./TeamMemberCard";

interface TeamMemberProps {
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

const TeamMember = ({ member, index }: TeamMemberProps) => {
  return <TeamMemberCard member={member} index={index} />;
};

export default TeamMember;
