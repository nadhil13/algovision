
import { Results } from "@/utils/algorithmUtils";

interface ResultSummaryProps {
  results: Results;
  algorithmType: 'bruteForce' | 'greedy';
}

const ResultSummary = ({ results, algorithmType }: ResultSummaryProps) => {
  const algorithm = results[algorithmType];
  
  return (
    <div className="p-3 bg-gray-100 dark:bg-slate-700/50 rounded-lg">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        <strong>Input:</strong> [{results.array.join(', ')}]
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        <strong>Target:</strong> {results.target}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        <strong>{algorithmType === 'bruteForce' ? 'Status' : 'Hasil'}:</strong> {
          algorithmType === 'bruteForce' 
            ? (algorithm.isOptimal ? '✅ Optimal' : '⚠️ Sub-optimal')
            : `${algorithm.max} ${algorithm.isOptimal ? '(Optimal ✅)' : '(Sub-optimal ⚠️)'}`
        }
      </p>
    </div>
  );
};

export default ResultSummary;
