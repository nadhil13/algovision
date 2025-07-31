
interface InputInfoProps {
  array: number[];
  target: number;
  totalCombinations: number;
}

const InputInfo = ({ array, target, totalCombinations }: InputInfoProps) => {
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
        📝 Kode di bawah menggunakan input Anda:
      </h3>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        Array: <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">[{array.join(', ')}]</code> | 
        Target: <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">{target}</code> | 
        Total kombinasi: <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">2^{array.length} = {totalCombinations}</code>
      </p>
    </div>
  );
};

export default InputInfo;
