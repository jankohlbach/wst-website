import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export const lenis = new Lenis({
  lerp: 0.07,
});

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

export const scrollStop = () => {
  if (!lenis.isStopped) {
    const scrollBarWidth = window.innerWidth - document.body.offsetWidth
    document.body.style.setProperty('--scroll-bar-width', `${scrollBarWidth}px`)
    document.body.style.paddingRight = document.body.style.getPropertyValue('--scroll-bar-width') || scrollBarWidth + 'px'
  }

  document.body.style.overflowY = 'clip'
  lenis.stop()
};

export const scrollStart = () => {
  lenis.start()
  document.body.style.removeProperty('--scroll-bar-width')
  document.body.style.paddingRight = ''
  document.body.style.overflowY = ''
};

lenis.on('scroll', (e) => {
  ScrollTrigger.update();

  if (e.scroll > 10) {
    document.documentElement.classList.add('has-scrolled');
  } else {
    document.documentElement.classList.remove('has-scrolled');
  }

  if (e.direction === -1 && e.scroll < 150) {
    document.documentElement.classList.add('scrolling-up');
  } else {
    document.documentElement.classList.remove('scrolling-up');
  }
});

window.addEventListener('load', () => {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
})
