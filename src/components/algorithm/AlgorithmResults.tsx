
import { Results } from "@/utils/algorithmUtils";
import ResultCard from "./ResultCard";

interface AlgorithmResultsProps {
  results: Results;
}

const AlgorithmResults = ({ results }: AlgorithmResultsProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <ResultCard results={results} algorithmType="bruteForce" delay={0.2} />
      <ResultCard results={results} algorithmType="greedy" delay={0.4} />
    </div>
  );
};

export default AlgorithmResults;
