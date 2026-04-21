// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((r) => observer.observe(r));

// Track click → Spotify
document.querySelectorAll(".track").forEach((t) => {
  t.addEventListener("click", () => {
    window.open(
      'https://open.spotify.com/intl-es/artist/5FRq9xQwz5xcNYynRS1qYZ?si=_brkkXADSemsuBB5IeyCrw"',
      "_blank",
    );
  });
});

// ── CONTADOR DE VISITAS REAL (CountAPI) ──
// BASE_OFFSET: arranca en 18000 visitas previas al lanzamiento del contador
const BASE_OFFSET = 18000;
const NAMESPACE = "creaturealidadahoratv";
const KEY = "visitas-totales";
const el = document.getElementById("visit-count");

function formatNum(n) {
  return n.toLocaleString("es-AR");
}

// Incrementa el contador y muestra el valor actualizado
fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
  .then((r) => r.json())
  .then((data) => {
    const total = (data.value || 1) + BASE_OFFSET;
    // Animación de conteo hacia el número final
    let start = total - 80;
    const step = () => {
      el.textContent = formatNum(start);
      if (start < total) {
        start += 3;
        requestAnimationFrame(step);
      } else {
        el.textContent = formatNum(total);
      }
    };
    requestAnimationFrame(step);
  })
  .catch(() => {
    // Fallback silencioso si la API no responde
    el.textContent = formatNum(BASE_OFFSET);
  });
