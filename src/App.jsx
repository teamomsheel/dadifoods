import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainContent';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
<div className="relative min-h-screen w-full overflow-hidden text-white font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Spices background"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.5)_0%,_rgba(0,0,0,0.9)_100%)]" />
      </div>

      <Header />
<main className="relative z-10 pt-28 md:pt-36 px-4 md:px-6 pb-20">
        <MainSection isLoaded={isLoaded} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
