
import { motion } from "framer-motion";
import { Results } from "@/utils/algorithmUtils";
import TheoreticalComparison from "./TheoreticalComparison";
import PerformanceComparison from "./PerformanceComparison";
import AlgorithmRecommendation from "./AlgorithmRecommendation";

interface AnalysisSectionProps {
  results?: Results;
}

const AnalysisSection = ({ results }: AnalysisSectionProps) => {
  return (
    <div className="space-y-6">
      {/* Theoretical Comparison */}
      <TheoreticalComparison />

      {/* Results Analysis */}
      {results && (
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Performance Comparison */}
          <PerformanceComparison results={results} />

          {/* Algorithm Recommendation */}
          <AlgorithmRecommendation results={results} />
        </motion.div>
      )}
    </div>
  );
};

export default AnalysisSection;
