import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <div className={css.headerWrap}>
        <header className={css.header}>
          <nav>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
            <NavLink className={css.link} to="/movies">
              Movies
            </NavLink>
          </nav>
        </header>
      </div>
      <main className={css.mainWrapper}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
