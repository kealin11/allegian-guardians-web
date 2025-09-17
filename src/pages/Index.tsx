import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import AboutPreview from '@/components/AboutPreview';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <CTASection />
    </div>
  );
};

export default Index;