// import React from 'react';

// // Типы данных для пропсов (для гибкости и переиспользования)
// export interface EducationItem {
//   id: string | number;
//   text: string;
// }

// export interface DentistProps {
//   name?: string;
//   photoUrl?: string;
//   photoAlt?: string;
//   education?: EducationItem[];
//   experience?: string[];
//   schedule?: {
//     day: string;
//     hours: string;
//   }[];
//   phone?: string;
//   email?: string;
//   socials?: {
//     twitter?: string;
//     instagram?: string;
//     vk?: string;
//   };
// }

// const Dentist: React.FC<DentistProps> = ({
//   name = 'Борис Каменский',
//   photoUrl = '../../src/assets/../../src/assets/images/dentist-igor.jpg',
//   photoAlt = 'Борис Каменский',
//   education = [
//     { id: 1, text: 'Д.М.Д. из XYZ Post Graduate Institute of Dental dciences. Австралия' },
//     { id: 2, text: 'М.С.К. из XYZ Post Graduate Institute of Dental dciences. Австралия' },
//     { id: 3, text: 'КАНДИДАТ НАУК. из XYZ Post Graduate Institute of Dental dciences. Австралия' },
//   ],
//   experience = ['Июнь 2015 г. Более 10 лет опыта работы в стоматологии в качестве Д.М.Д'],
//   schedule = [
//     { day: 'Пятница', hours: 'с 17:00 до 19:00' },
//     { day: 'Суббота', hours: 'с 16:00 до 19:00' },
//   ],
//   phone = '+7 (495)000 00 00',
//   email = 'boriskamensky@gmail.com',
//   socials = {
//     twitter: '#',
//     instagram: '#',
//     vk: '#',
//   },
// }) => {
//   return (
//     <section className="py-[60px] font-sans text-[#302d2d]">
//       <div className="mx-auto px-5 max-w-[1200px]">
        
//         {/* Верхняя часть: Фото и Информация о враче */}
//         <div className="flex md:flex-row flex-col items-center md:items-start gap-8 md:gap-0 mb-[70px]">
          
//           {/* Фото врача */}
//           <div className="shadow-[-1px_1px_11px_3px_rgba(46,44,44,0.21)] md:mr-[64px] rounded-[20px] w-full md:w-auto md:min-w-[400px] overflow-hidden shrink-0">
//             <img
//               src={photoUrl}
//               alt={photoAlt}
//               className="block w-full h-auto max-h-[500px] md:max-h-none object-cover object-top"
//             />
//           </div>

//           {/* Инфо о враче */}
//           <div className="flex-1">
//             <h1 className="mb-8 font-normal text-[#302d2d] text-[36px] sm:text-[42px] md:text-[52px] leading-tight">
//               {name}
//             </h1>

//             {/* Образование */}
//             <div className="mb-[32px] text-[#56565e]">
//               <h3 className="mb-4 font-bold text-[#302d2d] text-[22px]">
//                 Образование и квалификация
//               </h3>
//               <ul className="space-y-[10px]">
//                 {education.map((item) => (
//                   <li key={item.id} className="flex items-start text-[18px] leading-[1.5]">
//                     <span className="inline-block bg-[#5eb8f0] mt-[9px] mr-[10px] rounded-full w-[9px] h-[9px] shrink-0" />
//                     <span>{item.text}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Опыт */}
//             <div className="mb-[32px] text-[#56565e]">
//               <h3 className="mb-4 font-bold text-[#302d2d] text-[22px]">
//                 Опыт
//               </h3>
//               <ul className="space-y-[10px]">
//                 {experience.map((exp, idx) => (
//                   <li key={idx} className="flex items-start text-[18px] leading-[1.5]">
//                     <span className="inline-block bg-[#5eb8f0] mt-[9px] mr-[10px] rounded-full w-[9px] h-[9px] shrink-0" />
//                     <span>{exp}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* График работы */}
//             <div className="text-[#56565e]">
//               <h3 className="mb-4 font-bold text-[#302d2d] text-[22px]">
//                 График работы:
//               </h3>
//               <div className="space-y-[5px]">
//                 {schedule.map((item, idx) => (
//                   <div key={idx} className="text-[18px] leading-[1.5]">
//                     {item.day}: {item.hours}
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>

// {/* Контакты врача */}
// <div className="gap-5 grid grid-cols-1 md:grid-cols-3">

//   {/* Телефон */}
//   <div className="flex flex-col justify-center items-center bg-[#54a0cf] px-[30px] lg:px-[50px] py-10 md:py-[78px] rounded-[20px] text-white text-center">
//     <div className="mb-5">
//       <img src="../../src/assets/images/phone.svg" alt="Телефон" className="w-[35px] h-auto" />
//     </div>
//     <div className="mb-[15px] font-bold text-[24px]">Наш телефон</div>
//     <div className="text-[18px]">
//       <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="text-white hover:underline">
//         {phone}
//       </a>
//     </div>
//   </div>

