import { useState } from "react";
import { NAVIGATION_LINKS } from "../../constants";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 lg:top-4" role="navigation">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-xl items-center justify-between rounded-full border border-white/30 py-2 px-6 backdrop-blur-lg lg:flex">
          {/* Left-aligned Name */}
          <a href="/" className="uppercase font-bold" aria-label="Home">
            Chetan Teli
          </a>

          {/* Navigation Links on the Right */}
          <ul className="flex items-center gap-4">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  className="text-sm hover:text-stone-300"
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  tabIndex={0}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="py-2 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <a href="#" className="pl-2 uppercase" aria-label="Home">
              Chetan Teli
            </a>

            <button
              className="focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="m-2 h-6 w-5" />
              ) : (
                <RiMenu3Line className="m-2 h-6 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Items */}
          {isMobileMenuOpen && (
            <ul
              className="my-4 ml-4 flex flex-col gap-6 backdrop-blur-md"
              role="menu"
              aria-label="Mobile Navigation Links"
            >
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index} role="none">
                  <a
                    href={item.href}
                    className="block w-full text-lg"
                    onClick={(e) => handleLinkClick(e, item.href)}
                    role="menuitem"
                    tabIndex={0}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
