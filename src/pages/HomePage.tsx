import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Areas from '../components/Areas';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Gallery />
      <Reviews />
      <FAQ />
      <Areas />
      <Contact />
    </main>
  );
}
