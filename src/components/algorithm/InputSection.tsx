
import { Target, Shuffle, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface InputSectionProps {
  inputArray: string;
  target: string;
  isRunning: boolean;
  onInputArrayChange: (value: string) => void;
  onTargetChange: (value: string) => void;
  onRunAlgorithms: () => void;
  onReset: () => void;
  onGenerateRandom: () => void;
}

const InputSection = ({
  inputArray,
  target,
  isRunning,
  onInputArrayChange,
  onTargetChange,
  onRunAlgorithms,
  onReset,
  onGenerateRandom
}: InputSectionProps) => {
  return (
    <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-blue-200/50 dark:border-slate-700/50 mb-8 shadow-lg">
      <CardHeader>
        <CardTitle className="text-gray-800 dark:text-white flex items-center space-x-2">
          <Target className="w-5 h-5 text-blue-500" />
          <span>Konfigurasi Simulasi Algoritma</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="array" className="text-gray-600 dark:text-gray-300">
              Dataset Array (pisahkan dengan koma)
            </Label>
            <Input
              id="array"
              value={inputArray}
              onChange={(e) => onInputArrayChange(e.target.value)}
              placeholder="15, 7, 9, 4, 12, 6, 18"
              className="bg-white/50 dark:bg-slate-700/50 border-blue-200 dark:border-slate-600 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Masukkan angka yang akan digunakan untuk simulasi kedua algoritma
            </p>
          </div>
          <div>
            <Label htmlFor="target" className="text-gray-600 dark:text-gray-300">
              Target Nilai
            </Label>
            <Input
              id="target"
              value={target}
              onChange={(e) => onTargetChange(e.target.value)}
              placeholder="25"
              className="bg-white/50 dark:bg-slate-700/50 border-blue-200 dark:border-slate-600 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Nilai yang ingin dicapai oleh kedua algoritma
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={onRunAlgorithms}
            disabled={isRunning}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isRunning ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Memproses Simulasi...
              </>
            ) : (
              <>
                <Play className="mr-2 w-4 h-4" />
                Bandingkan Algoritma
              </>
            )}
          </Button>
          
          <Button
            onClick={onGenerateRandom}
            variant="outline"
            className="border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/50 dark:text-green-400 dark:border-green-400"
          >
            <Shuffle className="mr-2 w-4 h-4" />
            Generate Random Input
          </Button>
          
          <Button
            onClick={onReset}
            variant="outline"
            className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/50 dark:text-blue-400 dark:border-blue-400"
          >
            <RotateCcw className="mr-2 w-4 h-4" />
            Reset
          </Button>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">
            Tentang Simulasi:
          </h4>
          <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
            <li>• <strong>Brute Force:</strong> Mencoba semua kombinasi subset untuk mencapai target (O(2ⁿ))</li>
            <li>• <strong>Greedy:</strong> Memilih elemen terbesar yang tidak melebihi sisa target (O(n log n))</li>
            <li>• Bandingkan efisiensi, akurasi, dan kompleksitas kedua pendekatan</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default InputSection;
