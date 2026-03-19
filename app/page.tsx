import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { CallToAction } from "@/components/CallToAction";
import { HomeCredibility } from "@/components/HomeCredibility";
import { ProblemsWeSolve } from "@/components/ProblemsWeSolve";
import { WhoWeHelp } from "@/components/WhoWeHelp";
import { ExampleOutcomes } from "@/components/ExampleOutcomes";
import { SelectedWork } from "@/components/SelectedWork";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemsWeSolve />
      <WhoWeHelp />
      <ServicesGrid
        title="What we do"
        description="Data engineering-led consulting across integration, analytics, reporting automation, and supporting applications."
      />
      <ExampleOutcomes />
      <SelectedWork />
      <HomeCredibility />
      <ProcessSection />
      <CallToAction />
    </>
  );
}
