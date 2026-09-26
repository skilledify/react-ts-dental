  // export const AppRoutes = {
  //   HOMEPAGE: "/",
  //   BLOGPAGE: "/blog",
  //   BLOGSINGLEPAGE: "/blog/:id",
  //   CONTACTSPAGE: "/contacts",
  //   DENTISTPAGE: "/dentist/:id",
  //   NOT_FOUNDPAGE: "*",    
  //    } as const;


export const AppRoutes = {
  HOMEPAGE: '/',
  BLOG_SECTION: '/#blog',       // 👈 Якорь на секцию блога на главной странице
  BLOGPAGE: '/blog',            // 👈 Отдельная страница со всеми статьями
  BLOGSINGLEPAGE: '/blog/:id',  // 👈 Страница отдельной статьи
  CONTACTSPAGE: '/contacts',
  DENTISTPAGE: '/dentist/:id',
  NOT_FOUNDPAGE: '*',
} as const;