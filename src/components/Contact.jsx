import { RiLinkedinBoxFill, RiGithubFill, RiTwitterFill } from "@remixicon/react"; // Ensure icons are imported correctly
import { useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null); // Ref to the section

  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>
        
        <p className="mb-4 text-lg lg:text-xl">
          Feel free to reach out to me via email:{" "}
          <a 
            href="mailto:david@example.com" 
            className="border-b">
            chetankteli@gmail.com
          </a>
        </p>

        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/chetan-teli/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="visit my LinkedIn profile">
            <RiLinkedinBoxFill className="text-3xl" />
          </a>

          <a
            href="https://github.com/chetan-04"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="visit my GitHub profile">
            <RiGithubFill className="text-3xl" />
          </a>

          {/* <a
            href="https://twitter.com/davidstones"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="visit my Twitter profile">
            <RiTwitterFill className="text-3xl" />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
