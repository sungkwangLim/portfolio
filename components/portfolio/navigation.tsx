"use client"

import { useEffect, useState } from "react"

const navItems = [
  { label: "Skills", href: "#tech" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#career" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 transition-all duration-500 rounded-full border border-white/10 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-[8px] shadow-lg"
          : "bg-background/40 backdrop-blur-[4px]"
      }`}
    >
      <nav className="px-6 h-[74px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-foreground font-bold text-lg hover:text-primary transition-colors duration-300"
        >
          <span className="text-primary">L</span>
          SK
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-300 relative group uppercase tracking-wider"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="px-6 pb-6 space-y-4 bg-background/95 backdrop-blur-lg">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block text-muted-foreground hover:text-foreground text-base font-medium transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
