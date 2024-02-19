import BlogPreview from "@/components/blog-preview";
import Features from "@/components/features";
import Hero from "@/components/hero";
import ContactSection from "@/components/contact";
import PortfolioPreview from "@/components/portfolio-preview";

export default function Home() {
  return (
    <main>
      <Hero />
      <PortfolioPreview />
      <Features />
      <BlogPreview />
      <ContactSection />
    </main>
  );
}
