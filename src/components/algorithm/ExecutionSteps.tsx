
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface ExecutionStepsProps {
  steps: string[];
}

const ExecutionSteps = ({ steps }: ExecutionStepsProps) => {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-gray-800 dark:text-white flex items-center space-x-2">
        <TrendingUp className="w-4 h-4" />
        <span>Langkah-langkah Eksekusi:</span>
      </h4>
      <div className="max-h-64 overflow-y-auto space-y-1">
        {steps.map((step: string, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`text-sm p-2 rounded ${
              step.includes('✅') || step.includes('🎉') ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300' :
              step.includes('❌') || step.includes('⚠️') ? 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300' :
              step.includes('🔍') || step.includes('📊') || step.includes('💚') || step.includes('📈') || step.includes('🎯') ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300' :
              'bg-gray-100 dark:bg-slate-700/50 text-gray-700 dark:text-gray-300'
            }`}
          >
            {step}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExecutionSteps;
