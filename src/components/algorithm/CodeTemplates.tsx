
interface CodeTemplatesProps {
  array: number[];
  target: number;
}

const CodeTemplates = ({ array, target }: CodeTemplatesProps) => {
  const arrayStr = `{${array.join(', ')}}`;

  const bruteForceCode = `
#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

// Brute Force Algorithm - Subset Sum Problem
class BruteForceSubsetSum {
private:
    vector<int> array;
    int target;
    int comparisons;
    int iterations;
    vector<int> bestSubset;
    bool found;
    
public:
    BruteForceSubsetSum(vector<int>& arr, int t) : array(arr), target(t), 
        comparisons(0), iterations(0), found(false) {}
    
    void solve() {
        int n = array.size();
        int totalCombinations = pow(2, n);
        
        cout << "=== BRUTE FORCE SUBSET SUM ===" << endl;
        cout << "Array: [";
        for(int i = 0; i < n; i++) {
            cout << array[i];
            if(i < n-1) cout << ", ";
        }
        cout << "]" << endl;
        cout << "Target: " << target << endl;
        cout << "Total kombinasi: 2^" << n << " = " << totalCombinations << endl;
        cout << "\\n--- Mencoba semua kombinasi ---" << endl;
        
        int minDifference = INT_MAX;
        vector<int> closestSubset;
        int closestSum = 0;
        
        // Generate all possible subsets (skip empty subset)
        for(int i = 1; i < totalCombinations; i++) {
            iterations++;
            vector<int> currentSubset;
            int currentSum = 0;
            
            // Convert binary representation to subset
            for(int j = 0; j < n; j++) {
                if(i & (1 << j)) {
                    currentSubset.push_back(array[j]);
                    currentSum += array[j];
                }
            }
            
            comparisons++;
            
            // Log important steps
            if(i <= 8 || currentSum == target || (i % (totalCombinations/8) == 0)) {
                cout << "Subset " << i << ": {";
                for(int k = 0; k < currentSubset.size(); k++) {
                    cout << currentSubset[k];
                    if(k < currentSubset.size()-1) cout << ", ";
                }
                cout << "} = " << currentSum << endl;
            }
            
            // Track closest solution
            int difference = abs(target - currentSum);
            if(difference < minDifference) {
                minDifference = difference;
                closestSum = currentSum;
                closestSubset = currentSubset;
            }
            
            // Check for exact match
            if(currentSum == target) {
                found = true;
                bestSubset = currentSubset;
                cout << "\\n*** SOLUSI OPTIMAL DITEMUKAN! ***" << endl;
                cout << "Subset: {";
                for(int k = 0; k < bestSubset.size(); k++) {
                    cout << bestSubset[k];
                    if(k < bestSubset.size()-1) cout << ", ";
                }
                cout << "} = " << target << endl;
                break;
            }
        }
        
        if(!found && !closestSubset.empty()) {
            bestSubset = closestSubset;
            cout << "\\nSolusi terdekat: {";
            for(int k = 0; k < bestSubset.size(); k++) {
                cout << bestSubset[k];
                if(k < bestSubset.size()-1) cout << ", ";
            }
            cout << "} = " << closestSum << " (selisih: " << minDifference << ")" << endl;
        }
        
        cout << "\\n=== HASIL BRUTE FORCE ===" << endl;
        cout << "Total iterasi: " << iterations << endl;
        cout << "Total perbandingan: " << comparisons << endl;
        cout << "Kompleksitas waktu: O(2^n)" << endl;
        cout << "Kompleksitas ruang: O(n)" << endl;
        cout << "Optimal: " << (found ? "Ya" : "Tidak") << endl;
    }
    
    vector<int> getBestSubset() { return bestSubset; }
    bool isFound() { return found; }
    int getComparisons() { return comparisons; }
    int getIterations() { return iterations; }
};

int main() {
    vector<int> arr = ${arrayStr};
    int target = ${target};
    
    BruteForceSubsetSum solver(arr, target);
    solver.solve();
    
    return 0;
}
`.trim();

  const greedyCode = `
#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

// Greedy Algorithm - Multiple Strategy Subset Sum
class GreedySubsetSum {
private:
    vector<int> array;
    int target;
    int comparisons;
    int iterations;
    vector<int> bestResult;
    int bestSum;
    int bestDifference;
    
public:
    GreedySubsetSum(vector<int>& arr, int t) : array(arr), target(t), 
        comparisons(0), iterations(0), bestSum(0), bestDifference(INT_MAX) {}
    
    // Strategy 1: Descending order (largest first)
    vector<int> solveDescending(vector<int> arr) {
        sort(arr.begin(), arr.end(), greater<int>());
        return greedySelect(arr, "Descending (Terbesar dulu)");
    }
    
    // Strategy 2: Ascending order (smallest first)
    vector<int> solveAscending(vector<int> arr) {
        sort(arr.begin(), arr.end());
        return greedySelect(arr, "Ascending (Terkecil dulu)");
    }
    
    // Strategy 3: Ratio-based selection
    vector<int> solveRatioBased(vector<int> arr) {
        sort(arr.begin(), arr.end(), [this](int a, int b) {
            return (double)target/a < (double)target/b;
        });
        return greedySelect(arr, "Ratio-based (Berdasarkan rasio)");
    }
    
    vector<int> greedySelect(vector<int>& sortedArr, string strategyName) {
        cout << "\\n--- Strategi: " << strategyName << " ---" << endl;
        cout << "Array terurut: [";
        for(int i = 0; i < sortedArr.size(); i++) {
            cout << sortedArr[i];
            if(i < sortedArr.size()-1) cout << ", ";
        }
        cout << "]" << endl;
        
        vector<int> selectedElements;
        int currentSum = 0;
        int remainingTarget = target;
        
        for(int i = 0; i < sortedArr.size() && remainingTarget > 0; i++) {
            iterations++;
            comparisons++;
            
            int currentElement = sortedArr[i];
            
            // Greedy choice: take element if it fits
            if(currentElement <= remainingTarget) {
                // Allow multiple use of same element (limited)
                int maxUse = min(3, remainingTarget / currentElement);
                
                for(int use = 0; use < maxUse && remainingTarget >= currentElement; use++) {
                    selectedElements.push_back(currentElement);
                    currentSum += currentElement;
                    remainingTarget -= currentElement;
                    
                    cout << "Ambil " << currentElement << ", Total: " << currentSum;
                    cout << ", Sisa target: " << remainingTarget << endl;
                }
            } else {
                cout << "Skip " << currentElement << " (terlalu besar)" << endl;
            }
        }
        
        int difference = abs(target - currentSum);
        cout << "Hasil strategi: Sum = " << currentSum;
        cout << ", Selisih = " << difference << endl;
        
        // Update best result if this is better
        if(difference < bestDifference) {
            bestDifference = difference;
            bestSum = currentSum;
            bestResult = selectedElements;
        }
        
        return selectedElements;
    }
    
    void solve() {
        cout << "=== GREEDY ALGORITHM - SUBSET SUM ===" << endl;
        cout << "Array: [";
        for(int i = 0; i < array.size(); i++) {
            cout << array[i];
            if(i < array.size()-1) cout << ", ";
        }
        cout << "]" << endl;
        cout << "Target: " << target << endl;
        cout << "\\nMencoba 3 strategi greedy berbeda:" << endl;
        
        // Try all three strategies
        vector<int> result1 = solveDescending(array);
        vector<int> result2 = solveAscending(array);
        vector<int> result3 = solveRatioBased(array);
        
        cout << "\\n=== HASIL TERBAIK ===" << endl;
        if(bestDifference == 0) {
            cout << "*** SOLUSI OPTIMAL DITEMUKAN! ***" << endl;
        } else {
            cout << "Solusi terbaik (tidak optimal):" << endl;
        }
        
        cout << "Subset terpilih: {";
        for(int i = 0; i < bestResult.size(); i++) {
            cout << bestResult[i];
            if(i < bestResult.size()-1) cout << ", ";
        }
        cout << "}" << endl;
        cout << "Sum: " << bestSum << endl;
        cout << "Selisih dari target: " << bestDifference << endl;
        
        cout << "\\n=== STATISTIK GREEDY ===" << endl;
        cout << "Total iterasi: " << iterations << endl;
        cout << "Total perbandingan: " << comparisons << endl;
        cout << "Kompleksitas waktu: O(n log n)" << endl;
        cout << "Kompleksitas ruang: O(1)" << endl;
        cout << "Optimal: " << (bestDifference == 0 ? "Ya" : "Tidak") << endl;
    }
    
    vector<int> getBestResult() { return bestResult; }
    int getBestSum() { return bestSum; }
    bool isOptimal() { return bestDifference == 0; }
    int getComparisons() { return comparisons; }
    int getIterations() { return iterations; }
};

int main() {
    vector<int> arr = ${arrayStr};
    int target = ${target};
    
    GreedySubsetSum solver(arr, target);
    solver.solve();
    
    return 0;
}
`.trim();

  return { bruteForceCode, greedyCode };
};

export default CodeTemplates;
