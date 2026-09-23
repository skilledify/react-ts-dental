import React from 'react';

export interface NewsItem {
  id: number | string;
  image: string;
  date: string;
  commentsCount: number;
  title: string;
  description: string;
  link: string;
}

interface NewsProps {
  sectionTitle?: string;
  items?: NewsItem[];
}

const DEFAULT_NEWS: NewsItem[] = [
  {
    id: 1,
    image: '../../src/assets/images/news-1.jpg',
    date: '05 ноября 2022',
    commentsCount: 0,
    title: 'Что стоматолог может сделать для ваших зубов',
    description:
      'Если они были измотаны, то и боль, и таблетку, и саму подушку, и саму боль надо беречь, в следующий раз ...',
    link: 'post.html',
  },
  {
    id: 2,
    image: '../../src/assets/images/news-2.jpg',
    date: '05 ноября 2022',
    commentsCount: 0,
    title: 'Как выбрать стоматологию и не ошибиться?',
    description:
      'Безусловно, существующая теория позволяет выполнить важные задания по разработке благоприятных перспектив...',
    link: 'post.html',
  },
  {
    id: 3,
    image: '../../src/assets/images/news-3.jpg',
    date: '05 ноября 2022',
    commentsCount: 0,
    title: 'Сильно болит зуб? Лечение в домашних условиях',
    description:
      'Учитывая ключевые сценарии поведения, выбранный нами инновационный путь напрямую зависит от поставленных...',
    link: 'post.html',
  },
  {
    id: 4,
    image: '../../src/assets/images/news-4.jpg',
    date: '05 ноября 2022',
    commentsCount: 0,
    title: 'Как спасти тетрациклиновые зубы?',
    description:
      'Но новая модель организационной деятельности прекрасно подходит для реализации распределения...',
    link: 'post.html',
  },
  {
    id: 5,
    image: '../../src/assets/images/news-5.jpg',
    date: '05 ноября 2022',
    commentsCount: 0,
    title: 'Как правильно чистить зубы? 15 советов',
    description:
      'Неопровержимые выводы, а также акционеры крупнейших компаний являются только методом...',
    link: 'post.html',
  },
  {
    id: 6,
    image: '../../src/assets/images/news-6.jpg',
    date: '05 ноября 2022',
    commentsCount: 0,
    title: 'Все что Вы хотели узнать про сознательную седацию',
    description:
      'Тщательные исследования конкурентов функционально разнесены на независимые элементы...',
    link: 'post.html',
  },
];

export const News: React.FC<NewsProps> = ({
  sectionTitle = 'Новости Dental Tooth',
  items = DEFAULT_NEWS,
}) => {
  return (
    <section className="py-[50px] lg:py-[100px] overflow-hidden">
      <div className="mx-auto px-4 container">
        {/* Заголовок */}
        <div className="mb-[30px] lg:mb-10">
          <h2 className="font-bold text-[#302d2d] text-[30px] min-[575px]:text-[40px] leading-[38px] min-[575px]:leading-[48px]">
            {sectionTitle}
          </h2>
        </div>

        {/* Контейнер горизонтального скролла на мобильных/планшетах (< 992px) */}
        <div className="max-lg:-mx-4 max-lg:px-4 max-lg:pb-6 max-lg:overflow-x-auto max-lg:snap-mandatory max-lg:snap-x">
          {/* 
            - До max-lg (до 992px): flex в одну линию с фиксированной/минимальной шириной карточки (300px)
            - На lg (от 992px): переключение на 3-колоночную сетку (grid)
          */}
          <div className="flex lg:gap-5 max-lg:gap-5 lg:grid lg:grid-cols-3 max-lg:w-max">
            {items.map((item) => (
              <article
                key={item.id}
                className="relative flex flex-col bg-[#f6f6f6] hover:shadow-lg p-[10px] min-[575px]:p-[15px] pb-[50px] min-[575px]:pb-[50px] rounded-[10px] min-[575px]:rounded-[20px] w-[300px] sm:w-[340px] lg:w-full transition-all duration-300 max-lg:snap-start shrink-0"
              >
                {/* Превью */}
                <div className="mb-[25px] rounded-[10px] min-[575px]:rounded-[19px] aspect-4/3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Тело карточки */}
                <div className="flex flex-col flex-1 px-2 min-[575px]:px-[15px] pb-2 min-[575px]:pb-[15px]">
                  {/* Верхняя линия (Дата / Комментарии) */}
                  <div className="flex justify-between items-center mb-[15px] text-[#a9a9a9] text-sm">
                    <span>{item.date}</span>
                    <span>
                      <strong className="font-bold text-[#302d2d]">
                        {item.commentsCount}
                      </strong>{' '}
                      комментариев
                    </span>
                  </div>

                  {/* Заголовок статьи */}
                  <h3 className="mb-4 font-semibold min-[575px]:text-[22px] text-xl leading-[1.2]">
                    <a
                      href={item.link}
                      className="text-[#302d2d] hover:text-[#5eb8f0] transition-colors"
                    >
                      {item.title}
                    </a>
                  </h3>

                  {/* Краткое описание */}
                  <div className="mb-[25px] text-[#56565e] text-sm min-[575px]:text-base leading-[18px] min-[575px]:leading-[1.3]">
                    {item.description}
                  </div>

                  {/* Кнопка "Читать далее" */}
                  <a
                    href={item.link}
                    className="bottom-[20px] left-1/2 absolute bg-[#5eb8f0] hover:bg-[#4ba3dc] shadow-sm p-[14px] min-[575px]:p-[15px] rounded-[30px] w-[calc(100%-32px)] min-[575px]:w-[calc(100%-60px)] font-medium text-white min-[575px]:text-[18px] text-base text-center active:scale-95 transition-colors -translate-x-1/2"
                  >
                    Читать далее
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;