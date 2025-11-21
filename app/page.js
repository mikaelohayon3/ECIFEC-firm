'use client';
import Hero from '@/components/home/Hero';
import StatsSection from '@/components/home/StatsSection';
import OurProcess from '@/components/home/OurProcess';
import WhyChooseUsPreview from '@/components/home/WhyChooseUsPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import SectorsPreview from '@/components/home/SectorsPreview';
import Certifications from '@/components/home/Certifications';
import CTASection from '@/components/shared/CTASection';
import WaveDivider from '@/components/shared/WaveDivider';
import PageHead from '@/components/shared/PageHead';

export default function Home() {
  return (
    <>
      <PageHead
        title="Cabinet ECIFEC - Expert-Comptable à Sarcelles | Accompagnement sur-mesure"
        description="Cabinet d'expertise comptable ECIFEC à Sarcelles. Plus de 35 ans d'expérience. Accompagnement personnalisé pour TPE, PME et professions libérales. Création, comptabilité, fiscal, social, juridique."
      />
      <Hero />
      <WaveDivider variant="slant" color="#f5f5f5" />
      <StatsSection />
      <WaveDivider variant="minimal" />
      <OurProcess />
      <WaveDivider variant="slant" color="#f5f5f5" />
      <WhyChooseUsPreview />
      <WaveDivider variant="geometric" flip color="#ffffff" />
      <ServicesPreview />
      <WaveDivider variant="minimal" />
      <SectorsPreview />
      <WaveDivider variant="slant" flip color="#ffffff" />
      <Certifications />
      <CTASection />
    </>
  );
}
