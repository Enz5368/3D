import { useState } from 'react';
import { CustomCursor } from './components/common/CustomCursor';
import { Loader } from './components/common/Loader';
import { SiteFooter } from './components/layout/SiteFooter';
import { Navigation } from './components/navigation/Navigation';
import { CtaSection } from './components/sections/CtaSection';
import { DemoSection } from './components/sections/DemoSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { GallerySection } from './components/sections/GallerySection';
import { HeroSection } from './components/sections/HeroSection';
import { MetricsSection } from './components/sections/MetricsSection';
import { ProjectSection } from './components/sections/ProjectSection';
import { SceneCanvas } from './components/three/SceneCanvas';
import { useLenis } from './hooks/useLenis';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useScrollTimeline } from './hooks/useScrollTimeline';

export default function App() {
  const reducedMotion = useReducedMotion();
  const [sceneReady, setSceneReady] = useState(false);
  useLenis(!reducedMotion);
  useScrollTimeline(!reducedMotion);

  return (
    <>
      <Loader isReady={sceneReady} />
      <CustomCursor />
      <Navigation />
      <SceneCanvas onReady={() => setSceneReady(true)} />
      <main id="main-content">
        <HeroSection />
        <ProjectSection />
        <FeaturesSection />
        <DemoSection />
        <MetricsSection />
        <GallerySection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
