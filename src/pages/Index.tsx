import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBySection />
      <ServicesOverview />
      <FeaturedCaseStudies />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;