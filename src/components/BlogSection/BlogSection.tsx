

import React from 'react';
import { Link, useNavigate } from 'react-router';
import { AppRoutes } from '../../constants/global.constants';


import news1 from '../../assets/images/news-1.jpg';
import news2 from '../../assets/images/news-2.jpg';
import news3 from '../../assets/images/news-3.jpg';
import news4 from '../../assets/images/news-4.jpg';
import news5 from '../../assets/images/news-5.jpg';
import news6 from '../../assets/images/news-6.jpg';

export interface BlogSectionPost {
  id: string | number;
  title: string;
  description: string;
  date: string;
  commentsCount: number;
  imageUrl: string;
}

const BLOG_SECTION_POSTS: BlogSectionPost[] = [
 {
    id: 1,
    title: 'Что стоматолог может сделать для ваших зубов',
    description:
      'Если они были измотаны, то и боль, и таблетку, и саму подушку, и саму боль надо беречь, в следующий раз ...',
    date: '05 ноября 2022',
    commentsCount: 0,
    imageUrl: news1,
  },
 {
    id: 2,
    title: 'Как выбрать стоматологию и не ошибиться?',
    description:
      'Безусловно, существующая теория позволяет выполнить важные задания по разработке благоприятных перспектив...',
    date: '05 ноября 2022',
    commentsCount: 0,
    imageUrl: news2,
  },
 {
    id: 3,
    title: 'Сильно болит зуб? Лечение в домашних условиях',
    description:
      'Учитывая ключевые сценарии поведения, выбранный нами инновационный путь напрямую зависит от поставленных...',
    date: '05 ноября 2022',
    commentsCount: 0,
    imageUrl: news3,
  },
 {
    id: 4,
    title: 'Как спасти тетрациклиновые зубы?',
    description:
      'Но новая модель организационной деятельности прекрасно подходит для реализации распределения...',
    date: '05 ноября 2022',
    commentsCount: 0,
    imageUrl: news4,
  },
 {
    id: 5,
    title: 'Как правильно чистить зубы? 15 советов',
    description:
      'Неопровержимые выводы, а также акционеры крупнейших компаний являются только методом...',
    date: '05 ноября 2022',
    commentsCount: 0,
    imageUrl: news5,
  },
 {
    id: 6,
    title: 'Все что Вы хотели узнать про сознательную седацию',
    description:
      'Тщательные исследования конкурентов функционально разнесены на независимые элементы...',
    date: '05 ноября 2022',
    commentsCount: 0,
    imageUrl: news6,
  },
];

interface BlogSectionProps {
  posts?: BlogSectionPost[];
  title?: string;
  isHomePage?: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ( {
  posts = BLOG_SECTION_POSTS,
  title = 'Блог',
  isHomePage = false,
}) => {
  const navigate = useNavigate();


  const displayedPosts = isHomePage ? posts.slice(0, 3) : posts;

  return (
    <section id="blog" className="py-[60px] text-[#302d2d] scroll-mt-[90px]">
      <div className="mx-auto px-5 max-w-[1200px]">
        {}
        <div className="mx-auto mb-11 max-w-[470px] text-center">
          <h2 className="font-normal text-[36px] sm:text-[46px] leading-tight">
            {title}
          </h2>
        </div>

        {}
        <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedPosts.map((post) => (
            <article
              key={post.id}
              className="relative bg-[#f6f6f6] shadow-sm hover:shadow-md p-[15px] pb-[85px] rounded-[20px] transition-all duration-300"
            >
              {}
              <Link
                to={`/blog/${post.id}`}
                className="block mb-[25px] rounded-[19px] aspect-[4/3] overflow-hidden"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </Link>

              {}
              <div className="px-[15px]">
                {}
                <div className="flex justify-between items-center mb-[15px] text-[#a9a9a9] text-sm">
                  <time dateTime={post.date}>{post.date}</time>
                  <div>
                    <strong className="font-bold text-[#302d2d]">
                      {post.commentsCount}
                    </strong>{' '}
                    комментариев
                  </div>
                </div>

                {}
                <h3 className="mb-[16px] text-[22px] leading-[1.2]">
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-[#302d2d] hover:text-[#2378c9] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                {}
                <p className="mb-[25px] text-[#56565e] leading-[1.3]">
                  {post.description}
                </p>
              </div>

              {}
              <Link
                to={`/blog/${post.id}`}
                className="bottom-[20px] left-1/2 absolute bg-[#5eb8f0] hover:bg-[#51a8de] py-[15px] rounded-[30px] w-[calc(100%-60px)] text-white text-lg text-center transition-colors -translate-x-1/2"
              >
                Читать далее
              </Link>
            </article>
          ))}
        </div>

        {}
        {isHomePage && (
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate(AppRoutes.BLOGPAGE)}
              className="bg-[#2378c9] hover:bg-[#1d66ab] px-8 py-4 rounded-[30px] font-medium text-white text-lg transition-colors cursor-pointer"
            >
              Читать все статьи
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
