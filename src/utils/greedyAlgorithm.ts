
import { AlgorithmResult } from "@/types/algorithm";
import { simulateExecutionTime } from "./algorithmHelpers";

// Enhanced Greedy Algorithm - More intelligent selection
export const greedyAlgorithm = (arr: number[], target: number): AlgorithmResult => {
  const steps: string[] = [];
  const pathTaken: string[] = [];
  let comparisons = 0;
  let iterations = 0;
  
  // Multiple greedy strategies
  const strategies = [
    { name: "Descending", array: [...arr].sort((a, b) => b - a) },
    { name: "Ascending", array: [...arr].sort((a, b) => a - b) },
    { name: "Ratio-based", array: [...arr].sort((a, b) => (target/a) - (target/b)) }
  ];

  let bestResult = { sum: 0, elements: [] as number[], difference: Infinity };
  
  steps.push(`💚 GREEDY: Mencari kombinasi mendekati ${target}`);
  steps.push(`🔄 Mencoba 3 strategi greedy berbeda untuk hasil optimal`);

  // Try each strategy
  strategies.forEach((strategy, strategyIndex) => {
    const sortedArr = strategy.array;
    let remainingTarget = target;
    let selectedElements: number[] = [];
    let currentSum = 0;
    
    steps.push(`\n📈 Strategi ${strategyIndex + 1} (${strategy.name}): [${sortedArr.join(', ')}]`);
    
    for (let i = 0; i < sortedArr.length && remainingTarget > 0; i++) {
      iterations++;
      comparisons++;
      
      const currentElement = sortedArr[i];
      
      // Smart selection: take element if it improves the solution
      if (currentElement <= remainingTarget) {
        // Check how many times we can use this element
        const maxUse = Math.floor(remainingTarget / currentElement);
        const useCount = Math.min(maxUse, 3); // Limit to avoid infinite loops
        
        for (let use = 0; use < useCount && remainingTarget >= currentElement; use++) {
          selectedElements.push(currentElement);
          currentSum += currentElement;
          remainingTarget -= currentElement;
          
          if (strategyIndex === 0 && i < 5) { // Log only first strategy details
            steps.push(`  ✅ Ambil ${currentElement}, Total: ${currentSum}, Sisa: ${remainingTarget}`);
          }
        }
      }
    }
    
    const difference = Math.abs(target - currentSum);
    if (difference < bestResult.difference) {
      bestResult = {
        sum: currentSum,
        elements: [...selectedElements],
        difference
      };
    }
    
    pathTaken.push(`${strategy.name}: [${selectedElements.join(', ')}] = ${currentSum}`);
  });

  const isOptimal = bestResult.difference === 0;
  const finalMessage = isOptimal 
    ? `🎉 SOLUSI OPTIMAL! [${bestResult.elements.join(', ')}] = ${target}`
    : `⚠️ Solusi terbaik: [${bestResult.elements.join(', ')}] = ${bestResult.sum} (selisih: ${bestResult.difference})`;
  
  steps.push(`\n${finalMessage}`);
  steps.push(`📊 Total perbandingan: ${comparisons}, Iterasi: ${iterations}`);

  const executionTime = simulateExecutionTime(arr.length * 3);

  return {
    found: isOptimal,
    comparisons,
    steps,
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)",
    executionTime,
    iterations,
    pathTaken,
    isOptimal,
    selectedElements: bestResult.elements,
    finalSum: bestResult.sum,
    max: bestResult.sum,
    maxIndex: bestResult.elements.length
  };
};
