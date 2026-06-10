import { motion } from 'framer-motion';

export default function WorkExperience() {
  const experiences = [
    {
      company: "νοῦς",
      role: "Founder / Software Architect",
      period: "2026 - Present",
      description: "Leading a specialized software development initiative. Directing system architecture, full-stack development, and delivering high-performance enterprise web solutions."
    },
    {
      company: "Codezela",
      role: "AI / ML Engineering Intern",
      period: "2026 - Present",
      description: "Contributing to the development and optimization of machine learning models. Focusing on data processing pipelines, algorithm refinement, and integrating AI solutions into real-world applications."
    },
    {
      company: "CrowdEye",
      role: "Co-Founder / Developer",
      period: "Sep 2025 - Present",
      description: "Collaborating with a dedicated development team to build a hardware-integrated bus passenger monitoring system. Primarily responsible for IoT architecture, hardware integration, and managing edge deployment on NVIDIA Jetson Orin."
    },
    {
      company: "Independent Developer",
      role: "Full-Stack & Edge AI",
      period: "2023 - 2026",
      description: "Developed and deployed various standalone systems including agricultural classification tools (MATLAB), full-stack inventory management systems (React/Spring Boot), and gaming performance utilities."
    }
  ];

  return (
    <section className="py-24 px-8 md:px-24 border-b border-accent overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Column: Sticky Section Title */}
        <div className="md:w-1/4 shrink-0">
          <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase sticky top-32">
            [ Experience ]
          </h2>
        </div>

        {/* Right Column: Interactive Node Timeline */}
        <div className="md:w-3/4 relative">
          
          {/* Faded Background Line spanning the whole height */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-0 w-[2px] bg-white/5"></div>

          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative pl-12 md:pl-16 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-20% 0px" }}
                variants={{
                  hidden: { opacity: 0.4, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                
                {/* The Node */}
                <motion.div 
                  className="absolute left-0 md:left-1 top-2.5 w-4 h-4 rounded-full border-2 bg-background z-10"
                  variants={{
                    hidden: { borderColor: '#2a2c2a', scale: 0.8 },
                    visible: { borderColor: '#f4f3ea', backgroundColor: '#f4f3ea', scale: 1, transition: { duration: 0.4, delay: 0.1 } }
                  }}
                ></motion.div>
                
                {/* The Connecting Line Glow */}
                {index !== experiences.length - 1 && (
                  <motion.div 
                    className="absolute left-[7px] md:left-[11px] top-6 w-[2px] bg-gradient-to-b from-primary/50 to-transparent z-0"
                    variants={{
                      hidden: { height: 0, opacity: 0 },
                      visible: { height: "100%", opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
                    }}
                  ></motion.div>
                )}

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <span className="text-sm font-mono text-gray-500 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap w-fit md:w-auto">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-primary font-medium text-lg mb-2">
                    {exp.role}
                  </h4>
                  
                  <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}