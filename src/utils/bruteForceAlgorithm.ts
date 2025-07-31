
import { AlgorithmResult } from "@/types/algorithm";
import { simulateExecutionTime } from "./algorithmHelpers";

// Enhanced Brute Force - Subset Sum (Exact Match)
export const bruteForceSearch = (arr: number[], target: number): AlgorithmResult => {
  const steps: string[] = [];
  const pathTaken: string[] = [];
  let comparisons = 0;
  let iterations = 0;
  let found = false;
  let bestSubset: number[] = [];
  let closestSum = 0;
  let closestSubset: number[] = [];
  let minDifference = Infinity;

  steps.push(`🔍 BRUTE FORCE: Mencari subset dengan jumlah = ${target}`);
  steps.push(`📊 Mengeksplorasi semua 2^${arr.length} = ${Math.pow(2, arr.length)} kombinasi`);
  
  const n = arr.length;
  const totalCombinations = Math.pow(2, n);
  
  // Generate all possible subsets
  for (let i = 1; i < totalCombinations; i++) { // Skip empty subset
    iterations++;
    let currentSubset: number[] = [];
    let currentSum = 0;
    
    // Convert binary to subset
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        currentSubset.push(arr[j]);
        currentSum += arr[j];
      }
    }
    
    comparisons++;
    const subsetStr = `{${currentSubset.join(', ')}}`;
    
    // Track closest solution
    const difference = Math.abs(target - currentSum);
    if (difference < minDifference) {
      minDifference = difference;
      closestSum = currentSum;
      closestSubset = [...currentSubset];
    }
    
    // Log important steps
    if (i <= 8 || currentSum === target || (i % Math.floor(totalCombinations / 8) === 0)) {
      steps.push(`Langkah ${iterations}: ${subsetStr} → jumlah = ${currentSum}`);
    }
    
    pathTaken.push(`${subsetStr} = ${currentSum}`);
    
    // Check for exact match
    if (currentSum === target) {
      found = true;
      bestSubset = [...currentSubset];
      steps.push(`✅ SOLUSI OPTIMAL! ${subsetStr} = ${target}`);
      break;
    }
  }

  // Use closest if exact not found
  if (!found && closestSubset.length > 0) {
    bestSubset = closestSubset;
    steps.push(`⚠️ Solusi terdekat: {${closestSubset.join(', ')}} = ${closestSum} (selisih: ${minDifference})`);
  }

  const executionTime = simulateExecutionTime(totalCombinations);

  return {
    found,
    comparisons,
    steps,
    timeComplexity: "O(2^n)",
    spaceComplexity: "O(n)",
    executionTime,
    iterations,
    pathTaken,
    isOptimal: true,
    selectedElements: bestSubset,
    finalSum: found ? target : closestSum
  };
};
