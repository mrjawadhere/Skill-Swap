import HeroSection from "@/components/home/HeroSection";
import EmpoweringSection from "@/components/home/EmpoweringSection";
import MissionVisionSection from "@/components/home/MissionVisionSection";
import OfferingsSection from "@/components/home/OfferingsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturedClassesSection from "@/components/home/FeaturedClassesSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EmpoweringSection />
      <MissionVisionSection />
      <OfferingsSection />
      <HowItWorksSection />
      <FeaturedClassesSection />
      <NewsletterSection />
    </div>
  );
}