// {/* Email */}
// <div className="@container flex flex-col justify-center items-center bg-[#29a9f9] px-4 sm:px-[30px] lg:px-[50px] py-10 md:py-[78px] rounded-[20px] text-white text-center">
//   <div className="mb-5">
//     <img src="../../src/assets/images/envelope.svg" alt="Email" className="w-[35px] h-auto" />
//   </div>
//   <div className="mb-[15px] font-bold text-[24px]">Email</div>
//   <div className="w-full overflow-hidden">
//     <a
//       href={`mailto:${email}`}
//       className="inline-block max-w-full text-[clamp(12px,4.2cqw,18px)] text-white hover:underline whitespace-nowrap transition-all"
//     >
//       {email}
//     </a>
//   </div>
// </div>

//   {/* Социальные сети */}
//   <div className="flex flex-col justify-center items-center bg-[#328dc6] px-[30px] lg:px-[50px] py-10 md:py-[78px] rounded-[20px] text-white text-center">
//     <div className="mb-5">
//       <img src="../../src/assets/images/molekula.svg" alt="Мы в социальных сетях" className="w-[35px] h-auto" />
//     </div>
//     <div className="mb-[15px] font-bold text-[24px]">Социальные сети</div>
//     <div className="text-[18px]">
//       <div className="flex justify-center items-center gap-5 mt-[5px]">
//         {socials.twitter && (
//           <a href={socials.twitter} aria-label="Twitter" className="hover:opacity-80 transition-opacity">
//             <img src="../../src/assets/images/twitter.svg" alt="Twitter" className="w-auto max-w-[22px] h-auto" />
//           </a>
//         )}
//         {socials.instagram && (
//           <a href={socials.instagram} aria-label="Instagram" className="hover:opacity-80 transition-opacity">
//             <img src="../../src/assets/images/instagram.svg" alt="Instagram" className="w-auto max-w-[22px] h-auto" />
//           </a>
//         )}
//         {socials.vk && (
//           <a href={socials.vk} aria-label="Vk" className="hover:opacity-80 transition-opacity">
//             <img src="../../src/assets/images/vk.svg" alt="Vk" className="w-auto max-w-[22px] h-auto" />
//           </a>
//         )}
//       </div>
//     </div>
//   </div>

// </div>

//       </div>
//     </section>
//   );
// };

// export default Dentist;

import React from 'react';

// Импорт изображений для сборщика (Vite / Webpack)
import defaultDoctorPhoto from '../../assets/images/dentist-igor.jpg';
import phoneIcon from '../../assets/images/phone.svg';
import envelopeIcon from '../../assets/images/envelope.svg';
import molekulaIcon from '../../assets/images/molekula.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import vkIcon from '../../assets/images/vk.svg';

// Типы данных для пропсов
export interface EducationItem {
  id: string | number;
  text: string;
}

export interface DentistProps {
  name?: string;
  photoUrl?: string;
  photoAlt?: string;
  education?: EducationItem[];
  experience?: string[];
  schedule?: {
    day: string;
    hours: string;
  }[];
  phone?: string;
  email?: string;
  socials?: {
    twitter?: string;
    instagram?: string;
    vk?: string;
  };
}

