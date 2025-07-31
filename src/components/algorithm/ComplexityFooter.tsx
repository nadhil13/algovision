
import { Results } from "@/utils/algorithmUtils";

interface ComplexityFooterProps {
  results: Results;
  algorithmType: 'bruteForce' | 'greedy';
}

const ComplexityFooter = ({ results, algorithmType }: ComplexityFooterProps) => {
  const algorithm = results[algorithmType];
  const borderColor = algorithmType === 'bruteForce' 
    ? 'border-orange-200 dark:border-orange-700' 
    : 'border-green-200 dark:border-green-700';

  return (
    <div className={`border-t ${borderColor} pt-4`}>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>{algorithmType === 'bruteForce' ? 'Hasil' : 'Efisiensi'}:</strong> {
              algorithmType === 'bruteForce' 
                ? (algorithm.found ? 'Ditemukan solusi optimal' : 'Tidak ada solusi')
                : `${Math.round((results.greedy.executionTime / results.bruteForce.executionTime) * 100)}% dari Brute Force`
            }
          </p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Kompleksitas:</strong> {
              algorithmType === 'bruteForce' 
                ? 'O(2ⁿ) exponential' 
                : 'O(n log n) polynomial'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplexityFooter;
