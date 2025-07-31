
import { useState, useEffect } from "react";
import { BarChart3, Code, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";
import InputSection from "@/components/algorithm/InputSection";
import AlgorithmResults from "@/components/algorithm/AlgorithmResults";
import CodeDisplay from "@/components/algorithm/CodeDisplay";
import AnalysisSection from "@/components/algorithm/AnalysisSection";
import VisualizationCharts from "@/components/algorithm/VisualizationCharts";
import { bruteForceSearch, greedyAlgorithm, generateRandomArray, getRecommendedTarget, Results } from "@/utils/algorithmUtils";

const Algorithm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputArray, setInputArray] = useState("15, 7, 9, 4, 12, 6, 18");
  const [target, setTarget] = useState("25");
  const [results, setResults] = useState<Results | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const runAlgorithms = async () => {
    setIsRunning(true);
    
    // Parse input
    const arr = inputArray.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    const targetNum = parseInt(target);

    if (arr.length === 0 || isNaN(targetNum)) {
      setIsRunning(false);
      return;
    }

    // Simulate processing delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));

    const bruteForceResult = bruteForceSearch(arr, targetNum);
    const greedyResult = greedyAlgorithm(arr, targetNum);

    setResults({
      array: arr,
      target: targetNum,
      bruteForce: bruteForceResult,
      greedy: greedyResult
    });

    setIsRunning(false);
  };

  const reset = () => {
    setResults(null);
    setInputArray("15, 7, 9, 4, 12, 6, 18");
    setTarget("25");
  };

  const generateRandom = () => {
    const randomArray = generateRandomArray(6 + Math.floor(Math.random() * 4));
    const recommendedTarget = getRecommendedTarget(randomArray);
    
    setInputArray(randomArray.join(', '));
    setTarget(recommendedTarget.toString());
    setResults(null);
  };

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
              Simulasi Interaktif
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Brute Force vs Greedy
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Bandingkan performa, akurasi, dan kompleksitas dua pendekatan fundamental dalam Analisis Algoritma
          </p>
        </motion.div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <InputSection
            inputArray={inputArray}
            target={target}
            isRunning={isRunning}
            onInputArrayChange={setInputArray}
            onTargetChange={setTarget}
            onRunAlgorithms={runAlgorithms}
            onReset={reset}
            onGenerateRandom={generateRandom}
          />
        </motion.div>

        {/* Results Section */}
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Tabs defaultValue="simulation" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white/70 dark:bg-slate-800/70 border border-blue-200/50 dark:border-slate-700/50">
                <TabsTrigger value="simulation" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/50">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Simulasi
                </TabsTrigger>
                <TabsTrigger value="visualization" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/50">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Visualisasi
                </TabsTrigger>
                <TabsTrigger value="code" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/50">
                  <Code className="w-4 h-4 mr-2" />
                  Source Code C++
                </TabsTrigger>
                <TabsTrigger value="analysis" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/50">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Analisis
                </TabsTrigger>
              </TabsList>

              <TabsContent value="simulation" className="space-y-6">
                <AlgorithmResults results={results} />
              </TabsContent>

              <TabsContent value="visualization" className="space-y-6">
                <VisualizationCharts results={results} />
              </TabsContent>

              <TabsContent value="code" className="space-y-6">
                <CodeDisplay results={results} />
              </TabsContent>

              <TabsContent value="analysis" className="space-y-6">
                <AnalysisSection results={results} />
              </TabsContent>
            </Tabs>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Algorithm;
