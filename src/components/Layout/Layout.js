import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movie">Movie</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
