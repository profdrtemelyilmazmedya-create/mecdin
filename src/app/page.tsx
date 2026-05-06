import { ContactSection } from "@/components/ContactSection";
import { CorporateSection } from "@/components/CorporateSection";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />
      <Hero />
      <CorporateSection />
      <ProjectsSection />
      <FeaturedProject />
      <ContactSection />
      <Footer />
    </main>
  );
}
