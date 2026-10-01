
import React from 'react';
import { Link } from 'react-router'; // Если вы используете react-router-dom, импортируйте из 'react-router-dom'
import { AppRoutes } from '../../constants/global.constants'; // Убедитесь, что путь к файлу корректен

// Импортируем изображения как модули
import girlImg from '../../assets/images/girl.png';
import logoImg from '../../assets/images/banner-logo.png';

export const Banner: React.FC = () => {
  return (
    <section id="hero" className="bg-[#0e6eaa] py-10 lg:py-0 text-white banner">
      <div className="mx-auto px-4 banner__container container">
        <div className="relative flex lg:flex-row flex-col items-center banner__row">
          
          {/* Левый блок с текстом */}
          <div className="mb-[30px] lg:mb-0 max-w-[485px] banner__left">
            <div className="before:block before:top-1/2 before:left-[calc(-100%-16px)] before:absolute relative before:bg-[#c5c1fe] mb-[10px] before:w-full before:h-[1px] text-[#c5c1fe] text-[14px] before:content-[''] before:-translate-y-1/2 banner__subtitle">
              Стоматологическая клиника Dental Tooth
            </div>
            
            <h1 className="mb-[20px] font-bold text-[40px] lg:text-[62px] leading-tight banner__title">
              Безболезненное лечение зубов
            </h1>
            
            <div className="mb-[25px] text-[16px] lg:text-[18px] leading-[23px] banner__description">
              Талантливая команда стоматологов, признанных за <br className="hidden sm:inline" />
              высокое качество стоматологических процедур.
            </div>
            
            {/* Используем Link вместо <a> */}
            <Link 
              to={AppRoutes.CONTACTSPAGE} 
              className="inline-block -bottom-[20px] left-1/2 z-10 lg:static absolute bg-[#5eb8f0] px-[44px] py-[18px] rounded-[28px] text-[18px] text-white text-center whitespace-nowrap -translate-x-1/2 lg:translate-x-0 banner__btn"
            >
              Записаться на прием
            </Link>
          </div>

          {/* Правый блок с изображениями */}
          <div className="relative mx-auto lg:mr-[154px] lg:ml-auto banner__right">
            <img 
              className="block -left-[20px] lg:left-0 z-[1] relative w-full max-w-[330px] lg:max-w-[483px] banner__image" 
              src={girlImg} 
              alt="Girl" 
            />
            
            <img 
              className="top-[100px] lg:top-[175px] -right-[90px] z-0 absolute w-full max-w-[340px] banner__logo" 
              src={logoImg} 
              alt="Banner logo" 
            />
            
            <span className="block top-[330px] left-1/2 absolute bg-white rounded-full w-[50px] lg:w-[218px] h-[22px] -translate-x-1/2 banner__circle [box-shadow:0px_4px_133px_239px_rgba(255,255,255,0.1)]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;