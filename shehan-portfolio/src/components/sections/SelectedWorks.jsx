import ProjectCard from '../ui/ProjectCard';

const projects = [
  {
    title: "BuildLane",
    role: "Founder / Software Architect",
    year: "2026",
    description: "A specialized software development initiative focused on engineering high-performance web applications, scalable enterprise systems, and seamless user experiences.",
    stack: ["System Architecture", "Full-Stack", "Client Solutions"],
    githubLink: "https://github.com/shehandfernando/buildlane"
  },
  {
    title: "CrowdEye",
    role: "Co-Founder / Developer",
    year: "2025",
    description: "A hardware-integrated bus passenger monitoring system. Engineered the complete pipeline from computer vision models to edge deployment on the NVIDIA Jetson Orin.",
    stack: ["Python", "OpenCV", "Jetson Orin", "Hardware Integration"],
    githubLink: "https://crowdeye.lk" // Changed to web link
  },
  {
    title: "Plant Disease Detection",
    role: "Scientific Computing",
    year: "2026",
    description: "An agricultural classification tool leveraging advanced image processing. Engineered a MATLAB-based system for detecting and classifying complex plant diseases with high accuracy.",
    stack: ["MATLAB", "Image Processing", "Data Classification"],
    githubLink: "https://github.com/shehandfernando/Plant-Disease-Detection-GUI"
  },
  {
    title: "Millennium Jukebox",
    role: "Full-Stack Developer",
    year: "2025",
    description: "An interactive digital media and audio management platform. Architected the seamless integration between a modern responsive frontend UI and a robust backend database.",
    stack: ["React", "Spring Boot", "UI/UX"],
    githubLink: "https://github.com/shehandfernando/Millennium-Jukebox"
  },
  {
    title: "ShelfSync",
    role: "Full-Stack Developer",
    year: "2026",
    description: "A highly scalable inventory management system demonstrating robust backend architecture and seamless relational database integration.",
    stack: ["React", "Spring Boot", "MySQL"],
    githubLink: "https://github.com/shehandfernando/ShelfSync"
  }
];

export default function SelectedWorks() {
  return (
    <section className="py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase mb-16">
          [ Selected Works ]
        </h2>
        <div className="flex flex-col border-b border-accent">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}