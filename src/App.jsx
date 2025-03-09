import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Education from "./components/Education";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased relative">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url("/src/assets/noise.jpg")` }}
      ></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skill />
        <Experience />
        <Education />
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </main>
  );
};

export default App;
