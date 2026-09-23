import { Outlet } from 'react-router';
import  Header  from '../Header/Header';
import  Footer  from '../Footer/Footer';


 export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen layout" >
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};