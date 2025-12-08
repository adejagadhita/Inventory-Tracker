  import React from 'react';
  import { Link } from 'react-router-dom';
  import { CheckCircle2 } from 'lucide-react';

  const LandingPage = () => {
    return (
      <div className="min-h-screen bg-brand-dark text-brand-text font-sans">
        
        {/* --- NAVBAR --- */}
        <nav className="bg-brand-dark fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto z-50">
          {/* Logo Kecil */}
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-sm">
              <img className="w-full h-full" src="/logo.svg" alt="logo" />
            </div>
          </div>

          {/* Links Tengah */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#Hero" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>

          {/* Tombol Kanan */}
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="px-6 py-2 text-sm font-medium text-white border border-brand-accent rounded hover:bg-brand-accent/20 transition-all"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="px-6 py-2 text-sm font-medium text-white bg-brand-accent rounded hover:bg-opacity-90 transition-all shadow-lg shadow-brand-accent/20"
            >
              Register
            </Link>
          </div>
        </nav>

        {/* --- MAIN CONTENT --- */}
        <main className="max-w-5xl mx-auto px-8 pt-32 pb-20 space-y-32">
          
          {/* 1. HERO SECTION */}
          <div id="Hero" className="scroll-mt-24 flex flex-col md:flex-row items-center gap-12">
            <div className="bg-[#0f1b1d] p-2 rounded-lg shadow-2xl border border-gray-800 flex flex-col items-center justify-center w-64 h-64 shrink-0">
              <div className="w-full h-full flex items-center justify-center rounded-sm mb-4">
                <img className="w-full h-full" src="/logo.svg" alt="logo" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Manage your <br />
                inventory easily
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                A simple and powerful inventory tracker to help you manage stock effortlessly
              </p>
            </div>
          </div>

          {/* 2. WHAT IS THIS APP? */}
          <section id="about" className="scroll-mt-24 space-y-4">
            <h2 className="text-3xl font-bold">
              <span className="text-brand-accent text-5xl">What</span> <br />
              is This App?
            </h2>
            <p className="text-gray-400 leading-relaxed py-2">
              A simple and efficient inventory management app designed to help users track stock, manage products, and monitor business activity with ease.
            </p>
          </section>

          {/* 3. WHY THIS APP EXISTS? */}
          <section className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-bold">
              <span className="text-brand-accent text-5xl">Why</span> <br />
              This App Exists
            </h2>
            
            <div className="grid gap-4">
              {[
                "Organize stock data effortlessly",
                "Reduce recording errors",
                "Monitor stock changes in real time",
                "Store information safely and securely"
              ].map((text, index) => (
                <div key={index} 
                    className="flex items-center gap-4 bg-[#0e2224] p-4 rounded-md border border-gray-800 hover:border-brand-accent transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-medium text-gray-200">{text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 4. WHO THIS APP IS FOR? */}
          <section className="scroll-mt-24 space-y-4 pb-20">
            <h2 className="text-3xl font-bold">
              <span className="text-brand-accent text-5xl">Who</span> <br />
              This App is For
            </h2>
            <p className="text-gray-400 leading-relaxed">
              This app is designed for anyone who needs a simple and efficient way to manage their items. It's perfect for small businesses, personal storage, home inventory, and individuals who want to keep track of their belongings easily and clearly.
            </p>
          </section>

        </main>
      </div>
    );
  };

  export default LandingPage;