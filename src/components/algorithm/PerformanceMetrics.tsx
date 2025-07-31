
import { Clock, Zap, Target } from "lucide-react";

interface PerformanceMetricsProps {
  executionTime: number;
  iterations: number;
  colorScheme: 'orange' | 'green';
}

const PerformanceMetrics = ({ executionTime, iterations, colorScheme }: PerformanceMetricsProps) => {
  const colors = {
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      text: 'text-orange-800 dark:text-orange-300',
      value: 'text-orange-900 dark:text-orange-200',
      icon: 'text-orange-600'
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-800 dark:text-green-300',
      value: 'text-green-900 dark:text-green-200',
      icon: 'text-green-600'
    }
  };

  const scheme = colors[colorScheme];

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className={`${scheme.bg} p-3 rounded-lg`}>
        <div className="flex items-center space-x-2">
          <Clock className={`w-4 h-4 ${scheme.icon}`} />
          <span className={`text-sm ${scheme.text}`}>Waktu</span>
        </div>
        <p className={`text-lg font-semibold ${scheme.value}`}>
          {executionTime}ms
        </p>
      </div>
      <div className={`${scheme.bg} p-3 rounded-lg`}>
        <div className="flex items-center space-x-2">
          {colorScheme === 'orange' ? (
            <Zap className={`w-4 h-4 ${scheme.icon}`} />
          ) : (
            <Target className={`w-4 h-4 ${scheme.icon}`} />
          )}
          <span className={`text-sm ${scheme.text}`}>Iterasi</span>
        </div>
        <p className={`text-lg font-semibold ${scheme.value}`}>
          {iterations}
        </p>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
