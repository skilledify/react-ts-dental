import React from 'react';

// Интерфейс для отдельного преимущества
export interface FeatureItem {
  id: string | number;
  icon: string;
  title: React.ReactNode;
  description: string;
}

// Пропсы для компонента Features
export interface FeaturesProps {
  items?: FeatureItem[];
  className?: string;
}

// Данные по умолчанию (если пропсы не переданы)
const DEFAULT_FEATURES: FeatureItem[] = [
  {
    id: 1,
    icon: '../../src/assets/images/features-1.svg',
    title: (
      <>
        Круглосуточная <br className="hidden sm:inline" /> поддержка клиентов
      </>
    ),
    description: 'Чтобы записаться на прием или узнать больше об услугах, доступных',
  },
  {
    id: 2,
    icon: '../../src/assets/images/features-2.svg',
    title: 'Доступная стоматологическая помощь',
    description: 'Чтобы записаться на прием или узнать больше об услугах, доступных',
  },
  {
    id: 3,
    icon: '../../src/assets/images/features-3.svg',
    title: 'Команда талантливых врачей',
    description: 'Чтобы записаться на прием или узнать больше об услугах, доступных',
  },
];

export const Features: React.FC<FeaturesProps> = ({
  items = DEFAULT_FEATURES,
  className = '',
}) => {
  return (
    <section className={`s-features bg-[#dfeefc] py-[55px] lg:py-[94px] ${className}`}>
      <div className="mx-auto px-4 container">
        <div className="flex sm:flex-row flex-col sm:flex-wrap lg:flex-nowrap justify-between items-center sm:items-start gap-y-[40px] sm:gap-x-[5%] lg:gap-x-[70px] lg:gap-y-0 features-row">
          {items.map((item) => (
            <div
              key={item.id}
              className="mx-auto w-full sm:w-[45%] lg:w-1/3 max-w-[284px] sm:max-w-none lg:max-w-none text-center features-item"
            >
              {/* Иконка */}
              <div className="flex justify-center mb-[25px] features-icon">
                <img
                  src={item.icon}
                  alt={typeof item.title === 'string' ? item.title : 'Иконка преимущества'}
                  className="max-w-[85px] lg:max-w-[99px] h-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Заголовок */}
              <h3 className="mx-auto mb-[15px] max-w-[300px] font-bold text-[20px] text-gray-900 lg:text-[24px] leading-[1.3] features-title">
                {item.title}
              </h3>

              {/* Описание */}
              <p className="text-[#56565e] text-[15px] lg:text-[18px] leading-[1.3] features-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;