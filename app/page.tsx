import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProcessSection />
      <CallToAction />
    </>
  );
}
