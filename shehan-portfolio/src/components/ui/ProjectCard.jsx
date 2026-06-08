export default function ProjectCard({ title, role, description, stack, year, githubLink }) {
  // Logic to determine if it's a repo or a live site
  const isRepo = githubLink.includes('github.com');
  const linkText = isRepo ? "View Repository ↗" : "Visit Website ↗";

  return (
    <div className="group relative p-8 md:p-12 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10 mb-8 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/[0.02] transition-colors duration-500 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 xl:gap-24">
        
        <div className="md:w-1/4 flex flex-col justify-start shrink-0">
          <span className="text-sm font-mono text-gray-500 mb-2">{year}</span>
          <span className="text-primary font-medium">{role}</span>
        </div>

        <div className="md:w-3/4 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {title}
            </h3>
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-primary font-mono text-sm border-b border-primary hover:text-gray-300 transition-colors whitespace-nowrap pb-0.5 mt-2 sm:mt-1">
                {linkText}
              </a>
            )}
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-8">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-3 mt-auto">
            {stack.map((tech, index) => (
              <span key={index} className="text-xs font-mono text-gray-400 bg-black/50 border border-white/10 px-4 py-1.5 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}