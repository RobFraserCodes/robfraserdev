import BlogPreview from "@/components/blog-preview";
import Features from "@/components/features";
import Hero from "@/components/hero";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <BlogPreview />
      <ContactSection />
    </main>
  );
}
