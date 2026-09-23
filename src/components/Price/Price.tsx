import React from 'react';

export interface PriceItem {
  id?: string | number;
  title: string;
  price: string;
}

export interface PriceProps {
  title?: string;
  description?: string;
  items?: PriceItem[];
  bgImageUrl?: string;
}

const DEFAULT_PRICE_ITEMS: PriceItem[] = [
  { id: 1, title: 'Отбеливание зубов', price: '120$' },
  { id: 2, title: 'Реставрации', price: '200$' },
  { id: 3, title: 'Имплантационная стоматология', price: '80$' },
  { id: 4, title: 'Лечение десен', price: '150$' },
  { id: 5, title: 'Сознательная седация', price: '200$' },
  { id: 6, title: 'Апноэ во сне', price: '150$' },
];

export const Price: React.FC<PriceProps> = ({
  title = 'Стоимость лечения от',
  description = 'Доступные цены на каждую процедуру',
  items = DEFAULT_PRICE_ITEMS,
  bgImageUrl = '/../../src/assets/images/price-image.png',
}) => {
  return (
    <section className="relative bg-[linear-gradient(257.92deg,#dfeefc_11.01%,rgba(167,210,251,0.92)_92.77%)] py-[50px] sm:py-[75px] overflow-hidden">
      {/* Декоративное фоновое изображение (скрыто на экранах < 575px) */}
      {bgImageUrl && (
        <div
          aria-hidden="true"
          className="hidden sm:block top-0 right-0 absolute bg-cover bg-no-repeat w-[731px] h-[731px] aria-hidden:pointer-events-none"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        />
      )}

      <div className="mx-auto px-4 container">
        <div className="inline-block z-10 relative bg-[#5eb8f0] p-[40px_30px] sm:p-[50px_60px] rounded-[10px] sm:rounded-[20px] w-full sm:w-auto text-white">
          {/* Блок заголовка и описания */}
          <div className="mb-[50px] sm:mb-[70px]">
            <h2 className="mb-[5px] font-bold text-[22px] min-[576px]:text-[30px] lg:text-[40px] leading-tight min-[576px]:leading-[38px] lg:leading-[48px]">
              {title}
            </h2>
            <div className="opacity-90 text-[12px] min-[576px]:text-[14px] lg:text-[16px]">
              {description}
            </div>
          </div>

          {/* Список прайс-листа */}
          <ul className="flex flex-col gap-[28px]">
            {items.map((item, index) => (
              <li
                key={item.id ?? index}
                className="flex justify-between items-center pb-[15px] border-white border-b border-dashed text-[12px] sm:text-[16px]"
              >
                <span>{item.title}</span>
                <span className="font-bold">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Price;