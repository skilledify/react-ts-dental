import React from 'react';


export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-slate-50 dark:from-slate-900 to-slate-100 dark:to-slate-950 px-6 min-h-screen text-center">
      <div className="space-y-4">
        {}
        <h1 className="font-black text-indigo-600 dark:text-indigo-400 text-9xl tracking-tight animate-bounce">
          404
        </h1>

        {}
        <h2 className="font-bold text-slate-900 dark:text-slate-50 text-3xl sm:text-4xl tracking-tight">
          Страница не найдена
        </h2>

        {}
        <p className="mx-auto max-w-md text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          Извините, мы не смогли найти страницу, которую вы ищете. Возможно, она была удалена или вы ввели неверный адрес.
        </p>
      </div>

      {}
      <div className="flex sm:flex-row flex-col gap-4 mt-10">
        {}
        <a
          href="/react-ts-dental"
           className="inline-flex justify-center items-center bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 shadow-sm px-5 py-3 rounded-lg focus-visible:outline-1 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 font-semibold text-white text-sm transition-colors"
        >
          На главную
        </a>

        {}
        <button
          onClick={() => window.history.back()}
           className="inline-flex justify-center items-center bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 shadow-sm px-5 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus-visible:outline-1 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 font-semibold text-slate-700 dark:text-slate-200 text-sm transition-colors"
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Назад
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
