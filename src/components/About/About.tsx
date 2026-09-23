import React from 'react';

export interface AboutProps {
  title?: string;
  description?: string;
  listTitle?: string;
  listItems?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const defaultListItems: string[] = [
  'Квалифицированные врачи',
  'Современное оборудование',
  'Безболезненное лечение',
  'Гарантия качества',
  'Индивидуальный подход',
  'Доступные цены',
];

export const About: React.FC<AboutProps> = ({
  title = 'О нашей клинике',
  description = 'Наша стоматологическая клиника предлагает полный спектр высококачественных услуг. Мы используем только современные технологии и материалы, чтобы обеспечивать максимальный комфорт и здоровье вашей улыбки.',
  listTitle = 'Почему выбирают нас:',
  listItems = defaultListItems,
  imageSrc = '../../src/assets/images/about-bg.jpg',
  imageAlt = 'О стоматологической клинике Dental Tooth',
}) => {
  return (
    <section className="bg-white py-[48px] lg:py-[110px]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="flex lg:flex-row flex-col items-start lg:items-center gap-[30px] lg:gap-[60px]">
          
          {/* Левый блок (Изображение) */}
          <div className="mb-[48px] lg:mb-0 w-full lg:w-auto shrink-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="shadow-sm rounded-xl w-full max-w-none lg:max-w-[488px] h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Правый блок (Контент) */}
          <div className="w-full max-w-[680px]">
            {title && (
              <h2 className="mb-4 lg:mb-6 font-bold text-[30px] text-gray-900 lg:text-[48px] text-left leading-[38px] lg:leading-[56px]">
                {title}
              </h2>
            )}

            <p className="mb-[22px] text-[#6b6868] text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.5] lg:leading-[28px]">
              {description}
            </p>

            {listTitle && (
              <h3 className="mb-[18px] font-medium text-[16px] text-gray-900 lg:text-[18px]">
                {listTitle}
              </h3>
            )}

            {listItems.length > 0 && (
              <div className="w-full">
                <ul className="gap-x-4 gap-y-[16px] sm:gap-y-[20px] grid grid-cols-1 sm:grid-cols-2 m-0 p-0 list-none">
                  {listItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[14px] text-gray-800 sm:text-[16px] lg:text-[20px]"
                    >
                      <span className="inline-block bg-[#2378c9] mr-[10px] sm:mr-[22px] rounded-full w-[10px] sm:w-[14px] h-[10px] sm:h-[14px] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;