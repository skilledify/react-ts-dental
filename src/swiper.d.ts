declare module 'swiper/react' {
  import React from 'react';
  import type { SwiperProps, SwiperSlideProps } from 'swiper/react';

  export const Swiper: React.FC<React.PropsWithChildren<SwiperProps>>;
  export const SwiperSlide: React.FC<React.PropsWithChildren<SwiperSlideProps>>;
}

declare module 'swiper/modules' {
  export const Navigation: any;
  export const Pagination: any;
  export const A11y: any;
  export const Autoplay: any;
  export const EffectFade: any;
}