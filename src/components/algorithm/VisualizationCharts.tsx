
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Results } from "@/utils/algorithmUtils";

interface VisualizationChartsProps {
  results: Results;
}

const VisualizationCharts = ({ results }: VisualizationChartsProps) => {
  const performanceData = [
    {
      algorithm: 'Brute Force',
      executionTime: results.bruteForce.executionTime,
      iterations: results.bruteForce.iterations,
      comparisons: results.bruteForce.comparisons,
    },
    {
      algorithm: 'Greedy',
      executionTime: results.greedy.executionTime,
      iterations: results.greedy.iterations,
      comparisons: results.greedy.comparisons,
    }
  ];

  const complexityData = [
    { size: 5, bruteForce: 32, greedy: 5 },
    { size: 6, bruteForce: 64, greedy: 6 },
    { size: 7, bruteForce: 128, greedy: 7 },
    { size: 8, bruteForce: 256, greedy: 8 },
    { size: 10, bruteForce: 1024, greedy: 10 },
  ];

  const iterationsData = [
    { name: 'Brute Force', value: results.bruteForce.iterations, color: '#f59e0b' },
    { name: 'Greedy', value: results.greedy.iterations, color: '#10b981' }
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
      {/* Performance Comparison Bar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-blue-200/50 dark:border-slate-700/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-white text-sm">
              Perbandingan Waktu Eksekusi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="algorithm" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="executionTime" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Iterations Pie Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-blue-200/50 dark:border-slate-700/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-white text-sm">
              Distribusi Iterasi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={iterationsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {iterationsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Complexity Comparison Line Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-blue-200/50 dark:border-slate-700/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-white text-sm">
              Kompleksitas vs Ukuran Input
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={complexityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="size" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="bruteForce" stroke="#f59e0b" strokeWidth={2} />
                <Line type="monotone" dataKey="greedy" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default VisualizationCharts;
