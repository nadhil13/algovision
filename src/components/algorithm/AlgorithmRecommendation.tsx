
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { Results } from "@/utils/algorithmUtils";

interface AlgorithmRecommendationProps {
  results: Results;
}

const AlgorithmRecommendation = ({ results }: AlgorithmRecommendationProps) => {
  const getRecommendation = (results: Results) => {
    const bruteForceTime = results.bruteForce.executionTime;
    const greedyTime = results.greedy.executionTime;
    const dataSize = results.array.length;
    
    if (dataSize <= 10 && results.bruteForce.found) {
      return {
        algorithm: "Brute Force",
        reason: "Dataset kecil dan solusi optimal diperlukan",
        confidence: "Tinggi",
        color: "orange"
      };
    } else if (greedyTime < bruteForceTime * 0.5 && results.greedy.isOptimal) {
      return {
        algorithm: "Greedy",
        reason: "Efisien dan menghasilkan solusi optimal",
        confidence: "Tinggi",
        color: "green"
      };
    } else if (dataSize > 15) {
      return {
        algorithm: "Greedy",
        reason: "Dataset besar, brute force tidak praktis",
        confidence: "Tinggi",
        color: "green"
      };
    } else {
      return {
        algorithm: "Hybrid",
        reason: "Gunakan greedy untuk screening, brute force untuk validasi",
        confidence: "Sedang",
        color: "blue"
      };
    }
  };

  const recommendation = getRecommendation(results);

  return (
    <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
      <CardHeader>
        <CardTitle className="text-gray-800 dark:text-white flex items-center space-x-2">
          <Award className="w-5 h-5 text-purple-500" />
          <span>Rekomendasi Algoritma</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className={`p-4 rounded-lg border-2 ${
            recommendation.color === 'green' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700' :
            recommendation.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700' :
            'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                🏆 Rekomendasi: {recommendation.algorithm}
              </h3>
              <Badge className={`${
                recommendation.confidence === 'Tinggi' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                Confidence: {recommendation.confidence}
              </Badge>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Alasan:</strong> {recommendation.reason}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">💡 Saran Optimasi:</h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Untuk n {'>'}20: Gunakan Greedy atau Heuristic</li>
                <li>• Untuk solusi kritis: Validasi Greedy dengan Brute Force sample</li>
                <li>• Pertimbangkan Dynamic Programming untuk optimasi</li>
              </ul>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">🎯 Aplikasi Real-World:</h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Portfolio optimization (finance)</li>
                <li>• Resource allocation (cloud computing)</li>
                <li>• Knapsack problems (logistics)</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlgorithmRecommendation;
