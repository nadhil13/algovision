
// Simulate realistic execution time
export const simulateExecutionTime = (complexity: number): number => {
  return Math.round(complexity * (0.05 + Math.random() * 0.1));
};

// Generate more realistic test arrays
export const generateRandomArray = (size: number = 6): number[] => {
  const baseElements = [1, 2, 3, 5, 8, 10, 12, 15, 18, 20];
  const result = [];
  
  for (let i = 0; i < size; i++) {
    const randomElement = baseElements[Math.floor(Math.random() * baseElements.length)] + 
                         Math.floor(Math.random() * 5);
    result.push(randomElement);
  }
  
  return result.sort((a, b) => a - b);
};

// Get realistic target for better comparison
export const getRecommendedTarget = (arr: number[]): number => {
  const sum = arr.reduce((a, b) => a + b, 0);
  const avgElement = sum / arr.length;
  
  // Target should be achievable but not too easy
  return Math.floor(avgElement * 2 + Math.random() * avgElement);
};
