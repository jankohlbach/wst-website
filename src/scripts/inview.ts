let inviewTrigger: NodeList | null = null;
let inviewTriggerNoOffset: NodeList | null = null;

const initInViewTrigger = ({
  trigger,
  offset = false,
}: {
  trigger: NodeList;
  offset: boolean;
}) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview');
        }
      });
    },
    {
      rootMargin: `0% 0% ${offset ? (window.innerWidth < 768 ? '-10%' : '-20%') : '0%'} 0%`,
    },
  );

  trigger?.forEach((elTrigger) => {
    observer.observe(elTrigger as HTMLElement);
  });
};

window.addEventListener('load', () => {
  inviewTrigger = document.querySelectorAll('[data-inview]');
  inviewTriggerNoOffset = document.querySelectorAll('[data-inview-no-offset]');

  if (inviewTrigger) {
    initInViewTrigger({ trigger: inviewTrigger, offset: true });
  }

  if (inviewTriggerNoOffset) {
    initInViewTrigger({ trigger: inviewTriggerNoOffset, offset: false });
  }
});

window.addEventListener('intro:done', () => {
  document.querySelectorAll('[data-inview-manual]').forEach((el) => {
    el.classList.add('inview');
  });
});
