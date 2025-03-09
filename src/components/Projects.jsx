import { PROJECTS } from "../../constants"; // Ensure PROJECTS array contains { id, link, imgSrc, title, description, techStack }
import { useRef, useEffect } from "react"; // Ensure useEffect is imported
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const Projects = () => {
  const projectsRef = useRef(null); // Ref to the section

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, projectsRef);

    // Cleanup function to revert the GSAP context when the component unmounts
    return () => ctx.revert();
  }, []); // Empty dependency array to run on mount only

  return (
    <section className="pt-16" id="projects" ref={projectsRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >
              <div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20 shadow-md">
                {/* Project Image with a link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-60 w-full object-cover"
                  />
                </a>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <strong>Tech Stack:</strong>
                    <ul className="mt-2">
                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className="mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
