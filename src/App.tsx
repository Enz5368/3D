import { useState } from 'react';
import { CustomCursor } from './components/common/CustomCursor';
import { Loader } from './components/common/Loader';
import { SiteFooter } from './components/layout/SiteFooter';
import { Navigation } from './components/navigation/Navigation';
import { AboutSection } from './components/sections/AboutSection';
import { ConfiguratorSection } from './components/sections/ConfiguratorSection';
import { ContactSection } from './components/sections/ContactSection';
import { FaqSection } from './components/sections/FaqSection';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WhySection } from './components/sections/WhySection';
import { SceneCanvas } from './components/three/SceneCanvas';
import { QuoteCartProvider } from './context/QuoteCartContext';
import { useLenis } from './hooks/useLenis';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useScrollTimeline } from './hooks/useScrollTimeline';

export default function App() {
  const reducedMotion = useReducedMotion();
  const [sceneReady, setSceneReady] = useState(false);
  useLenis(!reducedMotion);
  useScrollTimeline(!reducedMotion);

  return (
    <QuoteCartProvider>
      <Loader isReady={sceneReady} />
      <CustomCursor />
      <Navigation />
      <SceneCanvas onReady={() => setSceneReady(true)} />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <WhySection />
        <ConfiguratorSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </QuoteCartProvider>
  );
}
