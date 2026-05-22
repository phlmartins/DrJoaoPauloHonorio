// Main app composition + Tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "displayFont": "Cormorant Garamond",
  "accent": "#c9a062",
  "showWhatsApp": true,
  "showGrid": true,
  "headlineStyle": "italic"
}/*EDITMODE-END*/;

const DISPLAY_FONTS = {
  "Cormorant Garamond": "'Cormorant Garamond', serif",
  "Bodoni Moda": "'Bodoni Moda', 'Cormorant Garamond', serif",
  "DM Serif Display": "'DM Serif Display', 'Cormorant Garamond', serif",
  "Marcellus": "'Marcellus', 'Cormorant Garamond', serif",
  "Fraunces": "'Fraunces', 'Cormorant Garamond', serif",
};
const DISPLAY_FONT_GOOGLE = {
  "Cormorant Garamond": null, // already loaded in index
  "Bodoni Moda": "Bodoni+Moda:ital,wght@0,400;0,500;0,600;1,400",
  "DM Serif Display": "DM+Serif+Display:ital@0;1",
  "Marcellus": "Marcellus",
  "Fraunces": "Fraunces:ital,wght@0,300;0,400;0,500;1,400",
};
const ACCENT_OPTIONS = [
  '#c9a062', // original gold from card
  '#d4b876', // lighter champagne
  '#a8854a', // deep brass
  '#e8d4a0', // pale gold
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Inject optional Google Fonts for swap
  React.useEffect(() => {
    const slug = DISPLAY_FONT_GOOGLE[t.displayFont];
    if (!slug) return;
    const id = `gf-${slug}`;
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${slug}&display=swap`;
    document.head.appendChild(link);
  }, [t.displayFont]);

  // Apply tweaks via CSS variables
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--font-display', DISPLAY_FONTS[t.displayFont] || DISPLAY_FONTS["Cormorant Garamond"]);
    r.style.setProperty('--gold', t.accent);
    // Derive light/deep from accent
    r.style.setProperty('--gold-light', shade(t.accent, 0.22));
    r.style.setProperty('--gold-deep', shade(t.accent, -0.3));
  }, [t.displayFont, t.accent]);

  return (
    <div className={t.headlineStyle === 'italic' ? 'hl-italic' : 'hl-roman'} data-grid={t.showGrid}>
      <style>{`
        .hl-roman .display em { font-style: normal; }
        [data-grid="false"] .hero-grid-bg { display: none; }
      `}</style>

      <Header t={t} />
      <main>
        <Hero t={t} />
        <Marquee />
        <Areas />
        <About />
        <Method />
        <Testimonials />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      {t.showWhatsApp && <WhatsappFloat />}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Tipografia" />
        <TweakSelect
          label="Fonte display"
          value={t.displayFont}
          options={Object.keys(DISPLAY_FONTS)}
          onChange={(v) => setTweak('displayFont', v)}
        />
        <TweakRadio
          label="Destaque"
          value={t.headlineStyle}
          options={['italic', 'roman']}
          onChange={(v) => setTweak('headlineStyle', v)}
        />
        <TweakSection label="Cor" />
        <TweakColor
          label="Dourado"
          value={t.accent}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak('accent', v)}
        />
        <TweakSection label="Elementos" />
        <TweakToggle
          label="WhatsApp flutuante"
          value={t.showWhatsApp}
          onChange={(v) => setTweak('showWhatsApp', v)}
        />
        <TweakToggle
          label="Grade no hero"
          value={t.showGrid}
          onChange={(v) => setTweak('showGrid', v)}
        />
      </TweaksPanel>
    </div>
  );
}

// Tiny color util: lighten / darken a hex by amt (-1..1)
function shade(hex, amt) {
  const h = hex.replace('#', '');
  const num = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  let r = (num >> 16) & 0xff, g = (num >> 8) & 0xff, b = num & 0xff;
  if (amt >= 0) {
    r = Math.round(r + (255 - r) * amt);
    g = Math.round(g + (255 - g) * amt);
    b = Math.round(b + (255 - b) * amt);
  } else {
    r = Math.round(r * (1 + amt));
    g = Math.round(g * (1 + amt));
    b = Math.round(b * (1 + amt));
  }
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
