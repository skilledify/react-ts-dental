import { useEffect } from 'react';
import { useLocation } from 'react-router';

// 📏 Задайте высоту вашего фиксированного хедера в пикселях (чтобы скролл не промахивался)
const HEADER_OFFSET = 90;

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Если в URL есть якорная ссылка (например, /#specialists)
    if (hash) {
      const targetId = hash.replace('#', '');

      // Небольшая задержка, чтобы React успел отрендерить DOM целевой страницы
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(targetId);

        if (element) {
          // Вычисляем точное положение элемента с учетом высоты хедера
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - HEADER_OFFSET;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }

    // 2. Если обычный переход по страницам (без #) — сбрасываем скролл в самый верх
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // 'instant' моментально переносит наверх без задержек
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;