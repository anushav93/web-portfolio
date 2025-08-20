export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-xl border-b border-gray-100/50 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Name Logo */}
        <a href="/" className="group transition-all duration-300">
          <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-gray-700 transition-colors duration-300">
            Anusha Ventrapragada
          </span>
        </a>
        
        {/* Get in Touch Button */}
        <a 
          href="mailto:anushaventrapragada93@gmail.com"
          className="relative text-sm md:text-base md:px-8 px-4 py-3 bg-gray-900 text-white rounded-2xl font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/25 hover:-translate-y-0.5"
        >
          <span className="relative z-10">Get in touch</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>
    </nav>
  );
}
