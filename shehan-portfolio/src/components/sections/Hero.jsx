import { motion } from 'framer-motion';

export default function Hero() {
  return (
    // Note: We leave this section transparent so the Global Starfield can show through
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* The Ambient Ivory Glow to highlight the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#f4f3ea] opacity-[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-24 flex flex-col items-start w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.1]">
            Engineering <br/> Intelligent Systems.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl font-light">
            AI Builder & Hardware Integration Specialist. Bridging software algorithms and physical engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-8">
            <a href="#works" className="group relative px-8 py-4 bg-[#f4f3ea] text-background font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(244,243,234,0.1)]">
              <span className="relative z-10 flex items-center gap-2">
                View Selected Works <span className="group-hover:translate-x-1 transition-transform">↘</span>
              </span>
            </a>
            
            {/* Updated Newsletter Link */}
            <a 
              href="https://substack.com/@shehandfernando" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#f4f3ea] transition-colors font-medium border-b border-transparent hover:border-[#f4f3ea] pb-1"
            >
              Read the Newsletter
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}