
  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));

  // Track click → Spotify
  document.querySelectorAll('.track').forEach(t => {
    t.addEventListener('click', () => {
      window.open('https://open.spotify.com/intl-es/artist/5FRq9xQwz5xcNYynRS1qYZ?si=hFroTZLnTIGEiL8Wzbau4w', '_blank');
    });
  });
