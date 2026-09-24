import type { FC } from "react";
import { Route, Routes } from 'react-router';
import { AppRoutes } from "./constants/global.constants";

import {MainLayout} from "./components/Layouts/MainLayout";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactsPage from "./pages/ContactsPage";
import BlogSinglePage from "./pages/BlogSinglePage";
import DentistPage from "./pages/DentistPage";
import NotFoundPage from "./pages/NotFoundPage"; 


const App: FC = () => {
  return (

      <Routes>
        {/* Родительский роут с MainLayout */}
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={AppRoutes.BLOGPAGE} element={<BlogPage />} />
          <Route path={AppRoutes.BLOGSINGLEPAGE} element={<BlogSinglePage />} />
          <Route path={AppRoutes.DENTISTPAGE} element={<DentistPage />} />
          <Route path={AppRoutes.CONTACTSPAGE} element={<ContactsPage />} />
        </Route>

        {/* Страница 404 без Header и Footer */}
        <Route path={AppRoutes.NOT_FOUNDPAGE} element={<NotFoundPage />} />
      </Routes>

  );
};

export default App;