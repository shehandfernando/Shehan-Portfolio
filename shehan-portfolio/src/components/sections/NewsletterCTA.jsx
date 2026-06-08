export default function NewsletterCTA() {
  return (
    <section id="newsletter" className="py-32 px-8 md:px-24 bg-black/20 border-y border-accent flex flex-col items-center text-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
          Join the Network.
        </h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          I write about hardware integration, deploying AI models at the edge, and building within the Sri Lankan tech startup ecosystem. No spam, just pure signal.
        </p>
        
        {/* Live Substack Embed with Custom Dark Mode Colors */}
        <div className="max-w-md mx-auto w-full rounded-xl overflow-hidden border border-white/5 bg-background/50 backdrop-blur-md shadow-lg">
          <iframe 
            src="https://shehandfernando.substack.com/embed?background=%231a1c1a&text=%23f4f3ea" 
            width="100%" 
            height="150" 
            style={{ background: 'transparent', border: 'none' }}
            frameBorder="0" 
            scrolling="no"
            title="Shehan Fernando Substack"
          ></iframe>
        </div>
      </div>
    </section>
  );
}