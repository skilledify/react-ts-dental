
// import React from 'react';

// export interface AboutProps {
//   title?: React.ReactNode; // Разрешаем передавать как строку, так и JSX
//   description?: string;
//   listTitle?: string;
//   listItems?: string[];
//   imageSrc?: string;
//   imageAlt?: string;
// }

// const defaultListItems: string[] = [
//   'Отбеливание зубов',
//   'Апноэ во сне',
//   'Лечение десен',
//   'Дизайн улыбки',
// ];

// // Вспомогательная функция для подсветки текста "Dental Tooth"
// const highlightTitle = (text: string) => {
//   const parts = text.split(/(Dental Tooth)/g);
//   return parts.map((part, index) =>
//     part === 'Dental Tooth' ? (
//       <span key={index} className="text-[#2378c9] text-[32px] lg:text-[40px]">
//         {part}
//       </span>
//     ) : (
//       part
//     )
//   );
// };

// export const About: React.FC<AboutProps> = ({
//   title = 'Стоматологическая клиника Dental Tooth',
//   description = 'Мы предлагаем широкий спектр стоматологических услуг в общей клинике. Вам будет предоставлен комплексный план лечения до начала любых стоматологических услуг. Чтобы записаться на прием или узнать больше об услугах, доступных в стоматологической клинике, пожалуйста, позвоните по телефону',
//   listTitle = 'Мы предлагаем услуги:',
//   listItems = defaultListItems,
//   imageSrc = '../../src/assets/images/about-bg.jpg',
//   imageAlt = 'О стоматологической клинике Dental Tooth',
// }) => {
//   return (
//     <section id="services" className="bg-white py-[48px] lg:py-[110px]">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
//         <div className="flex lg:flex-row flex-col items-start lg:items-center gap-[30px] lg:gap-[60px]">
          
//           {/* Левый блок (Изображение) */}
//           <div className="mb-[48px] lg:mb-0 w-full lg:w-auto shrink-0">
//             <img
//               src={imageSrc}
//               alt={imageAlt}
//               className="shadow-sm rounded-xl w-full max-w-none lg:max-w-[488px] h-auto object-cover"
//               loading="lazy"
//             />
//           </div>

//           {/* Правый блок (Контент) */}
//           <div className="w-full max-w-[680px]">
//             {title && (
//               <h2 className="mb-4 lg:mb-6 font-bold text-[32px] text-gray-900 sm:text-[36px] lg:text-[40px] text-left leading-[38px] lg:leading-[56px]">
//                 {typeof title === 'string' ? highlightTitle(title) : title}
//               </h2>
//             )}

//             {/* Исправлена опечатка в классе (было text-[#6b6868]-400) */}
//             <p className="mb-[22px] text-[#6b6868] text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.5] lg:leading-[28px">
//               {description}
//             </p>

//             {listTitle && (
//               <h3 className="mb-[18px] font-bold text-[18px] text-gray-900 lg:text-[18px]">
//                 {listTitle}
//               </h3>
//             )}

//             {listItems.length > 0 && (
//               <div className="w-full">
//                 <ul className="gap-x-4 gap-y-[16px] sm:gap-y-[20px] grid grid-cols-1 sm:grid-cols-2 m-0 p-0 list-none">
//                   {listItems.map((item, index) => (
//                     <li
//                       key={index}
//                       className="flex items-center text-[18px] text-gray-800 sm:text-[20px] lg:text-[20px]"
//                     >
//                       <span className="inline-block bg-[#2378c9] mr-[10px] sm:mr-[20px] rounded-full w-[10px] sm:w-[14px] h-[10px] sm:h-[14px] shrink-0" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';

export interface AboutProps {
  title?: React.ReactNode;
  description?: string;
  listTitle?: string;
  listItems?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const defaultListItems: string[] = [
  'Отбеливание зубов',
  'Апноэ во сне',
  'Лечение десен',
  'Дизайн улыбки',
];

// Вспомогательная функция для подсветки текста "Dental Tooth"
const highlightTitle = (text: string) => {
  const parts = text.split(/(Dental Tooth)/g);
  return parts.map((part, index) =>
    part === 'Dental Tooth' ? (
      <span 
        key={index} 
        className="inline-block text-[#2378c9] text-[28px] sm:text-[32px] lg:text-[40px] whitespace-nowrap"
      >
        {part}
      </span>
    ) : (
      part
    )
  );
};

export const About: React.FC<AboutProps> = ({
  title = 'Стоматологическая клиника Dental Tooth',
  description = 'Мы предлагаем широкий спектр стоматологических услуг в общей клинике. Вам будет предоставлен комплексный план лечения до начала любых стоматологических услуг. Чтобы записаться на прием или узнать больше об услугах, доступных в стоматологической клинике, пожалуйста, позвоните по телефону',
  listTitle = 'Мы предлагаем услуги:',
  listItems = defaultListItems,
  imageSrc = '../../src/assets/images/about-bg.jpg',
  imageAlt = 'О стоматологической клинике Dental Tooth',
}) => {
  return (
    <section id="services" className="bg-white py-[48px] lg:py-[110px]">
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
              <h2 className="mb-4 lg:mb-6 font-bold text-[26px] text-gray-900 sm:text-[32px] lg:text-[40px] text-left leading-tight">
                {typeof title === 'string' ? highlightTitle(title) : title}
              </h2>
            )}

            <p className="mb-[22px] text-[#6b6868] text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.5] lg:leading-[28px]">
              {description}
            </p>

            {listTitle && (
              <h3 className="mb-[18px] font-bold text-[18px] text-gray-900 sm:text-[20px] text-left">
                {listTitle}
              </h3>
            )}

            {listItems.length > 0 && (
              <div className="w-full">
                <ul className="flex flex-wrap justify-start gap-x-8 gap-y-4 m-0 p-0 list-none">
                  {listItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-start items-center w-full sm:w-[calc(50%-16px)] min-w-max"
                    >
                      <span className="inline-block bg-[#2378c9] mr-3 sm:mr-4 rounded-full w-[10px] sm:w-[12px] h-[10px] sm:h-[12px] shrink-0" />
                      <span className="font-medium text-[16px] text-gray-800 sm:text-[18px] lg:text-[20px] whitespace-nowrap">
                        {item}
                      </span>
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