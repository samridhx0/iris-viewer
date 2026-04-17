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

const heroVideo = document.querySelector('.hero-video');
const mediaFrame = document.querySelector('.media-frame');

if (heroVideo && mediaFrame) {
  const syncVideoRatio = () => {
    if (!heroVideo.videoWidth || !heroVideo.videoHeight) {
      return;
    }

    mediaFrame.style.setProperty('--video-ratio', `${heroVideo.videoWidth} / ${heroVideo.videoHeight}`);
  };

  heroVideo.addEventListener('loadedmetadata', syncVideoRatio);
  heroVideo.addEventListener('resize', syncVideoRatio);
  syncVideoRatio();
}
