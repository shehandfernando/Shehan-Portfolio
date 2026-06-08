export default function TechStack() {
  const stack = [
    {
      category: "Hardware & Edge",
      skills: ["NVIDIA Jetson Orin", "Raspberry Pi", "IoT Architecture", "Hardware Integration"]
    },
    {
      category: "AI & Vision",
      skills: ["Python", "OpenCV", "MATLAB", "Scientific Computing", "MLOps"]
    },
    {
      category: "Full-Stack",
      skills: ["React", "Spring Boot", "Java", "C#", "MySQL"]
    }
  ];

  return (
    <section className="py-24 px-8 md:px-24 border-b border-accent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono text-gray-500 tracking-widest uppercase mb-16">
          [ The Engine ]
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {stack.map((group, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-xl font-semibold text-primary mb-6 pb-4 border-b border-accent">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-4">
                {group.skills.map((skill, i) => (
                  <li key={i} className="text-gray-400 font-mono text-sm hover:text-primary transition-colors cursor-default">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}