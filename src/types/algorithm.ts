
export interface AlgorithmResult {
  found?: boolean;
  index?: number;
  max?: number;
  maxIndex?: number;
  comparisons: number;
  steps: string[];
  timeComplexity: string;
  spaceComplexity: string;
  executionTime: number;
  iterations: number;
  pathTaken: string[];
  isOptimal: boolean;
  selectedElements?: number[];
  finalSum?: number;
}

export interface Results {
  array: number[];
  target: number;
  bruteForce: AlgorithmResult;
  greedy: AlgorithmResult;
}
