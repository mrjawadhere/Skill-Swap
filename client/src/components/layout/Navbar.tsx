import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore Skills" },
    { href: "/my-skills", label: "My Skills" },
    { href: "/workshops", label: "Workshops" },
    { href: "/community", label: "Community" }
  ];

  // Animation variants
  const logoAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const navItemAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      color: "var(--accent)",
      transition: { duration: 0.2 }
    }
  };

  const buttonAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.5,
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const mobileMenuAnimation = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.header 
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-white py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          variants={logoAnimation}
          initial="hidden"
          animate="visible"
        >
          <Link href="/" className="flex items-center text-slate-900">
            <span className="text-xl font-bold font-poppins">
              <span className="relative inline-block">
                SKILL
                <motion.span 
                  className="absolute -bottom-1 left-0 h-[2px] bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
              <motion.span 
                className="text-accent"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                SWAP
              </motion.span>
            </span>
          </Link>
        </motion.div>
        
        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-8 relative">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              variants={navItemAnimation}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onHoverStart={() => setHoveredLink(link.href)}
              onHoverEnd={() => setHoveredLink(null)}
            >
              <Link 
                href={link.href} 
                className={`font-medium transition-colors relative ${
                  location === link.href ? "text-accent" : "text-slate-900"
                }`}
              >
                {link.label}
                
                {/* Active page indicator */}
                {location === link.href && (
                  <motion.div 
                    className="absolute bottom-[-5px] left-0 h-[2px] bg-accent"
                    layoutId="activeNavIndicator"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Hover indicator */}
                {hoveredLink === link.href && location !== link.href && (
                  <motion.div 
                    className="absolute bottom-[-5px] left-0 h-[2px] bg-accent/50"
                    layoutId="hoverNavIndicator"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>
        
        {/* Sign Up Button */}
        <Link href="/signup">
          <motion.div
            variants={buttonAnimation}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button 
              variant="outline" 
              className="hidden md:inline-flex border-slate-900 hover:bg-accent hover:text-white hover:border-accent transition-all relative group overflow-hidden"
            >
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0 bg-accent transition-all duration-300 group-hover:h-full -z-10"
                initial={{ height: 0 }}
                whileHover={{ height: "100%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Sign Up</span>
            </Button>
          </motion.div>
        </Link>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-slate-900 focus:outline-none" 
          aria-label="Toggle menu"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      
      {/* Mobile Navigation with AnimatePresence for smooth exit */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            variants={mobileMenuAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-white px-4 pt-2 pb-4 space-y-3 shadow-md">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    className={`block font-medium py-2 transition-colors ${
                      location === link.href ? "text-accent" : "hover:text-accent"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link 
                  href="/signup" 
                  className="block font-medium py-2 text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll progress bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-accent"
        style={{ width: scrolled ? "100%" : "0%" }}
        animate={{ 
          width: scrolled ? "100%" : "0%",
          transition: { duration: 0.3 }
        }}
      />
    </motion.header>
  );
}
