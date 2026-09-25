
import React from 'react';

// 1. Импортируем иконки и логотип как модули
import footerLogoSvg from "../../assets/images/footer-logo.svg";
import locationSvg from "../../assets/images/location.svg";
import phoneSvg from "../../assets/images/phone.svg";
import envelopeSvg from "../../assets/images/envelope.svg";
import twitterSvg from "../../assets/images/twitter.svg";
import instagramSvg from "../../assets/images/instagram.svg";
import vkSvg from "../../assets/images/vk.svg";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  name: string;
  iconSrc: string;
  href: string;
}

interface WorkingHour {
  day: string;
  hours: string;
}

interface FooterProps {
  services?: FooterLink[];
  dentists?: FooterLink[];
  workingHours?: WorkingHour[];
  address?: string;
  phone?: string;
  email?: string;
  currentYear?: number | string;
}

const DEFAULT_SERVICES: FooterLink[] = [
  { label: 'Отбеливание зубов', href: '#' },
  { label: 'Лечение десен', href: '#' },
  { label: 'Апноэ во сне', href: '#' },
  { label: 'Реставрации', href: '#' },
  { label: 'Дизайн улыбки', href: '#' },
  { label: 'Корневой канал', href: '#' },
  { label: 'Имплантационная стоматология', href: '#' },
  { label: 'Сознательная седация', href: '#' },
  { label: 'Ортодонтия', href: '#' },
];

const DEFAULT_DENTISTS: FooterLink[] = [
  { label: 'Борис Каменский', href: '#' },
  { label: 'Михаил Гуревич', href: '#' },
  { label: 'София Блок', href: '#' },
  { label: 'Елена Николаева', href: '#' },
];

const DEFAULT_HOURS: WorkingHour[] = [
  { day: 'Понедельник', hours: '8:30 - 9:00' },
  { day: 'Вторник', hours: '8:00 - 9:00' },
  { day: 'Среда', hours: '8:00 - 9:00' },
  { day: 'Четверг', hours: '8:30 - 9:00' },
  { day: 'Пятница', hours: '10:00 - 4:00' },
  { day: 'Суббота', hours: 'выходной' },
  { day: 'Воскресенье', hours: 'Закрыто' },
];

// 2. Используем импортированные иконки соцсетей
const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Twitter', iconSrc: twitterSvg, href: '#' },
  { name: 'Instagram', iconSrc: instagramSvg, href: '#' },
  { name: 'Vk', iconSrc: vkSvg, href: '#' },
];

export const Footer: React.FC<FooterProps> = ({
  services = DEFAULT_SERVICES,
  dentists = DEFAULT_DENTISTS,
  workingHours = DEFAULT_HOURS,
  address = 'г.Москва, ул. Прокофьева 18',
  phone = '+7 (495)000 00 00',
  email = 'info@dentaltooth.ru',
  currentYear = new Date().getFullYear(),
}) => {
  return (
    <footer className="bg-[#10406f] w-full overflow-hidden text-white shrink-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[1200px]">
        <div className="flex lg:flex-row flex-col justify-between items-start">
          
          {/* Левая секция */}
          <div className="flex flex-col items-center lg:items-start order-1 lg:order-none mr-0 lg:mr-[40px] xl:mr-[80px] py-10 lg:py-[65px] pr-0 lg:pr-[40px] xl:pr-[80px] border-white/35 border-r-0 lg:border-r w-full lg:w-auto lg:text-left text-center shrink-0">
            {/* Логотип */}
            <a href="/" className="block mb-[50px] lg:mb-[80px]">
              <img src={footerLogoSvg} alt="Dental Tooth" className="max-w-full h-auto" />
            </a>

            {/* Контактные данные */}
            <div className="space-y-[24px] mb-[70px] lg:mb-[75px] max-w-[220px]">
              <div className="flex items-center text-left">
                <span className="inline-block mr-3 w-5 text-center shrink-0">
                  <img src={locationSvg} alt="Локация" className="mx-auto align-middle" />
                </span>
                <span>{address}</span>
              </div>

              <div className="flex items-center text-left">
                <span className="inline-block mr-3 w-5 text-center shrink-0">
                  <img src={phoneSvg} alt="Телефон" className="mx-auto align-middle" />
                </span>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-white hover:underline">
                  {phone}
                </a>
              </div>

              <div className="flex items-center text-left">
                <span className="inline-block mr-3 w-5 text-center shrink-0">
                  <img src={envelopeSvg} alt="Email" className="mx-auto align-middle" />
                </span>
                <a href={`mailto:${email}`} className="text-white hover:underline">
                  {email}
                </a>
              </div>
            </div>

            {/* Соцсети */}
            <div className="flex items-center gap-[30px]">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="inline-block hover:rotate-[360deg] transition-transform duration-350 ease-in-out"
                >
                  <img src={social.iconSrc} alt={social.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Правая секция */}
          <div className="lg:before:hidden before:bottom-0 before:-left-[20px] before:absolute relative flex sm:flex-row flex-col sm:justify-between gap-x-[20px] gap-y-[30px] sm:gap-y-0 lg:gap-x-[30px] xl:gap-x-[60px] before:bg-white/35 py-[60px] lg:py-[65px] pb-10 lg:pb-[65px] w-full before:w-[calc(100%+40px)] before:h-[1px] before:content-['']">
            {/* Наши услуги */}
            <div className="sm:text-left text-center">
              <h3 className="mb-[25px] font-semibold text-[24px] text-white">
                Наши услуги
              </h3>
              <ul className="space-y-[20px]">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-[#e0e0e0] hover:text-white transition-colors duration-350 ease-in-out"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Наши стоматологи */}
            <div className="sm:text-left text-center">
              <h3 className="mb-[25px] font-semibold text-[24px] text-white">
                Наши стоматологи
              </h3>
              <ul className="space-y-[20px]">
                {dentists.map((dentist, index) => (
                  <li key={index}>
                    <a
                      href={dentist.href}
                      className="text-[#e0e0e0] hover:text-white transition-colors duration-350 ease-in-out"
                    >
                      {dentist.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Часы работы */}
            <div className="sm:text-left text-center">
              <h3 className="mb-[25px] font-semibold text-[24px] text-white">
                Часы работы
              </h3>
              <ul className="space-y-[20px] text-[#e0e0e0]">
                {workingHours.map((item, index) => (
                  <li key={index}>
                    {item.day}: {item.hours}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Копирайт */}
      <div className="py-[30px] border-white/35 border-t w-full text-[#c3c3c3] text-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[1200px]">
          <div>
            {currentYear} © Dental Tooth Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;