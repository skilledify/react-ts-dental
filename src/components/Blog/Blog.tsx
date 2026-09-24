// import React from 'react';

// // Интерфейс для данных статьи
// export interface BlogPost {
//   id: string | number;
//   title: string;
//   description: string;
//   date: string;
//   commentsCount: number;
//   imageUrl: string;
//   link: string;
// }

// // Заглушка данных на основе предоставленного HTML
// const BLOG_POSTS: BlogPost[] = [
//   {
//     id: 1,
//     title: 'Что стоматолог может сделать для ваших зубов',
//     description:
//       'Если они были измотаны, то и боль, и таблетку, и саму подушку, и саму боль надо беречь, в следующий раз ...',
//     date: '05 ноября 2022',
//     commentsCount: 0,
//     imageUrl: '../../src/assets/../../src/assets/../../src/assets/../../src/assets/images/news-1.jpg',
//     link: 'post.html',
//   },
//   {
//     id: 2,
//     title: 'Как выбрать стоматологию и не ошибиться?',
//     description:
//       'Безусловно, существующая теория позволяет выполнить важные задания по разработке благоприятных перспектив...',
//     date: '05 ноября 2022',
//     commentsCount: 0,
//     imageUrl: '../../src/assets/../../src/assets/../../src/assets/../../src/assets/images/news-2.jpg',
//     link: 'post.html',
//   },
//   {
//     id: 3,
//     title: 'Сильно болит зуб? Лечение в домашних условиях',
//     description:
//       'Учитывая ключевые сценарии поведения, выбранный нами инновационный путь напрямую зависит от поставленных...',
//     date: '05 ноября 2022',
//     commentsCount: 0,
//     imageUrl: '../../src/assets/../../src/assets/../../src/assets/../../src/assets/images/news-3.jpg',
//     link: 'post.html',
//   },
//   {
//     id: 4,
//     title: 'Как спасти тетрациклиновые зубы?',
//     description:
//       'Но новая модель организационной деятельности прекрасно подходит для реализации распределения...',
//     date: '05 ноября 2022',
//     commentsCount: 0,
//     imageUrl: '../../src/assets/../../src/assets/../../src/assets/../../src/assets/images/news-4.jpg',
//     link: 'post.html',
//   },
//   {
//     id: 5,
//     title: 'Как правильно чистить зубы? 15 советов',
//     description:
//       'Неопровержимые выводы, а также акционеры крупнейших компаний являются только методом...',
//     date: '05 ноября 2022',
//     commentsCount: 0,
//     imageUrl: '../../src/assets/../../src/assets/../../src/assets/../../src/assets/images/news-5.jpg',
//     link: 'post.html',
//   },
//   {
//     id: 6,
//     title: 'Все что Вы хотели узнать про сознательную седацию',
//     description:
//       'Тщательные исследования конкурентов функционально разнесены на независимые элементы...',
//     date: '05 ноября 2022',
//     commentsCount: 0,
//     imageUrl: '../../src/assets/../../src/assets/../../src/assets/../../src/assets/images/news-6.jpg',
//     link: 'post.html',
//   },
// ];

// interface BlogProps {
//   posts?: BlogPost[];
//   title?: string;
// }

// const Blog: React.FC<BlogProps> = ({ posts = BLOG_POSTS, title = 'Блог' }) => {
//   return (
//     <section className="py-12.5 text-[#302d2d]">
//       <div className="mx-auto px-5 max-w-[1200px]">
//         {/* Title Header */}
//         <div className="mx-auto mb-11 max-w-[470px] text-center">
//           <h2 className="text-[46px] leading-[55px]">
//             {title}
//           </h2>
//         </div>

//         {/* Posts Grid */}
//         <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {posts.map((post) => (
//             <article
//               key={post.id}
//               className="relative bg-[#f6f6f6] shadow-sm hover:shadow-md p-[15px] pb-[50px] rounded-[20px] transition-all duration-300"
//             >
//               {/* Image Thumbnail */}
//               <div className="mb-[25px] rounded-[19px] aspect-[4/3] overflow-hidden">
//                 <img
//                   src={post.imageUrl}
//                   alt={post.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                   loading="lazy"
//                 />
//               </div>

//               {/* Content Body */}
//               <div className="px-[15px] pb-[15px]">
//                 {/* Meta Top Line */}
//                 <div className="flex justify-between items-center mb-[15px] text-[#a9a9a9] text-sm">
//                   <time dateTime={post.date}>{post.date}</time>
//                   <div>
//                     <strong className="font-bold text-[#302d2d]">
//                       {post.commentsCount}
//                     </strong>{' '}
//                     комментариев
//                   </div>
//                 </div>

