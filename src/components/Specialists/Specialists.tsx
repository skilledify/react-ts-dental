
import React from 'react';
import { useNavigate } from 'react-router';

import { AppRoutes } from '../../constants/global.constants';

import spec1 from '../../assets/images/specialists-1.jpg';
import spec2 from '../../assets/images/specialists-2.jpg';
import spec3 from '../../assets/images/specialists-3.jpg';
import spec4 from '../../assets/images/specialists-4.jpg';

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
    image: spec1,
    link: AppRoutes.DENTISTPAGE.replace(':id', '1'),
  },
 {
    id: 2,
    name: 'Михаил Гуревич',
    profession: 'Стоматолог',
    image: spec2,
    link: AppRoutes.DENTISTPAGE.replace(':id', '2'),
  },
 {
    id: 3,
    name: 'София Блок',
    profession: 'Стоматолог',
    image: spec3,
    link: AppRoutes.DENTISTPAGE.replace(':id', '3'),
  },
 {
    id: 4,
    name: 'Елена Николаева',
    profession: 'Стоматолог',
    image: spec4,
    link: AppRoutes.DENTISTPAGE.replace(':id', '4'),
  },
];

export const Specialists: React.FC<SpecialistsProps> = ( {
  title = 'Наши специалисты',
  description = 'Мы построили нашу стоматологию на прочных опорах 22 хирургов MDS. В нашей команде работают опытные специалисты с многолетним опытом работы.',
  specialists = DEFAULT_SPECIALISTS,
}) => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent, item: Specialist) => {
    e.preventDefault();
    e.stopPropagation();

    const targetPath = item.link && item.link !== '#'
      ? item.link
      : AppRoutes.DENTISTPAGE.replace(':id', String(item.id));

    navigate(targetPath);
  };

  return (
    <section id="specialists" className="py-[50px] lg:py-[90px] text-center s-specialists">
      <div className="mx-auto px-4 container">
        {}
        <div className="mb-8 lg:mb-10 def-title-wrapper">
          <h2 className="mb-3 font-bold text-[30px] lg:text-[40px] leading-[38px] lg:leading-[48px] def-title">
            {title}
          </h2>
          {description && (
            <div className="mx-auto max-w-[800px] text-[14px] text-gray-600 sm:text-[18px] text-center leading-[1.5] def-description">
              {description}
            </div>
          )}
        </div>

        {}
        <div className="gap-x-4 gap-y-6 sm:gap-x-[18px] sm:gap-y-5 lg:gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 specialists-row">
          {specialists.map((item) => (
            <div
              key={item.id}
              onClick={(e) => handleCardClick(e, item)}
              className="block bg-[#2378c9] shadow-[0_0_8px_-1px_rgba(29,28,28,0.28)] rounded-[10px] sm:rounded-[20px] overflow-hidden transition-transform md:hover:-translate-y-1 duration-300 cursor-pointer specialists-item"
            >
              <div className="w-full overflow-hidden specialists-image">
                <img
                  src={item.image}
                  alt={item.name}
                  className="block w-full h-auto object-cover pointer-events-none"
                  loading="lazy"
                />
              </div>
              <div className="p-[15px] sm:p-5 lg:p-[22px_24px] text-white specialists-footer">
                <div className="mb-[7px] font-bold text-[16px] lg:text-[18px] specialists-name">
                  {item.name}
                </div>
                <div className="text-[14px] lg:text-[16px] specialists-profi">
                  {item.profession}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialists;
