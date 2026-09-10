import {
  Header,
  Hero,
  Areas,
  About,
  Method,
  Commitment,
  Faq,
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
        <Commitment />
        <Faq />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <SocialFloats />
    </>
  );
}
