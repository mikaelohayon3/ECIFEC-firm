import Hero from '@/components/home/Hero';
import StatsSection from '@/components/home/StatsSection';
import OurProcess from '@/components/home/OurProcess';
import WhyChooseUsPreview from '@/components/home/WhyChooseUsPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import SectorsPreview from '@/components/home/SectorsPreview';
import Certifications from '@/components/home/Certifications';
import CTASection from '@/components/shared/CTASection';
import WaveDivider from '@/components/shared/WaveDivider';
import { homeMetadata } from '@/lib/metadata';

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
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
