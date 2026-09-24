
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Типы для социальных сетей
export type SocialType = 'twitter' | 'x' | 'vk' | 'telegram' | 'whatsapp';

export interface SocialLink {
  type?: SocialType;
  icon?: React.ReactNode;
  href: string;
  ariaLabel?: string;
}

export interface ReviewItem {
  id: string | number;
  name: string;
  text: string;
  avatarUrl: string;
  avatarAlt?: string;
  socials?: SocialLink[];
}

export interface ReviewsProps {
  title?: React.ReactNode;
  reviews?: ReviewItem[];
  className?: string;
}

// Вспомогательный рендер иконок соцсетей
const SocialIcon = ({ type, customIcon }: { type?: SocialType; customIcon?: React.ReactNode }) => {
  if (customIcon) return <>{customIcon}</>;

  const iconClass = "w-4 h-4 sm:w-5 sm:h-5 fill-[#2378c9] group-hover:fill-white transition-colors duration-500";

  switch (type) {
    case 'twitter':
    case 'x':
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'vk':
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M15.073 2H8.937C3.318 2 2 3.318 2 8.937v6.126C2 20.682 3.318 22 8.937 22h6.126C20.682 22 22 20.682 22 15.063V8.937C22 3.318 20.682 2 15.073 2zm3.17 13.75h-1.38c-.56 0-.73-.45-1.73-1.45-1-.97-1.44-1.1-1.69-1.1-.35 0-.46.1-.46.58v1.39c0 .36-.12.58-1.07.58-1.58 0-3.33-.96-4.57-2.75-1.87-2.61-2.38-4.57-2.38-4.97 0-.22.08-.43.49-.43h1.38c.37 0 .51.17.65.56.72 2.08 1.93 3.9 2.43 3.9.19 0 .28-.09.28-.58v-2.27c-.06-1.02-.6-1.11-.6-1.47 0-.17.15-.35.39-.35h2.17c.3 0 .41.16.41.53v3.07c0 .33.15.45.24.45.19 0 .35-.12.71-.48 1.11-1.25 1.9-3.19 1.9-3.19.1-.21.27-.35.64-.35h1.38c.42 0 .52.21.42.51-.17.78-1.81 3.12-1.81 3.12-.15.24-.21.35 0 .64.15.21.66.65 1 .99.63.61 1.11 1.12 1.24 1.48.13.35-.07.53-.42.53z" />
        </svg>
      );
    case 'telegram':
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.98-1.73 6.64-2.87 7.97-3.44 3.8-1.58 4.59-1.86 5.1-1.86.11 0 .36.03.52.16.13.11.17.26.19.37-.01.07.01.22 0 .38z" />
        </svg>
      );
    default:
      return null;
  }
};

const DEFAULT_REVIEWS: ReviewItem[] = [
  {
    id: 1,
    name: 'Елена Васильева',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    avatarAlt: 'Елена Васильева',
    text: 'Замечательная клиника! Обратилась по рекомендации подруги и ни разу не пожалела. Лечение прошло совершенно безболезненно, а персонал был очень внимателен и вежлив. Обязательно вернусь снова!',
    socials: [
      { href: '#', type: 'vk', ariaLabel: 'VK' },
      { href: '#', type: 'twitter', ariaLabel: 'Twitter' },
    ],
  },
  {
    id: 2,
    name: 'Владимир Цой',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    avatarAlt: 'Владимир Цой',
    text: 'Высокий профессионализм врачей и современное оборудование. Всё объяснили во всех подробностях до начала процедуры. Результатом очень доволен, спасибо всей команде!',
    socials: [
      { href: '#', type: 'vk', ariaLabel: 'VK' },
      { href: '#', type: 'telegram', ariaLabel: 'Telegram' },
    ],
  },
  {
    id: 3,
    name: 'Алина Матвеева',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    avatarAlt: 'Алина Матвеева',
    text: 'Замечательная клиника! Обратилась по рекомендации подруги и ни разу не пожалела. Лечение прошло совершенно безболезненно, а персонал был очень внимателен и вежлив. Обязательно вернусь снова!',
    socials: [
      { href: '#', type: 'vk', ariaLabel: 'VK' },
      { href: '#', type: 'twitter', ariaLabel: 'Twitter' },
    ],
  },
  {
    id: 4,
    name: 'Анаолий Ким',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    avatarAlt: 'Анатолий Ким ',
    text: 'Высокий профессионализм врачей и современное оборудование. Всё объяснили во всех подробностях до начала процедуры. Результатом очень доволен, спасибо всей команде!',
    socials: [
      { href: '#', type: 'vk', ariaLabel: 'VK' },
      { href: '#', type: 'telegram', ariaLabel: 'Telegram' },
    ],
  },
];

