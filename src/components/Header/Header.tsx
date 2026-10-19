
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';


import locationIcon from '../../assets/images/location.svg';
import phoneIcon from '../../assets/images/phone.svg';
import envelopeIcon from '../../assets/images/envelope.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import vkIcon from '../../assets/images/vk.svg';
import hamburgerIcon from '../../assets/images/hamburger.svg';
import logoIcon from '../../assets/images/logo.svg';
import closeIcon from '../../assets/images/close.svg';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'Наши специалисты', href: '#specialists' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Блог', href: '#blog' },
  { label: 'Контакты', href: '#contacts' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    setIsMobileMenuOpen(false);
  };


  const scrollToElement = (targetId: string) => {
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo( {
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      console.warn(`[Header]: Секция id="${targetId}" не найдена на главной странице.`);
    }
  };


  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isMobile: boolean = false
  ) => {
    e.preventDefault();

    if (href.startsWith('#')) {
      const targetId = href.substring(1);


      if (isMobile) {
        setIsMobileMenuOpen(false);


        if (location.pathname === '/') {
          setTimeout(() => {
            scrollToElement(targetId);
          }, 100);
        } else {

          navigate(`/${href}`);
        }
        return;
      }


      if (location.pathname === '/') {
        scrollToElement(targetId);
      } else {
        navigate(`/${href}`);
      }
    }
  };

  return (
    <header className="relative w-full font-sans header">
      {}
      <div className="header-top bg-[#2378c9] py-3.5 text-white text-sm">
        <div className="mx-auto px-4 max-w-7xl container">
          <div className="header-top-row flex justify-between min-[1150px]:justify-start items-center">
            {}
            <div className="header-top-location flex items-center mr-2 min-w-0 text-xs sm:text-sm">
              <img src={locationIcon} alt="Адрес" className="mr-2 sm:mr-3.5 w-4 h-4 shrink-0" />
              <span className="truncate">г.Москва, ул. Прокофьева 18</span>
            </div>

            {}
            <div className="hidden header-top-right min-[1150px]:flex items-center ml-auto shrink-0">
              <a
                href="tel:4950000000"
                className="header-top-phone flex items-center hover:opacity-80 mr-6 xl:mr-10 transition-opacity"
              >
                <img src={phoneIcon} alt="Телефон" className="mr-2.5 w-4 h-4 shrink-0" />
                <span>+7 (495) 000 00 00</span>
              </a>

              <a
                href="mailto:info@dentaltooth.ru"
                className="header-top-email flex items-center hover:opacity-80 mr-6 xl:mr-[55px] transition-opacity"
              >
                <img src={envelopeIcon} alt="Email" className="mr-2.5 w-4 h-4 shrink-0" />
                <span>info@dentaltooth.ru</span>
              </a>

              <div className="header-top-social flex items-center space-x-5 xl:space-x-[30px]">
                <a href="#" className="hover:rotate-[360deg] transition-transform duration-300">
                  <img src={twitterIcon} alt="Twitter" className="w-[22px] max-w-none" />
                </a>
                <a href="#" className="hover:rotate-[360deg] transition-transform duration-300">
                  <img src={instagramIcon} alt="Instagram" className="w-[22px] max-w-none" />
                </a>
                <a href="#" className="hover:rotate-[360deg] transition-transform duration-300">
                  <img src={vkIcon} alt="Vk" className="w-[22px] max-w-none" />
                </a>
              </div>
            </div>

            {}
            <button
              onClick={toggleMobileMenu}
              className="min-[1150px]:hidden ml-auto p-1 focus:outline-none cursor-pointer hamburger shrink-0"
              aria-label="Открыть меню"
            >
              <img src={hamburgerIcon} alt="Hamburger" className="w-[30px]" />
            </button>
          </div>
        </div>
      </div>

      {}
      <div className="header-bottom z-10 relative bg-white shadow-[1px_2px_2px_-1px_rgba(48,44,44,0.18)] py-3 sm:py-5">
        <div className="mx-auto px-4 max-w-7xl container">
          <div className="header-bottom-row flex justify-between items-center gap-x-4">
            {}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="header-logo shrink-0"
            >
              <img
                src={logoIcon}
                alt="Dental Tooth"
                className="w-[120px] sm:w-[160px] min-[1200px]:w-[172px] min-[400px]:w-[140px] h-auto transition-all"
              />
            </a>

            {}
            <nav className="hidden min-[1150px]:block menu-nav">
              <ul className="flex items-center space-x-5 xl:space-x-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, false)}
                      className="text-[#302d2d] xl:text-[18px] hover:text-[#2378c9] text-base whitespace-nowrap transition-colors duration-300 cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {}
            <button
              onClick={openModal}
              className="header-bottom-btn bg-[#f86d6d] hover:bg-[#e25e5e] px-4 min-[576px]:px-6 py-2.5 min-[576px]:py-3.5 rounded-[26px] font-medium text-white text-xs min-[576px]:text-sm text-center whitespace-nowrap transition-colors duration-300 cursor-pointer shrink-0"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div>

      {}
      <div
        className={`mobile-menu fixed inset-y-0 right-0 w-full sm:w-[380px] bg-[#0e6eaa] text-white p-5 shadow-2xl transition-transform duration-500 ease-in-out z-50 overflow-y-auto min-[1150px]:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-7 pb-4 border-white/30 border-b text-xl mobile-menu-header">
          <div className="font-medium mobile-menu-title">Меню</div>
          <button
            onClick={toggleMobileMenu}
            className="p-1 cursor-pointer mobile-menu-close"
            aria-label="Закрыть меню"
          >
            <img src={closeIcon} alt="Закрыть меню" className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mobile-menu-body">
          <a href="tel:4950000000" className="flex justify-center items-center mb-6 text-white">
            <img src={phoneIcon} alt="Телефон" className="mr-3 w-4 h-4" />
            <span>+7 (495) 000 00 00</span>
          </a>

          <a href="mailto:info@dentaltooth.ru" className="flex justify-center items-center mb-6 text-white">
            <img src={envelopeIcon} alt="Email" className="mr-3 w-4 h-4" />
            <span>info@dentaltooth.ru</span>
          </a>

          <div className="flex justify-center items-center space-x-6 mb-8">
            <a href="#"><img src={twitterIcon} alt="Twitter" className="w-5" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram" className="w-5" /></a>
            <a href="#"><img src={vkIcon} alt="Vk" className="w-5" /></a>
          </div>

          {}
          <nav className="mt-8 mobile-menu-nav">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, true)}
                    className="block hover:opacity-80 text-white text-lg cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {}
      {isMobileMenuOpen && (
        <div
          onClick={toggleMobileMenu}
          className="min-[1150px]:hidden z-40 fixed inset-0 bg-black/50"
        />
      )}

      {}
      {isModalOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div
            className="relative bg-white shadow-2xl p-6 sm:p-8 rounded-2xl w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="top-4 right-4 absolute p-1 font-bold text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
            >
              ✕
            </button>

            <h3 className="mb-2 font-bold text-[#302d2d] text-2xl text-center">
              Заказать консультацию
            </h3>
            <p className="mb-6 text-gray-500 text-sm text-center">
              Оставьте заявку и наш администратор свяжется с вами в течение 15 минут.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsModalOpen(false);
                alert('Заявка отправлена!');
              }}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  className="px-4 py-3 border border-gray-300 focus:border-[#2378c9] rounded-xl focus:outline-none w-full text-sm"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  required
                  className="px-4 py-3 border border-gray-300 focus:border-[#2378c9] rounded-xl focus:outline-none w-full text-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-[#f86d6d] hover:bg-[#e25e5e] py-3.5 rounded-xl w-full font-medium text-white text-sm transition-colors cursor-pointer"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
