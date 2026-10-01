import type { FC } from "react";
import { BrowserRouter, Route, Routes } from 'react-router';
import { AppRoutes } from "./constants/global.constants";

import {MainLayout} from "./components/Layouts/MainLayout";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactsPage from "./pages/ContactsPage";
import BlogSinglePage from "./pages/BlogSinglePage";
import DentistPage from "./pages/DentistPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";


const App: FC = () => {
  return (
    <>
      <BrowserRouter basename="/react-ts-dental">
        <ScrollToTop/>
          <Routes>
        {}
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path={AppRoutes.BLOGPAGE} element={<BlogPage />} />
              <Route path={AppRoutes.BLOGSINGLEPAGE} element={<BlogSinglePage />} />
              <Route path={AppRoutes.DENTISTPAGE} element={<DentistPage />} />
              <Route path={AppRoutes.CONTACTSPAGE} element={<ContactsPage />} />
          </Route>

        {}
          <Route path={AppRoutes.NOT_FOUNDPAGE} element={<NotFoundPage />} />
      </Routes>


        </BrowserRouter>

   </>
  );
};
export default App;
