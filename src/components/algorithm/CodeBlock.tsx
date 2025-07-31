
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CodeBlockProps {
  title: string;
  code: string;
  complexity: string;
  language: string;
  colorScheme: 'orange' | 'green';
}

const CodeBlock = ({ title, code, complexity, language, colorScheme }: CodeBlockProps) => {
  const colorConfig = {
    orange: {
      complexityBg: 'bg-orange-100 dark:bg-orange-900/50',
      complexityText: 'text-orange-700 dark:text-orange-300',
      languageBg: 'bg-orange-500'
    },
    green: {
      complexityBg: 'bg-green-100 dark:bg-green-900/50',
      complexityText: 'text-green-700 dark:text-green-300',
      languageBg: 'bg-green-500'
    }
  };

  const colors = colorConfig[colorScheme];

  return (
    <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-blue-200/50 dark:border-slate-700/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-gray-800 dark:text-white flex items-center justify-between">
          <span>{title}</span>
          <span className={`text-xs ${colors.complexityBg} ${colors.complexityText} px-2 py-1 rounded`}>
            {complexity}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <pre className="bg-gray-900 p-3 sm:p-4 rounded-lg overflow-x-auto text-[10px] sm:text-xs lg:text-sm max-h-80 sm:max-h-96 overflow-y-auto">
            <code className="text-gray-100 whitespace-pre-wrap break-all">{code}</code>
          </pre>
          <div className="absolute top-2 right-2">
            <span className={`${colors.languageBg} text-white text-xs px-2 py-1 rounded`}>
              {language}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeBlock;
