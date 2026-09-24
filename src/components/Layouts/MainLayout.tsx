import { Outlet } from 'react-router';
import  Header  from '../Header/Header';
import  Footer  from '../Footer/Footer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';


 export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen layout" >
      <Header />
      <Breadcrumbs />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

