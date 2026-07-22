import { CameraRig } from '../components/three/CameraRig';
import { BackgroundParticles } from '../components/three/BackgroundParticles';
import { DeviceMockup } from '../components/three/DeviceMockup';
import { Environment } from '../components/three/Environment';
import { FloatingElements } from '../components/three/FloatingElements';
import { Lighting } from '../components/three/Lighting';
import { MainObject } from '../components/three/MainObject';
import { SectionTransition } from '../components/three/SectionTransition';

type MainSceneProps = {
  isMobile: boolean;
  isLowPower: boolean;
  particleCount: number;
  reducedMotion: boolean;
};

export const MainScene = ({ isMobile, isLowPower, particleCount, reducedMotion }: MainSceneProps) => (
  <>
    <CameraRig reducedMotion={reducedMotion} isMobile={isMobile} />
    <color attach="background" args={['#000000']} />
    <fog attach="fog" args={['#000000', 9, 24]} />
    <Lighting isLowPower={isLowPower} />
    <Environment />
    <MainObject reducedMotion={reducedMotion} />
    <SectionTransition />
    <FloatingElements isMobile={isMobile} reducedMotion={reducedMotion} />
    <DeviceMockup reducedMotion={reducedMotion} />
    <BackgroundParticles count={particleCount} reducedMotion={reducedMotion} />
  </>
);
