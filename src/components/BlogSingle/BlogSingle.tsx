

import React, { useState } from 'react';


import defaultSingleImage from '../../assets/images/single-1.jpg';
import defaultAvatarImage from '../../assets/images/comment-image.jpg';


export interface CommentItem {
  id: string | number;
  authorName: string;
  avatarUrl: string;
  date: string;
  content: string;
}

export interface PostNavigation {
  title: string;
  link: string;
}

export interface BlogSingleProps {
  postTitle?: string;
  date?: string;
  commentsCount?: number;
  imageUrl?: string;
  prevPost?: PostNavigation;
  nextPost?: PostNavigation;
  comments?: CommentItem[];
  onCommentSubmit?: (data: { author: string; email: string; comment: string }) => void;
}


const DEFAULT_COMMENTS: CommentItem[] = [
 {
    id: 1,
    authorName: 'Лена До',
    avatarUrl: defaultAvatarImage,
    date: '08 сентября, 2026 1 минуту назад',
    content: 'Очень интересный пост. Узнала много нового.',
  },
 {
    id: 2,
    authorName: 'Лена До',
    avatarUrl: defaultAvatarImage,
    date: '08 сентября, 2026 1 минуту назад',
    content: 'Очень интересный пост. Узнала много нового.',
  },
];

const MAX_COMMENT_LENGTH = 500;

