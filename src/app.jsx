import {
  Header,
  Hero,
  Areas,
  About,
  Method,
  Testimonials,
  Contact,
  MapSection,
  Footer,
  SocialFloats,
} from './sections.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Areas />
        <About />
        <Method />
        <Testimonials />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <SocialFloats />
    </>
  );
}
