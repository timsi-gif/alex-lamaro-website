import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-orange-400 to-cyan-400 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-bold text-gray-800">
              AL
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Алекс
          <span className="bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent"> Ламаро</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Творчий професіонал, який створює інноваційні рішення та втілює ідеї в життя
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Переглянути роботи
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 px-8 py-4 text-lg rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Завантажити CV
          </Button>
        </div>
        
        <div className="flex justify-center items-center gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span>alex.lamaro@email.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;