const BlogSingle: React.FC<BlogSingleProps> = ( {
  postTitle = 'Что стоматолог может сделать для ваших зубов?',
  date = '05 ноября 2026',
  commentsCount = 0,

  imageUrl = defaultSingleImage,
  prevPost = {
    title: 'Все что Вы хотели узнать про сознательную седацию',
    link: '#',
  },
  nextPost = {
    title: 'Как выбрать стоматологию и не ошибиться?',
    link: '#',
  },
  comments = DEFAULT_COMMENTS,
  onCommentSubmit,
}) => {

  const [formData, setFormData] = useState( {
    author: '',
    email: '',
    comment: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


  const validateField = (name: string, value: string): string => {
    let error = '';

    if (name === 'author') {
      if (!value.trim()) {
        error = 'Пожалуйста, укажите ваше имя';
      } else if (value.trim().length < 2) {
        error = 'Имя должно содержать не менее 2 символов';
      }
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        error = 'Пожалуйста, введите ваш Email';
      } else if (!emailRegex.test(value)) {
        error = 'Введите корректный Email адрес';
      }
    }

    if (name === 'comment') {
      if (!value.trim()) {
        error = 'Напишите текст комментария';
      } else if (value.trim().length < 5) {
        error = 'Комментарий слишком короткий (минимум 5 символов)';
      } else if (value.length > MAX_COMMENT_LENGTH) {
        error = `Превышен лимит в ${MAX_COMMENT_LENGTH} символов`;
      }
    }

    return error;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));


    if (errors[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    const newErrors: { [key: string]: string } = {
      author: validateField('author', formData.author),
      email: validateField('email', formData.email),
      comment: validateField('comment', formData.comment),
    };


    const hasErrors = Object.values(newErrors).some((err) => err !== '');

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});


    setTimeout(() => {
      if (onCommentSubmit) {
        onCommentSubmit(formData);
      }
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ author: '', email: '', comment: '' });


      setTimeout(() => setIsSuccess(false), 4000);
    }, 800);
  };

  return (
    <section className="py-[50px] text-[#302d2d]">
      <div className="mx-auto px-5 max-w-[1200px]">
        {}
        <div className="mb-8">
          <div className="mb-[35px] rounded-[20px] overflow-hidden">
            <img
              src={imageUrl}
              alt={postTitle}
              className="w-full h-full object-center object-cover"
            />
          </div>

          <div className="flex justify-start items-center mb-[15px] text-[#a9a9a9] text-sm">
            <div className="mr-[25px]">{date}</div>
            <div>
              <strong className="font-bold text-[#302d2d]">
                {commentsCount}
              </strong>{' '}
              комментариев
            </div>
          </div>

          <h1 className="mb-[25px] max-w-[645px] font-normal text-[36px] md:text-[48px] leading-[1.1]">
            {postTitle}
          </h1>
        </div>

        {}
        <div className="mb-[60px] text-[#302d2d] leading-[1.5]">
          <p className="mb-5">
            Для того, чтобы вы могли видеть, откуда все это рожденное
            заблуждение тех, кто обвиняет удовольствие и восхваляет страдание, я
            раскрою все дело и объясню то самое, что было сказано этим
            открывателем истины и как бы архитектором истины.
          </p>
        </div>

        {}
        <div className="flex md:flex-row flex-col justify-between items-center gap-6 md:gap-0 mb-[75px] pb-[60px] border-[#ececec] border-b">
          <a
            href={prevPost.link}
            className="group flex items-center text-[#302d2d] hover:text-[#2378c9] text-lg transition-colors duration-350"
          >
            <svg
              className="mr-[25px] transition-transform group-hover:-translate-x-2.5 duration-350 shrink-0"
              width="48"
              height="28"
              viewBox="0 0 48 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_prev)">
                <path
                  d="M13.1646 27.1646L15.3026 25.0264L5.78827 15.5119L48 15.5119L48 12.4881L5.78827 12.4881L15.3026 2.97369L13.1646 0.835523L2.66382e-06 14.0001L13.1646 27.1646Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_prev">
                  <rect
                    width="48"
                    height="28"
                    fill="white"
                    transform="translate(48 28) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>{prevPost.title}</span>
          </a>

          <span className="hidden md:inline-block bg-[#e2dfdf] w-[1px] h-[47px]"></span>

          <a
            href={nextPost.link}
            className="group flex items-center text-[#302d2d] hover:text-[#2378c9] text-lg text-right transition-colors duration-350"
          >
            <span>{nextPost.title}</span>
            <svg
              className="ml-[25px] transition-transform group-hover:translate-x-2.5 duration-350 shrink-0"
              width="48"
              height="28"
              viewBox="0 0 48 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_next)">
                <path
                  d="M34.8354 0.835449L32.6974 2.97362L42.2117 12.4881L0 12.4881L0 15.5119L42.2117 15.5119L32.6974 25.0263L34.8354 27.1645L48 13.9999L34.8354 0.835449Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_next">
                  <rect width="48" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>

        {}
        <div>
          <h2 className="mb-[45px] text-[32px] md:text-[42px]">
            Оставить комментарий
          </h2>

          <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-8 mb-[60px] pb-[60px] border-[#ececec] border-b">
            {}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4 w-full max-w-[488px] shrink-0"
            >
              {}
              {isSuccess && (
                <div className="bg-green-50 p-4 border border-green-200 rounded-lg font-medium text-green-700 text-sm animate-fade-in">
                  ✓ Спасибо! Ваш комментарий успешно отправлен.
                </div>
              )}

              {}
              <div>
                <input
                  id="author"
                  name="author"
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.author}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full rounded-[10px] border px-[22px] py-[18px] text-lg outline-none transition-colors placeholder:text-[#b9b9b9] $ {
                    errors.author
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-[#e4e4e4] focus:border-[#2378c9]'
                  }`}
                />
                {errors.author && (
                  <p className="mt-1 text-red-500 text-xs">{errors.author}</p>
                )}
              </div>

              {}
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ваш email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full rounded-[10px] border px-[22px] py-[18px] text-lg outline-none transition-colors placeholder:text-[#b9b9b9] $ {
                    errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-[#e4e4e4] focus:border-[#2378c9]'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              {}
              <div>
                <div className="relative">
                  <textarea
                    name="comment"
                    placeholder="Комментарий"
                    value={formData.comment}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    maxLength={MAX_COMMENT_LENGTH}
                    className={`h-[200px] w-full resize-none rounded-[10px] border px-[22px] py-[18px] text-lg outline-none transition-colors placeholder:text-[#b9b9b9] $ {
                      errors.comment
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#e4e4e4] focus:border-[#2378c9]'
                    }`}
                  />
                  {}
                  <span className="right-4 bottom-3 absolute text-gray-400 text-xs">
                    {formData.comment.length}/{MAX_COMMENT_LENGTH}
                  </span>
                </div>
                {errors.comment && (
                  <p className="mt-1 text-red-500 text-xs">{errors.comment}</p>
                )}
              </div>

              {}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex justify-center items-center bg-[#f86d6d] hover:bg-[#dd5959] disabled:opacity-60 py-[15px] rounded-[25px] w-[185px] text-white text-base text-center transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="inline-block border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin" />
                  ) : (
                    'Отправить'
                  )}
                </button>
              </div>
            </form>

            {}
            <div className="mx-auto lg:mx-0 max-w-[360px] text-[28px] md:text-[32px] lg:text-left text-center">
              <strong className="font-bold text-[#302d2d]">
                {comments.length}
              </strong>{' '}
              комментарий о посте
            </div>
          </div>

          {}
          <ul className="space-y-[30px]">
            {comments.map((item) => (
              <li key={item.id} className="comment">
                <article>
                  <footer className="flex items-start">
                    <div className="mr-[20px] rounded-full w-[120px] min-w-[120px] h-[120px] overflow-hidden shrink-0">
                      <img
                        src={item.avatarUrl}
                        alt={item.authorName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="mb-2 font-bold text-lg">
                        <span>{item.authorName}</span>
                      </div>
                      <a href="#" className="block mb-3">
                        <time className="font-light text-[#a0a0a0] text-sm">
                          {item.date}
                        </time>
                      </a>
                      <div className="mb-[10px] text-black">
                        {item.content}
                      </div>
                      <a
                        href="#"
                        className="inline-block text-[#f86d6d] underline hover:no-underline"
                      >
                        Ответить
                      </a>
                    </div>
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