const Dentist: React.FC<DentistProps> = ({
  name = 'Борис Каменский',
  photoUrl = defaultDoctorPhoto,
  photoAlt = 'Борис Каменский',
  education = [
    { id: 1, text: 'Д.М.Д. из XYZ Post Graduate Institute of Dental dciences. Австралия' },
    { id: 2, text: 'М.С.К. из XYZ Post Graduate Institute of Dental dciences. Австралия' },
    { id: 3, text: 'КАНДИДАТ НАУК. из XYZ Post Graduate Institute of Dental dciences. Австралия' },
  ],
  experience = ['Июнь 2015 г. Более 10 лет опыта работы в стоматологии в качестве Д.М.Д'],
  schedule = [
    { day: 'Пятница', hours: 'с 17:00 до 19:00' },
    { day: 'Суббота', hours: 'с 16:00 до 19:00' },
  ],
  phone = '+7 (495)000 00 00',
  email = 'boriskamensky@gmail.com',
  socials = {
    twitter: '#',
    instagram: '#',
    vk: '#',
  },
}) => {
  return (
    <section className="py-[60px] font-sans text-[#302d2d]">
      <div className="mx-auto px-5 max-w-[1200px]">
        
        {/* Верхняя часть: Фото и Информация о враче */}
        <div className="flex md:flex-row flex-col items-center md:items-start gap-8 md:gap-0 mb-[70px]">
          
          {/* Фото врача */}
          <div className="shadow-[-1px_1px_11px_3px_rgba(46,44,44,0.21)] md:mr-[64px] rounded-[20px] w-full md:w-auto md:min-w-[400px] overflow-hidden shrink-0">
            <img
              src={photoUrl}
              alt={photoAlt}
              className="block w-full h-auto max-h-[500px] md:max-h-none object-cover object-top"
            />
          </div>

          {/* Инфо о враче */}
          <div className="flex-1">
            <h1 className="mb-8 font-normal text-[#302d2d] text-[36px] sm:text-[42px] md:text-[52px] leading-tight">
              {name}
            </h1>

            {/* Образование */}
            <div className="mb-[32px] text-[#56565e]">
              <h3 className="mb-4 font-bold text-[#302d2d] text-[22px]">
                Образование и квалификация
              </h3>
              <ul className="space-y-[10px]">
                {education.map((item) => (
                  <li key={item.id} className="flex items-start text-[18px] leading-[1.5]">
                    <span className="inline-block bg-[#5eb8f0] mt-[9px] mr-[10px] rounded-full w-[9px] h-[9px] shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Опыт */}
            <div className="mb-[32px] text-[#56565e]">
              <h3 className="mb-4 font-bold text-[#302d2d] text-[22px]">
                Опыт
              </h3>
              <ul className="space-y-[10px]">
                {experience.map((exp, idx) => (
                  <li key={idx} className="flex items-start text-[18px] leading-[1.5]">
                    <span className="inline-block bg-[#5eb8f0] mt-[9px] mr-[10px] rounded-full w-[9px] h-[9px] shrink-0" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* График работы */}
            <div className="text-[#56565e]">
              <h3 className="mb-4 font-bold text-[#302d2d] text-[22px]">
                График работы:
              </h3>
              <div className="space-y-[5px]">
                {schedule.map((item, idx) => (
                  <div key={idx} className="text-[18px] leading-[1.5]">
                    {item.day}: {item.hours}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Контакты врача */}
        <div className="gap-5 grid grid-cols-1 md:grid-cols-3">

          {/* Телефон */}
          <div className="flex flex-col justify-center items-center bg-[#54a0cf] px-[30px] lg:px-[50px] py-10 md:py-[78px] rounded-[20px] text-white text-center">
            <div className="mb-5">
              <img src={phoneIcon} alt="Телефон" className="w-[35px] h-auto" />
            </div>
            <div className="mb-[15px] font-bold text-[24px]">Наш телефон</div>
            <div className="text-[18px]">
              <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="text-white hover:underline">
                {phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="@container flex flex-col justify-center items-center bg-[#29a9f9] px-4 sm:px-[30px] lg:px-[50px] py-10 md:py-[78px] rounded-[20px] text-white text-center">
            <div className="mb-5">
              <img src={envelopeIcon} alt="Email" className="w-[35px] h-auto" />
            </div>
            <div className="mb-[15px] font-bold text-[24px]">Email</div>
            <div className="w-full overflow-hidden">
              <a
                href={`mailto:${email}`}
                className="inline-block max-w-full text-[clamp(12px,4.2cqw,18px)] text-white hover:underline whitespace-nowrap transition-all"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Социальные сети */}
          <div className="flex flex-col justify-center items-center bg-[#328dc6] px-[30px] lg:px-[50px] py-10 md:py-[78px] rounded-[20px] text-white text-center">
            <div className="mb-5">
              <img src={molekulaIcon} alt="Мы в социальных сетях" className="w-[35px] h-auto" />
            </div>
            <div className="mb-[15px] font-bold text-[24px]">Социальные сети</div>
            <div className="text-[18px]">
              <div className="flex justify-center items-center gap-5 mt-[5px]">
                {socials.twitter && (
                  <a href={socials.twitter} aria-label="Twitter" className="hover:opacity-80 transition-opacity">
                    <img src={twitterIcon} alt="Twitter" className="w-auto max-w-[22px] h-auto" />
                  </a>
                )}
                {socials.instagram && (
                  <a href={socials.instagram} aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                    <img src={instagramIcon} alt="Instagram" className="w-auto max-w-[22px] h-auto" />
                  </a>
                )}
                {socials.vk && (
                  <a href={socials.vk} aria-label="Vk" className="hover:opacity-80 transition-opacity">
                    <img src={vkIcon} alt="Vk" className="w-auto max-w-[22px] h-auto" />
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Dentist;