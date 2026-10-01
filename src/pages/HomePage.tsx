
import { useEffect, type FC } from "react"
import { useLocation } from "react-router"

import Banner from "../../src/components/Banner/Banner"
import About from "../components/About/About"
import Features from "../components/Features/Features"
import Specialists from "../components/Specialists/Specialists"
import Price from "../components/Price/Price"
import FormSection  from "../components/FormSection/FormSection"
import Reviews from "../components/Reviews/Reviews"
import BlogSection from "../components/BlogSection/BlogSection"

const HomePage: FC = () => {
  const { hash } = useLocation();


  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');


      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo( {
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <main className="w-full">
      {}
      <section id="hero">
        <Banner />
      </section>

      {}
      <About />

      {}
      <section id="services">
        <Features />
        <Price />
      </section>

      {}
      <section id="specialists">
        <Specialists />
      </section>

      {}
      <section id="reviews">
        <Reviews />
      </section>

      {}
      <section id="blog">
        <BlogSection isHomePage={true}/>
      </section>

      {}
      <section id="contacts">
        <FormSection />
      </section>
    </main>
  );
};

export default HomePage;
