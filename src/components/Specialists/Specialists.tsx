import React from 'react';

export interface Specialist {
  id: string | number;
  name: string;
  profession: string;
  image: string;
  link?: string;
}

interface SpecialistsProps {
  title?: string;
  description?: string;
  specialists?: Specialist[];
}

const DEFAULT_SPECIALISTS: Specialist[] = [
  {
    id: 1,
    name: 'Борис Каменский',
    profession: 'Стоматолог',
    image: '../../src/assets/images/specialists-1.jpg',
    link: '#',
  },
  {
    id: 2,
    name: 'Михаил Гуревич',
    profession: 'Стоматолог',
    image: '../../src/assets/images/specialists-2.jpg',
    link: '#',
  },
  {
    id: 3,
    name: 'София Блок',
    profession: 'Стоматолог',
    image: '../../src/assets/images/specialists-3.jpg',
    link: '#',
  },
  {
    id: 4,
    name: 'Елена Николаева',
    profession: 'Стоматолог',
    image: '../../src/assets/images/specialists-4.jpg',
    link: '#',
  },
];

export const Specialists: React.FC<SpecialistsProps> = ({
  title = 'Наши специалисты',
  description = 'Мы построили нашу стоматологию на прочных опорах 22 хирургов MDS. В нашей команде работают опытные специалисты с многолетним опытом работы.',
  specialists = DEFAULT_SPECIALISTS,
}) => {
  return (
    <section className="py-[50px] lg:py-[90px] s-specialists">
      <div className="mx-auto px-4 container">
        {/* Title Block */}
        <div className="mb-8 lg:mb-10 def-title-wrapper">
          <h2 className="mb-3 font-bold text-[30px] lg:text-[40px] leading-[38px] lg:leading-[48px] def-title">
            {title}
          </h2>
          {description && (
            <div className="max-w-[800px] text-[12px] text-gray-600 sm:text-[14px] leading-[1.5] def-description">
              {description}
            </div>
          )}
        </div>

        {/* Grid / List of Specialists */}
        <div className="gap-4 sm:gap-[18px] lg:gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 specialists-row">
          {specialists.map((item) => (
            <a
              key={item.id}
              href={item.link || '#'}
              className="block bg-[#2378c9] shadow-[0_0_8px_-1px_rgba(29,28,28,0.28)] rounded-[10px] sm:rounded-[20px] overflow-hidden transition-transform hover:-translate-y-1 duration-300 specialists-item"
            >
              <div className="w-full overflow-hidden specialists-image">
                <img
                  src={item.image}
                  alt={item.name}
                  className="display-block w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-[15px] sm:p-5 lg:p-[22px_24px] text-white specialists-footer">
                <div className="mb-[7px] font-bold text-[16px] lg:text-[18px] specialists-name">
                  {item.name}
                </div>
                <div className="text-[12px] lg:text-[14px] specialists-profi">
                  {item.profession}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialists;