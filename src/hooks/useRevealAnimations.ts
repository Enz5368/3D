import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animationConfig } from '../config/animationConfig';
import { useReducedMotion } from './useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export const useRevealAnimations = () => {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    const elements = gsap.utils.toArray<HTMLElement>('[data-reveal]');
    const triggers = elements.map((element) =>
      gsap.fromTo(
        element,
        {
          autoAlpha: 0,
          y: animationConfig.revealDistance,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
            end: 'top 48%',
            toggleActions: 'play none none reverse',
          },
        },
      ),
    );

    return () => {
      triggers.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
    };
  }, [reducedMotion]);
};
