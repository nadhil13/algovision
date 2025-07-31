
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Code, Users, Presentation, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Users,
      title: "Profil Kelompok",
      description: "Kenali tim developer yang mengerjakan proyek ini",
      href: "/profile",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Presentation,
      title: "Presentasi",
      description: "Lihat slide presentasi dan materi lengkap",
      href: "/presentation",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Implementasi Algoritma",
      description: "Simulasi interaktif Brute Force vs Greedy",
      href: "/algorithm",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <Sparkles className="relative w-16 h-16 text-purple-400 mx-auto" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Algorithm
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Analysis
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Eksplorasi mendalam tentang implementasi dan perbandingan algoritma 
            <span className="text-purple-400 font-semibold"> Brute Force </span>
            dan 
            <span className="text-pink-400 font-semibold"> Greedy </span>
            dengan visualisasi interaktif yang menawan
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/algorithm">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Mulai Eksplorasi
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Lihat Tim
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.title}
                to={feature.href}
                className={`group transition-all duration-500 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                    <span className="text-sm font-medium">Explore</span>
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-cyan-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>
    </div>
  );
};

export default Index;
