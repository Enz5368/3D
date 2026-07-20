import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { updateScrollProgress } from '../utils/scrollStore';

gsap.registerPlugin(ScrollTrigger);

export const useScrollTimeline = (enabled: boolean) => {
  useEffect(() => {
    if (!enabled) {
      updateScrollProgress(0);
      return undefined;
    }

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => updateScrollProgress(self.progress),
    });

    ScrollTrigger.refresh();

    return () => {
      trigger.kill();
    };
  }, [enabled]);
};
