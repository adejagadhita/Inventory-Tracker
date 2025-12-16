import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '../assets/Screenshot_2025-12-02_143819-removebg-preview copy.png'

const LandingPage = () => {
  return (
   
    <div className="min-h-screen bg-brand-dark text-brand-text font-sans flex flex-col overflow-x-hidden">
    
      <nav className="bg-brand-dark fixed top-0 left-0 right-0 flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto z-50">
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-sm">
            <img className="w-full h-full" src={Logo} alt="logo" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#Hero" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
        
          <Link 
            to="/login" 
            className="px-3 py-1.5 md:px-6 md:py-2 text-xs md:text-sm font-medium text-white border border-brand-accent rounded hover:bg-brand-accent/20 transition-all"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="px-3 py-1.5 md:px-6 md:py-2 text-xs md:text-sm font-medium text-white bg-brand-accent rounded hover:bg-opacity-90 transition-all shadow-lg shadow-brand-accent/20"
          >
            Register
          </Link>
        </div>
      </nav>

    
      <main className="flex-grow max-w-5xl mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-20 space-y-20 md:space-y-32">
        
        
        <div id="Hero" className="scroll-mt-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="bg-[#0f1b1d] p-2 rounded-lg shadow-2xl border border-gray-800 flex flex-col items-center justify-center w-48 h-48 md:w-64 md:h-64 shrink-0">
            <div className="w-full h-full flex items-center justify-center rounded-sm mb-4">
              <img className="w-full h-full" src={Logo} alt="logo" />
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Manage your <br />
              inventory easily
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              A simple and powerful inventory tracker to help you manage stock effortlessly
            </p>
          </div>
        </div>

       
        <section id="about" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-brand-accent text-4xl md:text-5xl">What</span> <br />
            is This App?
          </h2>
          <p className="text-gray-400 leading-relaxed py-2 text-sm md:text-base">
            A simple and efficient inventory management app designed to help users track stock, manage products, and monitor business activity with ease.
          </p>
        </section>

        
        <section className="scroll-mt-24 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-brand-accent text-4xl md:text-5xl">Why</span> <br />
            This App Exists
          </h2>
          
          <div className="grid gap-3 md:gap-4">
            {[
              "Organize stock data effortlessly",
              "Reduce recording errors",
              "Monitor stock changes in real time",
              "Store information safely and securely"
            ].map((text, index) => (
              <div key={index} 
                  className="flex items-center gap-3 md:gap-4 bg-[#0e2224] p-3 md:p-4 rounded-md border border-gray-800 hover:border-brand-accent transition-colors group">
                <div className="shrink-0 w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <CheckCircle2 size={18} />
                </div>
               
                <span className="font-medium text-gray-200 text-sm md:text-base">{text}</span>
              </div>
            ))}
          </div>
        </section>

        
        <section className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-brand-accent text-4xl md:text-5xl">Who</span> <br />
            This App is For
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            This app is designed for anyone who needs a simple and efficient way to manage their items. It's perfect for small businesses, personal storage, home inventory, and individuals who want to keep track of their belongings easily and clearly.
          </p>
        </section>

      </main>

      
      <footer className="bg-[#021a15] text-white pt-12 md:pt-16 pb-8 rounded-t-[2rem] md:rounded-t-[3rem] mt-auto relative z-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          
          <div className="flex flex-col items-center mb-8 md:mb-10">
            <div className="w-14 h-14 md:w-16 md:h-16 mb-2 flex items-center justify-center">
               <img className="w-full h-full object-contain" src={Logo} alt="Inventory Logo" />
            </div>
            <h3 className="text-lg font-bold tracking-widest uppercase">Inventory</h3>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 w-full text-sm font-medium mb-8 md:mb-10">
            <div className="flex items-center gap-3">
              <MapPin className="text-white" size={18} />
              <span>Denpasar, Bali</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-white" size={18} />
              <span>+62 812 345 678</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-white" size={18} />
              <span>Email</span>
            </div>
          </div>

          <div className="w-full h-px bg-gray-700/50 mb-6 md:mb-8"></div>

          <div className="text-center text-xs md:text-sm font-medium text-gray-300">
           © 2025 Inventory Tracker
          </div>

        </div>
      </footer>

    </div>
  );
};

export default LandingPage;