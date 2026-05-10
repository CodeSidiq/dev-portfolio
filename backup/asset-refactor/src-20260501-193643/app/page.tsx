'use client';

import About from './home/partials/impact-statistics';
import CareerJourney from './home/partials/services-process';
import Contact from './home/partials/contact-form';
import FAQ from './home/partials/faq';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import Projects from './home/partials/projects';
import ScrollUp from './home/partials/scroll-up';
import Skills from './home/partials/services';
import StandOut from './home/partials/usecase-tabs';
import Testimonials from './home/partials/testimonials';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <CareerJourney />
      <Skills />
      <FAQ />
      <StandOut />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default Home;
