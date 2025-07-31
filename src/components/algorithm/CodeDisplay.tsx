
import { Results } from "@/utils/algorithmUtils";
import CodeBlock from "./CodeBlock";
import InputInfo from "./InputInfo";
import UsageInstructions from "./UsageInstructions";
import CodeTemplates from "./CodeTemplates";

interface CodeDisplayProps {
  results?: Results;
}

const CodeDisplay = ({ results }: CodeDisplayProps) => {
  // Use dynamic values from results or fallback to defaults
  const array = results?.array || [15, 7, 9, 4, 12, 6, 18];
  const target = results?.target || 25;
  const totalCombinations = Math.pow(2, array.length);

  const { bruteForceCode, greedyCode } = CodeTemplates({ array, target });

  return (
    <div className="space-y-6">
      {results && (
        <InputInfo 
          array={array}
          target={target}
          totalCombinations={totalCombinations}
        />
      )}
      
      <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-2">
        <CodeBlock
          title="Brute Force Implementation"
          code={bruteForceCode}
          complexity="O(2^n)"
          language="C++"
          colorScheme="orange"
        />

        <CodeBlock
          title="Greedy Implementation"
          code={greedyCode}
          complexity="O(n log n)"
          language="C++"
          colorScheme="green"
        />
      </div>
      
      <UsageInstructions />
    </div>
  );
};

export default CodeDisplay;
