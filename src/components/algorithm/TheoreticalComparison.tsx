
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, CheckCircle, AlertTriangle } from "lucide-react";

const TheoreticalComparison = () => {
  return (
    <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-blue-200/50 dark:border-slate-700/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-gray-800 dark:text-white flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          <span>Analisis Teoritis Algoritma</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Brute Force (Exhaustive Search)</span>
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Definisi:</strong> Eksplorasi sistematis semua kemungkinan kombinasi subset</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Kelebihan:</strong> Selalu menemukan solusi optimal jika ada, lengkap dan akurat</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span><strong>Kekurangan:</strong> Kompleksitas eksponensial O(2ⁿ), tidak scalable</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full mt-0.5 flex-shrink-0"></div>
                <span><strong>Use Case:</strong> Dataset kecil (n ≤ 20), solusi optimal kritis</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Greedy Algorithm (Local Optimum)</span>
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Definisi:</strong> Pilih solusi terbaik lokal pada setiap langkah</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Kelebihan:</strong> Sangat efisien O(n log n), scalable untuk big data</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span><strong>Kekurangan:</strong> Tidak selalu optimal global, bergantung problem structure</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full mt-0.5 flex-shrink-0"></div>
                <span><strong>Use Case:</strong> Dataset besar, solusi "cukup baik" acceptable</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TheoreticalComparison;
