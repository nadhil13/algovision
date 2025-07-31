import { useEffect, useState } from "react";
import { ExternalLink, Play, FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import AnimatedBackground from "@/components/AnimatedBackground";

const Presentation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const presentationUrl = "https://www.canva.com/design/your-presentation-link"; // Replace with actual Canva link

  const presentationNotes = [
    {
      slide: 1,
      title: "Pengenalan Algoritma",
      notes: "Slide pembuka yang memperkenalkan konsep dasar algoritma Brute Force dan Greedy. Jelaskan definisi masing-masing algoritma dan kapan digunakan."
    },
    {
      slide: 2,
      title: "Algoritma Brute Force",
      notes: "Menjelaskan karakteristik algoritma Brute Force: mencoba semua kemungkinan solusi, kompleksitas waktu yang tinggi, namun selalu memberikan solusi optimal."
    },
    {
      slide: 3,
      title: "Algoritma Greedy",
      notes: "Menjelaskan karakteristik algoritma Greedy: memilih solusi terbaik lokal pada setiap langkah, kompleksitas waktu yang efisien, namun tidak selalu optimal."
    },
    {
      slide: 4,
      title: "Analisis Kompleksitas",
      notes: "Perbandingan kompleksitas waktu dan ruang. Brute Force: O(2^n), Greedy: O(n log n). Diskusikan trade-off antara waktu eksekusi dan kualitas solusi."
    },
    {
      slide: 5,
      title: "Implementasi C++",
      notes: "Contoh kode implementasi kedua algoritma dalam bahasa C++. Tunjukkan perbedaan struktur kode dan pendekatan pemecahan masalah."
    },
    {
      slide: 6,
      title: "Studi Kasus",
      notes: "Analisis performa pada dataset nyata. Tunjukkan grafik perbandingan waktu eksekusi dan akurasi hasil untuk berbagai ukuran input."
    },
    {
      slide: 7,
      title: "Kesimpulan",
      notes: "Rangkuman hasil analisis dan rekomendasi penggunaan. Brute Force untuk masalah kecil yang membutuhkan solusi optimal, Greedy untuk masalah besar yang membutuhkan solusi cepat."
    }
  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Presentasi
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Slide presentasi komprehensif tentang analisis dan implementasi algoritma Brute Force vs Greedy
          </p>
        </div>

        {/* Main Presentation Card */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
            <CardContent className="p-0">
              {/* Preview Image */}
              <div className="relative group">
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 transition-all duration-300">
                      <Play className="w-12 h-12 text-white ml-1" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Analisis Algoritma</h3>
                    <p className="text-gray-300">Brute Force vs Greedy Algorithm</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                    asChild
                  >
                    <a href={presentationUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="mr-2 w-5 h-5" />
                      Lihat Preview
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Materi Presentasi</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Pengenalan Algoritma Brute Force dan Greedy</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Analisis Kompleksitas Waktu dan Ruang</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Implementasi dalam Bahasa C++</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Studi Kasus dan Perbandingan Performance</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Kesimpulan dan Rekomendasi Penggunaan</span>
                      </li>
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Detail Presentasi</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-purple-400" />
                        <div>
                          <p className="text-white font-medium">Format</p>
                          <p className="text-gray-400 text-sm">Canva Presentation</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Play className="w-5 h-5 text-purple-400" />
                        <div>
                          <p className="text-white font-medium">Durasi</p>
                          <p className="text-gray-400 text-sm">~15 menit</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Download className="w-5 h-5 text-purple-400" />
                        <div>
                          <p className="text-white font-medium">Ukuran</p>
                          <p className="text-gray-400 text-sm">Online Access</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-white/10">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex-1"
                    asChild
                  >
                    <a href={presentationUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 w-5 h-5" />
                      Buka Presentasi di Canva
                    </a>
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white flex-1"
                      >
                        <FileText className="mr-2 w-5 h-5" />
                        Lihat Catatan
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Catatan Presentasi
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="h-[60vh] pr-4">
                        <div className="space-y-6">
                          {presentationNotes.map((note) => (
                            <div key={note.slide} className="border-l-4 border-purple-400 pl-4 pb-4">
                              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                Slide {note.slide}: {note.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {note.notes}
                              </p>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Resources */}
        <div className={`mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Materi Pendukung
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Slide Notes</h3>
                <p className="text-gray-400 text-sm">Catatan lengkap untuk setiap slide presentasi</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Demo Video</h3>
                <p className="text-gray-400 text-sm">Rekaman demo implementasi algoritma</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Source Code</h3>
                <p className="text-gray-400 text-sm">Kode sumber C++ lengkap dengan dokumentasi</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