//                 {/* Article Title */}
//                 <h3 className="mb-[16px] text-[22px] leading-[1.2]">
//                   <a
//                     href={post.link}
//                     className="text-[#302d2d] hover:text-[#2378c9] transition-colors"
//                   >
//                     {post.title}
//                   </a>
//                 </h3>

//                 {/* Description */}
//                 <p className="mb-[25px] text-[#56565e] leading-[1.3]">
//                   {post.description}
//                 </p>

//                 {/* Read More Button */}
//                 <a
//                   href={post.link}
//                   className="bottom-[20px] left-1/2 absolute bg-[#5eb8f0] hover:bg-[#51a8de] py-[15px] rounded-[30px] w-[calc(100%-60px)] text-white text-lg text-center transition-colors -translate-x-1/2"
//                 >
//                   Читать далее
//                 </a>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;

import React from 'react';
import { Link } from 'react-router';

// Интерфейс для данных статьи
export interface BlogPost {
  id: string | number;
  title: string;
  description: string;
  date: string;
  commentsCount: number;
  imageUrl: string;
}

// Заглушка данных с корректными путями к изображениям
const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Что стоматолог может сделать для ваших зубов',
    description:
      'Если они были измотаны, то и боль, и таблетку, и саму подушку, и саму боль надо беречь, в следующий раз ...',
    date: '05 ноября 2022',
    commentsCount: 0,
    imageUrl: '/../../src/assets/../../src/assets/images/news-1.jpg',
  },
  {
    id: 2,
    title: 'Как выбрать стоматологию и не ошибиться?',
    description:
      'Безусловно, существующая теория позволяет выполнить важные задания по разработке благоприятных перспектив...',
    date: '05 ноября 2022',
    commentsCount: 0,
    imageUrl: '/../../src/assets/../../src/assets/images/news-2.jpg',
  },
  {
    id: 3,
    title: 'Сильно болит зуб? Лечение в домашних условиях',
    description:
      'Учитывая ключевые сценарии поведения, выбранный нами инновационный путь напрямую зависит от поставленных...',
    date: '05 ноября 2022',
    commentsCount: 0,
    imageUrl: '/../../src/assets/../../src/assets/images/news-3.jpg',
  },
  {
    id: 4,
    title: 'Как спасти тетрациклиновые зубы?',
    description:
      'Но новая модель организационной деятельности прекрасно подходит для реализации распределения...',
    date: '05 ноября 2022',
    commentsCount: 0,
    imageUrl: '/../../src/assets/../../src/assets/images/news-4.jpg',
  },
  {
    id: 5,
    title: 'Как правильно чистить зубы? 15 советов',
    description:
      'Неопровержимые выводы, а также акционеры крупнейших компаний являются только методом...',
    date: '05 ноября 2022',
    commentsCount: 0,
    imageUrl: '/../../src/assets/../../src/assets/images/news-5.jpg',
  },
  {
    id: 6,
    title: 'Все что Вы хотели узнать про сознательную седацию',
    description:
      'Тщательные исследования конкурентов функционально разнесены на независимые элементы...',
    date: '05 ноября 2022',
    commentsCount: 0,
    imageUrl: '/../../src/assets/../../src/assets/images/news-6.jpg',
  },
];

interface BlogProps {
  posts?: BlogPost[];
  title?: string;
}

const Blog: React.FC<BlogProps> = ({ posts = BLOG_POSTS, title = 'Блог' }) => {
  return (
    <section className="py-[50px] text-[#302d2d]">
      <div className="mx-auto px-5 max-w-[1200px]">
        {/* Title Header */}
        <div className="mx-auto mb-11 max-w-[470px] text-center">
          <h2 className="text-[46px] leading-[55px]">
            {title}
          </h2>
        </div>

        {/* Posts Grid */}
        <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative bg-[#f6f6f6] shadow-sm hover:shadow-md p-[15px] pb-[75px] rounded-[20px] transition-all duration-300"
            >
              {/* Image Thumbnail with Link */}
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

              {/* Content Body */}
              <div className="px-[15px]">
                {/* Meta Top Line */}
                <div className="flex justify-between items-center mb-[15px] text-[#a9a9a9] text-sm">
                  <time dateTime={post.date}>{post.date}</time>
                  <div>
                    <strong className="font-bold text-[#302d2d]">
                      {post.commentsCount}
                    </strong>{' '}
                    комментариев
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="mb-[16px] text-[22px] leading-[1.2]">
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-[#302d2d] hover:text-[#2378c9] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="mb-[25px] text-[#56565e] leading-[1.3]">
                  {post.description}
                </p>

                {/* Read More Button */}
                <Link
                  to={`/blog/${post.id}`}
                  className="bottom-[20px] left-1/2 absolute bg-[#5eb8f0] hover:bg-[#51a8de] py-[15px] rounded-[30px] w-[calc(100%-60px)] text-white text-lg text-center transition-colors -translate-x-1/2"
                >
                  Читать далее
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;