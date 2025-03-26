import AboutSection from "@/components/Home/about";
import HomeSection from "@/components/Home/home";
import TimelineSection from "@/components/Home/timeline";
import AnimatedBackground from "@/components/Background";
import PortfolioSection from "@/components/Home/Portfolio";
import ContactSection from "@/components/Contact";

export default function PortfolioPage() {
    return (
        <div className="bg-[#030014]">
            <HomeSection />
            <AboutSection />
            <PortfolioSection />
            <TimelineSection />
            <ContactSection />
            <footer>
                <center>
                    <hr className="my-3 text-center border-gray-400 opacity-15 sm:mx-auto lg:my-6" />
                    <span className="block pb-4 text-sm text-center text-gray-400">
                        © 2025{" "}
                        <a href="https://flowbite.com/" className="hover:underline">
                            Henrique Christ
                        </a>
                        . All Rights Reserved.
                    </span>
                </center>
            </footer>
        </div>
    );
}