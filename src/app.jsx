import {
  Header,
  Hero,
  Marquee,
  Areas,
  About,
  Method,
  Testimonials,
  Contact,
  MapSection,
  Footer,
  WhatsappFloat,
} from './sections.jsx';

export default function App() {
  return (
    <div className="hl-italic">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Areas />
        <About />
        <Method />
        <Testimonials />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
