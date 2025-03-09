import { useEffect, useRef } from "react";
import { PROFILE } from "../../constants"; // Ensure PROFILE object has name, role, subheading
import { RiArrowRightUpLine } from "@remixicon/react";
import david from "../assets/Chetan.jpg"; // Ensure the path is correct
import { gsap } from "gsap"
const Hero = () => {
  const heroRef = useRef(null); // Ref can be useful for future scroll behavior
  
  useEffect (() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 },
    });

      tl.from(".hero-title", {
        opacity: 0,
        y: -50,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
      })
      .from(
        ".hero-subheading", {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 0.8,
        },
        "-=0.4",
      )
      .from(
        ".hero-text", {
          opacity: 0,
          y: 30,
          duration: 0.7,
        },
        "-=0.4",
      )
      .from(
        ".hero-btn", {
          opacity: 0,
          scale: 0.9,
          duration: 0.7,
        },
        "-=0.3",
      )
      .from(
        ".Hero-img", {
          opacity: 0,
          y: 100,
          scale: 0.9,
          duration: 0.8,
        },
        "-=0.5",
      );
    }, heroRef)

    return () => ctx.revert()}, [])


  return (
    <div ref={heroRef}>
      <section
        className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6"
      >
        {/* Header Section */}
        <div className="mt-8 lg:mt-20 text-center">
          <h1 className="hero-title text-4xl uppercase lg:text-7xl">
            {PROFILE.name}
          </h1>
          <h2
            className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 
            bg-clip-text text-2xl tracking-tighter text-transparent lg:text-4xl"
          >
            {PROFILE.role}
          </h2>
        </div>

        {/* Subheading / Introduction */}
        <p
          className="hero-text max-w-2xl p-4 text-center text-xl tracking-tighter lg:text-2xl"
        >
          {PROFILE.subheading}
        </p>

        {/* Download Resume Button */}
        <a
          href="/public/c.resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="hero-btn mb-6 flex items-center gap-2 rounded-full border 
          border-pink-200/50 px-4 py-2 text-lg font-medium tracking-tighter hover:bg-pink-100"
        >
          <span>Download Resume</span>
          <RiArrowRightUpLine size={20} />
        </a>

        {/* Profile Image */}
        <img src={david} alt={PROFILE.name} width={400} height="400"
        className="hero-img rounded-3xl border border-purple=300/20 p-1"/>
          
      </section>

      {/* Additional Hero Section Label */}
      {/* <div className="text-center text-sm text-gray-500 mt-4">My section</div> */}
    </div>
  );
};

export default Hero;
