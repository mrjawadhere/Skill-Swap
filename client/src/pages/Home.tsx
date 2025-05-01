import HeroSection from "@/components/home/HeroSection";
import EmpoweringSection from "@/components/home/EmpoweringSection";
import MissionVisionSection from "@/components/home/MissionVisionSection";
import OfferingsSection from "@/components/home/OfferingsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturedClassesSection from "@/components/home/FeaturedClassesSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import { motion } from "framer-motion";

export default function Home() {
  // Page transition animation
  const pageAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="pt-20" // Add padding to account for fixed navbar
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
    >
      <HeroSection />
      <EmpoweringSection />
      <MissionVisionSection />
      <OfferingsSection />
      <HowItWorksSection />
      <FeaturedClassesSection />
      <NewsletterSection />
    </motion.div>
  );
}
