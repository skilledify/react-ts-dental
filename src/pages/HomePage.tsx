
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

  // Авто-скролл при переходе на главную с другой страницы по хэшу (#services, #contacts и т.д.)
  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      
      // Небольшая задержка, чтобы DOM успел полностью отрисоваться
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
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
      {/* 1. Главная (Первый экран) */}
      <section id="hero">
        <Banner />
      </section>

      {/* О нас */}
      <About />

      {/* 2. Услуги и цены */}
      <section id="services">
        <Features />
        <Price />
      </section>

      {/* 3. Наши специалисты */}
      <section id="specialists">
        <Specialists />
      </section>

      {/* 4. Отзывы */}
      <section id="reviews">
        <Reviews />
      </section>

      {/* 5. Блог / Новости */}
      <section id="blog">
        <BlogSection isHomePage={true}/>
      </section>

      {/* 6. Контакты / Форма связи */}
      <section id="contacts">
        <FormSection />
      </section>
    </main>
  );
};

export default HomePage;