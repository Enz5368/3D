import { useState } from 'react';
import { CustomCursor } from './components/common/CustomCursor';
import { Loader } from './components/common/Loader';
import { SiteFooter } from './components/layout/SiteFooter';
import { Navigation } from './components/navigation/Navigation';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { EstimatorSection } from './components/sections/EstimatorSection';
import { FaqSection } from './components/sections/FaqSection';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WhySection } from './components/sections/WhySection';
import { SceneCanvas } from './components/three/SceneCanvas';
import { useLenis } from './hooks/useLenis';
import { useRevealAnimations } from './hooks/useRevealAnimations';
import { useReducedMotion } from './hooks/useReducedMotion';

export default function App() {
  const reducedMotion = useReducedMotion();
  const [sceneReady, setSceneReady] = useState(false);
  useLenis(!reducedMotion);
  useRevealAnimations();

  return (
    <>
      <Loader isReady={sceneReady} />
      <CustomCursor />
      <Navigation />
      <main id="main-content">
        <div className="hero-wrap">
          <SceneCanvas onReady={() => setSceneReady(true)} />
          <HeroSection />
        </div>
        <ServicesSection />
        <WhySection />
        <EstimatorSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
