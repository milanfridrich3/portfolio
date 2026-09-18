import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import LoadingOverlay from "./components/LoadingOverlay";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import AITechSection from "./components/AITechSection";
import WorkSection from "./components/WorkSection";
import SkillsSection from "./components/SkillsSection";
import VisionSection from "./components/VisionSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-void">
      <LoadingOverlay />
      <div className="film-grain" />
      <Nav />
      <main>
        <Hero />
        <AboutSection />
        <AITechSection />
        <WorkSection />
        <SkillsSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
