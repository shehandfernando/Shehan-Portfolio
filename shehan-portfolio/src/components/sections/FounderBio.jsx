import profileImg from '../../assets/1699769069750_3fod8f_2_0.png';

export default function FounderBio() {
  return (
    <section className="py-24 px-8 md:px-24 border-b border-accent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Column: Section Title & Portrait */}
        <div className="md:w-1/3 shrink-0 flex flex-col gap-8">
          <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase">
            [ The Founder ]
          </h2>
          
          {/* Heavily cropped, grayscale portrait */}
          <div className="w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black/20">
            <img 
              src={profileImg} 
              alt="Shehan Fernando" 
              className="w-full h-full object-cover object-[center_20%] grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
            />
          </div>
        </div>

        {/* Right Column: Bio Content */}
        <div className="md:w-2/3 flex flex-col gap-8 md:pt-12">
          <p className="text-2xl md:text-3xl text-primary leading-snug font-medium max-w-3xl">
            I'm Shehan Fernando, an engineering student and developer based in Sri Lanka, currently pursuing a BSc in Computer Science.
          </p>
          
          <div className="flex flex-col gap-6 text-gray-400 text-lg leading-relaxed max-w-2xl">
            <p>
              My focus is on bridging software algorithms with physical engineering. As the Founder and Software Architect of <strong className="text-primary font-medium">νοῦς</strong>, I lead a specialized initiative dedicated to engineering high-performance web applications and scalable enterprise systems.
            </p>
            <p>
              I am also a Co-Founder and Developer for <strong className="text-primary font-medium">CrowdEye</strong>. Working alongside a talented development team, we are building a hardware-integrated bus passenger monitoring system. My specific focus within the group is handling the hardware integration and deploying our computer vision models at the edge on NVIDIA Jetson Orin.
            </p>
            <p>
              Whether I'm mapping out system architecture or working directly with edge IoT components, my goal is to build intelligent, reliable systems that solve real-world problems.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}