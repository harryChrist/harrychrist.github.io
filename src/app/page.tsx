import AboutSection from "@/components/Home/about";
import HomeSection from "@/components/Home/home";
import WorkSection from "@/components/Home/Project";
import SkillsSection from "@/components/Home/Skills";
import TimelineSection from "@/components/Home/timeline";

export default function PortfolioPage() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <HomeSection />
            <AboutSection />
            <TimelineSection />
            <SkillsSection />
            <WorkSection />
        </div>
    );
}