import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ImpactMetrics from "@/components/ImpactMetrics";
import Testimonials from "@/components/Testimonials";
import ForPartners from "@/components/ForPartners";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <ImpactMetrics />
      <Testimonials />
      <ForPartners />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
