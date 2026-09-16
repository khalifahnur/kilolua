import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCoffeeStore } from '../../store/useCoffeeStore';

gsap.registerPlugin(ScrollTrigger);

export default function AnimationController() {
  const refs = useCoffeeStore((state) => state.refs);

  useLayoutEffect(() => {
    if (!refs.rcCan || !refs.bubbles) return;

    const ctx = gsap.context(() => {
      // Initial state (Hero)
      gsap.set(refs.rcCan.current.position, { x: 0, y: 1, z: 0 }); // slightly elevated
      gsap.set(refs.rcCan.current.rotation, { x: 0, y: 0, z: -Math.PI / 8 }); 
      gsap.set(refs.rcCan.current.scale, { x: 1.4, y: 1.4, z: 1.4 });
      
      gsap.set(refs.bubbles.current.position, { y: -30 });

      // Hero -> Info Transition
      gsap.to(refs.rcCan.current.rotation, {
        z: 0,
        y: Math.PI * 2,
        scrollTrigger: {
          trigger: '.trigger-info',
          start: 'top bottom', // when top of Info hits bottom of viewport
          end: 'center center', // when center of Info hits center of viewport
          scrub: 1,
        }
      });

      gsap.to(refs.rcCan.current.scale, {
        x: 1.1, y: 1.1, z: 1.1,
        scrollTrigger: {
          trigger: '.trigger-info',
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
        }
      });

      gsap.to(refs.rcCan.current.position, {
        y: 0, // centered vertically
        scrollTrigger: {
          trigger: '.trigger-info',
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
        }
      });

      // Info -> Bottles Transition
      gsap.to(refs.rcCan.current.position, {
        y: -1.5, // Move down into the circle slightly
        scrollTrigger: {
          trigger: '.trigger-bottles',
          start: 'top bottom',
          end: 'top center', // complete move by the time we see the heading
          scrub: 1,
        }
      });

      gsap.to(refs.rcCan.current.rotation, {
        y: Math.PI * 4,
        scrollTrigger: {
          trigger: '.trigger-bottles',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
        }
      });
      
      // Bubbles Float Up
      gsap.to(refs.bubbles.current.position, {
        y: 10,
        scrollTrigger: {
          trigger: '.trigger-bottles',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    });

    return () => ctx.revert();
  }, [refs]);

  return null;
}
