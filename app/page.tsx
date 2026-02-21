import BlogPreview from "@/components/blog-preview";
import Features from "@/components/features";
import Hero from "@/components/hero";
import ContactSection from "@/components/cta-contact";
import PortfolioPreview from "@/components/portfolio-preview";
import CVFeature from "@/components/cv-feature";
import GitHubProjects from "@/components/github-projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <CVFeature />
      <PortfolioPreview />
      <GitHubProjects />
      <Features />
      <BlogPreview />
      <ContactSection />
    </main>
  );
}
