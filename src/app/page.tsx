import AboutSection from "@/components/Home/about";
import HomeSection from "@/components/Home/home";
import WorkSection from "@/components/Home/Project";
import SkillsSection from "@/components/Home/Skills";
import TimelineSection from "@/components/Home/timeline";
import AnimatedBackground from "@/components/Background";
import PortfolioSection from "@/components/Home/Portfolio";

export default function PortfolioPage() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <AnimatedBackground />
            <HomeSection />
            <AboutSection />
            <PortfolioSection />
        </div>
    );
}