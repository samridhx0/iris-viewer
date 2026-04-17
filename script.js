const revealNodes = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    }
  },
  {
    threshold: 0.18,
    rootMargin: '0px 0px -30px 0px',
  }
);

for (const node of revealNodes) {
  observer.observe(node);
}
