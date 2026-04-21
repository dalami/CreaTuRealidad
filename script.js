
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
      window.open('https://open.spotify.com/intl-es/artist/5FRq9xQwz5xcNYynRS1qYZ?si=_brkkXADSemsuBB5IeyCrw"', '_blank');
    });
  });

  // ── CONTADOR DE VISITAS REAL (counterapi.dev) ──
  const BASE_OFFSET = 18000;
  const el = document.getElementById('visit-count');

  function formatNum(n) {
    return n.toLocaleString('es-AR');
  }

  function animateCount(total) {
    let start = total - 80;
    const step = () => {
      el.textContent = formatNum(start);
      if (start < total) { start += 3; requestAnimationFrame(step); }
      else { el.textContent = formatNum(total); }
    };
    requestAnimationFrame(step);
  }

  fetch('https://api.counterapi.dev/v1/creaturealidadahoratv/visitas/up')
    .then(r => r.json())
    .then(data => {
      const total = (data.count || 1) + BASE_OFFSET;
      animateCount(total);
    })
    .catch(() => {
      el.textContent = formatNum(BASE_OFFSET);
    });