export default function Reviews({
  title = (
    <>
      Что говорят <span className="font-bold text-[#2378c9]">наши клиенты</span>
    </>
  ),
  reviews = DEFAULT_REVIEWS,
  className = '',
}: ReviewsProps) {
  return (
    <section id="reviews"
      className={`relative py-8 sm:py-12 md:py-[90px] px-3 sm:px-4 md:px-[30px] overflow-hidden bg-cover bg-center ${className}`}
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80")',
      }}
    >
      {/* Затемнение фона */}
      <div className="z-0 absolute inset-0 bg-[#323030]/40" />

      <div className="z-10 relative mx-auto max-w-[1200px]">
        {/* Карточка-обертка */}
        <div className="bg-white/90 shadow-lg px-3 sm:px-6 pt-6 sm:pt-[40px] md:pt-[55px] pb-8 sm:pb-[50px] md:pb-[70px] rounded-[20px] overflow-hidden">
          
          {/* Заголовок */}
          <h2 className="mb-6 sm:mb-8 md:mb-[60px] font-normal text-[#302d2d] text-[24px] sm:text-[36px] md:text-[46px] text-center leading-[1.2]">
            {title}
          </h2>

          {/* Контейнер слайдера */}
          <div className="relative mx-auto px-0 md:px-16 max-w-[920px]">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: '.reviews-swiper-next',
                prevEl: '.reviews-swiper-prev',
              }}
              pagination={{
                clickable: true,
                el: '.reviews-swiper-pagination',
              }}
              className="w-full overflow-hidden"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id} className="h-auto">
                  <div className="relative flex md:flex-row flex-col items-center md:items-start mx-auto pt-2 sm:pt-4 md:pt-6 pb-2 max-w-[780px]">
                    
                    {/* Декоративные кавычки на фоновом слое (z-0) */}
                    <div className="hidden md:block -top-4 left-[180px] lg:left-[195px] z-0 absolute opacity-25 md:opacity-30 pointer-events-none select-none">
                      <svg
                        width="96"
                        height="72"
                        viewBox="0 0 96 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#2378c9]"
                      >
                        <path
                          d="M40 0C17.9086 0 0 17.9086 0 40V72H40V32H16C16 18.7452 26.7452 8 40 8V0ZM96 0C73.9114 0 56 17.9086 56 40V72H96V32H72C72 18.7452 82.7452 8 96 8V0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    {/* Аватар */}
                    <div className="z-10 relative bg-white shadow-md md:mr-[42px] mb-4 sm:mb-6 md:mb-0 border-4 border-white rounded-full w-[120px] sm:w-[180px] md:w-[240px] h-[120px] sm:h-[180px] md:h-[240px] overflow-hidden shrink-0">
                      <img
                        src={review.avatarUrl}
                        alt={review.avatarAlt || review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Текстовый контент */}
                    <div className="z-10 relative flex-1 w-full min-w-0 md:text-left text-center">
                      <p className="mb-4 sm:mb-[25px] md:mb-[35px] text-[#6b6868] md:text-[18px] text-xs sm:text-base break-words leading-[1.5] sm:leading-[1.6]">
                        {review.text}
                      </p>

                      {/* Блок под отзывом: имя и иконки соцсетей */}
                      <div className="flex md:flex-row flex-col justify-between items-center gap-3 sm:gap-4 w-full">
                        <span className="w-full md:w-auto font-bold text-[#2378c9] text-[18px] sm:text-[24px] md:text-[30px] md:text-left text-center break-words leading-tight">
                          {review.name}
                        </span>

                        {review.socials && review.socials.length > 0 && (
                          <div className="flex justify-center md:justify-end items-center space-x-[12px] sm:space-x-[16px] shrink-0">
                            {review.socials.map((social, idx) => (
                              <a
                                key={idx}
                                href={social.href}
                                aria-label={social.ariaLabel || social.type || 'Social link'}
                                className="group flex justify-center items-center bg-[#e7e7e7] hover:bg-[#2378c9] rounded-full w-8 sm:w-[40px] h-8 sm:h-[40px] transition-colors duration-500"
                              >
                                <SocialIcon type={social.type} customIcon={social.icon} />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Кнопки навигации (скрыты на экранах меньше md) */}
            <button
              type="button"
              aria-label="Previous slide"
              className="hidden top-1/2 left-0 z-20 absolute md:flex justify-center items-center bg-[#5eb8f0] hover:bg-[#2378c9] shadow-md rounded-full w-[50px] h-[50px] text-white transition-colors -translate-y-1/2 duration-300 cursor-pointer reviews-swiper-prev"
            >
              <svg className="fill-none stroke-2 stroke-current w-6 h-6" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Next slide"
              className="hidden top-1/2 right-0 z-20 absolute md:flex justify-center items-center bg-[#5eb8f0] hover:bg-[#2378c9] shadow-md rounded-full w-[50px] h-[50px] text-white transition-colors -translate-y-1/2 duration-300 cursor-pointer reviews-swiper-next"
            >
              <svg className="fill-none stroke-2 stroke-current w-6 h-6" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Точки пагинации для мобильных */}
            <div className="md:hidden flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 reviews-swiper-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
}