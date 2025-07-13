

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-sm border-b border-white/10 fixed top-0 left-0 w-full
     z-50">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-white">DadiFoods</h1>
      </div>
      {/* <nav className="hidden md:flex gap-6 text-sm font-medium text-white/90">
        <a href="#" className="hover:text-orange-400 transition">Home</a>
        <a href="#" className="hover:text-orange-400 transition">About</a>
        <a href="#" className="hover:text-orange-400 transition">Spices</a>
        <a href="#" className="hover:text-orange-400 transition">Recipes</a>
        <a href="#" className="hover:text-orange-400 transition">Contact</a>
      </nav> */}
    </header>
  );
};

export default Header;
