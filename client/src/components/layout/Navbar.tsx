import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b border-gray-100 py-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center text-slate-900">
          <span className="text-xl font-bold font-poppins">
            SKILL<span className="text-accent">SWAP</span>
          </span>
        </Link>
        
        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/explore" className="font-medium hover:text-accent transition-colors">
            Explore Skills
          </Link>
          <Link href="/my-skills" className="font-medium hover:text-accent transition-colors">
            My Skills
          </Link>
          <Link href="/workshops" className="font-medium hover:text-accent transition-colors">
            Workshops
          </Link>
          <Link href="/community" className="font-medium hover:text-accent transition-colors">
            Community
          </Link>
        </nav>
        
        {/* Sign Up Button */}
        <Link href="/signup">
          <Button variant="outline" className="hidden md:inline-flex border-slate-900 hover:bg-accent hover:text-white hover:border-accent transition-all">
            Sign Up
          </Button>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-900 focus:outline-none" 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link href="/" className="block font-medium py-2 hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/explore" className="block font-medium py-2 hover:text-accent transition-colors">
              Explore Skills
            </Link>
            <Link href="/my-skills" className="block font-medium py-2 hover:text-accent transition-colors">
              My Skills
            </Link>
            <Link href="/workshops" className="block font-medium py-2 hover:text-accent transition-colors">
              Workshops
            </Link>
            <Link href="/community" className="block font-medium py-2 hover:text-accent transition-colors">
              Community
            </Link>
            <Link href="/signup" className="block font-medium py-2 text-accent">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
