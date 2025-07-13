import React from 'react';
import EmailSignup from './EmailSignup';


const MainSection = ({ isLoaded }) => {
  return (
    <section
<<<<<<< HEAD
      className={`text-center pt-28 md:pt-36 px-6 pb-20 w-full mx-auto transform transition-all duration-1000 ${
=======
      className={`text-center pt-28 md:pt-36 px-6 pb-20 max-w-8xl mx-auto transform transition-all duration-1000 ${
>>>>>>> e6ead8a1926f7d667869ba2155c8ce06f27c3013
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="text-6xl md:text-8xl mb-6 animate-bounce drop-shadow-[0_0_15px_rgba(255,100,100,0.6)]">
</div>

      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
          We’re Cooking Up
        </span>
        <br />
        <span className="text-white tracking-wide">Something Special!</span>
      </h1>

      <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
        A premium spice experience is on its way. Get ready to elevate your cooking with bold, authentic flavors.
      </p>

      <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 shadow-2xl max-w-xl mx-auto mb-10 animate-fadeInUp">
        <h3 className="text-2xl font-semibold mb-1 flex justify-center items-center gap-2">
          🔥 Our Spice Store is Coming Soon! 🔥
        </h3>
        <p className="text-white/70 text-base">
          Authentic flavors. Premium quality. Delivered fresh to your kitchen.
        </p>
      </div>

      <div className="mb-16 animate-fadeInUp delay-300">
        <h4 className="text-sm uppercase text-white/70 mb-4 tracking-widest">Be the First to Know</h4>
        <EmailSignup />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto animate-fadeInUp delay-500">
        <FeatureCard icon="🌿" title="Premium Quality" text="Finest spices handpicked from trusted sources." />
        <FeatureCard icon="🚚" title="Fast Delivery" text="Doorstep delivery for guaranteed freshness." />
        <FeatureCard icon="👩‍🍳" title="Expert Recipes" text="Curated by chefs & inspired by tradition." />
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, text }) => (
  <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
    <div className="text-3xl mb-3">{icon}</div>
    <h4 className="text-white font-semibold mb-2">{title}</h4>
    <p className="text-white/70 text-sm">{text}</p>
  </div>
);

export default MainSection;
