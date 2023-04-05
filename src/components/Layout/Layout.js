import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { GlowingBtn } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <header>
        <NavLink to="/">
          <GlowingBtn>Home</GlowingBtn>
        </NavLink>
        <NavLink to="/movie">
          <GlowingBtn>Movie</GlowingBtn>
        </NavLink>
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
