
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { Results } from "@/utils/algorithmUtils";

interface PerformanceComparisonProps {
  results: Results;
}

const PerformanceComparison = ({ results }: PerformanceComparisonProps) => {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
      <CardHeader>
        <CardTitle className="text-gray-800 dark:text-white flex items-center space-x-2">
          <Award className="w-5 h-5 text-blue-500" />
          <span>Hasil Analisis Eksperimental</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
            <h4 className="font-semibold text-gray-800 dark:text-white">Ukuran Dataset</h4>
            <p className="text-2xl font-bold text-blue-600">{results.array.length}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">elemen</p>
          </div>
          <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
            <h4 className="font-semibold text-gray-800 dark:text-white">Efisiensi Waktu</h4>
            <p className="text-2xl font-bold text-green-600">
              {Math.round((results.bruteForce.executionTime / results.greedy.executionTime))}x
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Greedy lebih cepat</p>
          </div>
          <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
            <h4 className="font-semibold text-gray-800 dark:text-white">Akurasi</h4>
            <div className="flex justify-center space-x-2">
              <Badge className={results.bruteForce.isOptimal ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>
                BF: {results.bruteForce.isOptimal ? "Optimal" : "Sub-optimal"}
              </Badge>
              <Badge className={results.greedy.isOptimal ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}>
                G: {results.greedy.isOptimal ? "Optimal" : "Sub-optimal"}
              </Badge>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/70 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
            📊 Kesimpulan Perbandingan:
          </h4>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Untuk dataset dengan <strong>{results.array.length} elemen</strong> dan target <strong>{results.target}</strong>:
            <br />
            • <strong>Brute Force</strong> melakukan {results.bruteForce.iterations} iterasi dalam {results.bruteForce.executionTime}ms
            {results.bruteForce.found ? " dan menemukan solusi optimal" : " namun tidak menemukan solusi"}
            <br />
            • <strong>Greedy</strong> melakukan {results.greedy.iterations} iterasi dalam {results.greedy.executionTime}ms
            dan mencapai nilai {results.greedy.max} {results.greedy.isOptimal ? "(optimal)" : "(sub-optimal)"}
            <br />
            • Greedy <strong>{Math.round((1 - results.greedy.executionTime/results.bruteForce.executionTime) * 100)}% lebih efisien</strong> dalam hal waktu eksekusi
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceComparison;
