export default function Footer() {
  return (
    <footer className="py-16 px-8 md:px-24 border-t border-accent bg-black/20">
      {/* Container: Centered on mobile, spread apart on desktop */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-center md:items-start text-center md:text-left">
        
        {/* Branding & Description */}
        <div className="flex flex-col gap-4 max-w-xs">
          <h2 className="text-xl font-bold text-primary">Shehan Fernando</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Software Architect & AI Engineer. Building the future of intelligent systems from Sri Lanka.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h2 className="text-xl font-bold text-primary">Contact</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 text-sm">
            <a href="https://www.linkedin.com/in/shehan-dilruksha-fernando" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/shehandfernando" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.instagram.com/_shehanfernando" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">Instagram</a>
            <a href="https://www.facebook.com/share/1EaQyweYMt/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">Facebook</a>
            <a href="https://x.com/_shehandfernando" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">X</a>
            <a href="mailto:iamshehanfdo@gmail.com" className="text-gray-400 hover:text-primary transition-colors">Gmail</a>
          </div>
        </div>
      </div>
      
      {/* Copyright & Branding Signature */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center flex flex-col gap-2">
        <p className="text-gray-600 text-sm">
          © 2026 Shehan Fernando. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 font-mono tracking-wide">
          Designed and Engineered by <a href="https://nousestd2026.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-white transition-colors">νοῦς</a>
        </p>
      </div>
    </footer>
  );
}