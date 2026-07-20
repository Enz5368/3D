import { useEffect, useState } from 'react';
import { animationConfig } from '../config/animationConfig';

export type DevicePerformance = {
  isMobile: boolean;
  isLowPower: boolean;
  dpr: number;
  particleCount: number;
};

export const useDevicePerformance = (): DevicePerformance => {
  const [profile, setProfile] = useState<DevicePerformance>(() => ({
    isMobile: false,
    isLowPower: false,
    dpr: 1,
    particleCount: animationConfig.particleCount.desktop,
  }));

  useEffect(() => {
    const compute = () => {
      const isMobile = window.innerWidth < animationConfig.breakpoints.mobile;
      const cores = navigator.hardwareConcurrency ?? 4;
      const isLowPower = isMobile || cores <= 4;
      const dpr = Math.min(window.devicePixelRatio || 1, isLowPower ? 1.25 : 1.75);

      setProfile({
        isMobile,
        isLowPower,
        dpr,
        particleCount: isMobile
          ? animationConfig.particleCount.mobile
          : animationConfig.particleCount.desktop,
      });
    };

    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  return profile;
};
