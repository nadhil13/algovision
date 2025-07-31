
const UsageInstructions = () => {
  return (
    <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
        💡 Cara Menggunakan Kode:
      </h4>
      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
        <p>1. Copy kode di atas ke file C++ (misalnya: <code>algorithm.cpp</code>)</p>
        <p>2. Compile dengan: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">g++ -o algorithm algorithm.cpp</code></p>
        <p>3. Jalankan dengan: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">./algorithm</code></p>
        <p>4. Kode akan menggunakan array dan target yang sama dengan input simulasi Anda</p>
      </div>
    </div>
  );
};

export default UsageInstructions;
