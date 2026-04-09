import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import WorkMethod from '@/components/WorkMethod';
import Praktik from '@/components/Praktik';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="bg-grid" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WorkMethod />
        <Praktik />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
