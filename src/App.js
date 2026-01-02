import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-900 scroll-smooth">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section id="home" data-aos="fade-up">
        <Hero />
      </section>

      {/* Stats */}
      <section id="stats" data-aos="fade-up">
        <Stats />
      </section>

      {/* About */}
      <section id="about" data-aos="fade-right">
        <About />
      </section>


      {/* Process */}
      <section id="process" data-aos="fade-up">
        <Process />
      </section>

      {/* Portfolio */}
      <section id="portfolio" data-aos="zoom-in">
        <Portfolio />
      </section>

      {/* WHAT I DO (NEW ADDED SECTION) */}
      <section id="what-i-do" data-aos="fade-up">
        <WhatIDo />
      </section>

      {/* Call To Action / Services */}
      <section id="services" data-aos="fade-left">
        <Services />
      </section>

      {/* Blog */}
      <section id="blog" data-aos="fade-up">
        <Blog />
      </section>
      

      {/* Testimonial */}
      <section id="testimonial" data-aos="fade-up">
        <Testimonial />
      </section>

      {/* Contact */}
      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
