
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Zap } from "lucide-react";
import { Results } from "@/utils/algorithmUtils";
import PerformanceMetrics from "./PerformanceMetrics";
import ResultSummary from "./ResultSummary";
import ExecutionSteps from "./ExecutionSteps";
import ComplexityFooter from "./ComplexityFooter";

interface ResultCardProps {
  results: Results;
  algorithmType: 'bruteForce' | 'greedy';
  delay: number;
}

const ResultCard = ({ results, algorithmType, delay }: ResultCardProps) => {
  const algorithm = results[algorithmType];
  const isBruteForce = algorithmType === 'bruteForce';
  
  const config = {
    bruteForce: {
      title: 'Brute Force (Exhaustive Search)',
      icon: Target,
      colorScheme: 'orange' as const,
      borderColor: 'border-orange-200/50 dark:border-orange-700/50',
      bgColor: 'bg-orange-100 dark:bg-orange-900/50',
      textColor: 'text-orange-700 dark:text-orange-300',
      iconColor: 'text-orange-600'
    },
    greedy: {
      title: 'Greedy Algorithm (Local Optimum)',
      icon: Zap,
      colorScheme: 'green' as const,
      borderColor: 'border-green-200/50 dark:border-green-700/50',
      bgColor: 'bg-green-100 dark:bg-green-900/50',
      textColor: 'text-green-700 dark:text-green-300',
      iconColor: 'text-green-600'
    }
  };

  const { title, icon: Icon, colorScheme, borderColor, bgColor, textColor, iconColor } = config[algorithmType];

  return (
    <motion.div
      initial={{ opacity: 0, x: isBruteForce ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className={`bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg ${borderColor} shadow-lg`}>
        <CardHeader>
          <CardTitle className="text-gray-800 dark:text-white flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <Icon className={`w-5 h-5 ${iconColor}`} />
              <span>{title}</span>
            </span>
            <Badge className={`${bgColor} ${textColor}`}>
              {algorithm.timeComplexity}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <PerformanceMetrics
            executionTime={algorithm.executionTime}
            iterations={algorithm.iterations}
            colorScheme={colorScheme}
          />
          
          <ResultSummary results={results} algorithmType={algorithmType} />
          
          <ExecutionSteps steps={algorithm.steps} />
          
          <ComplexityFooter results={results} algorithmType={algorithmType} />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ResultCard;
