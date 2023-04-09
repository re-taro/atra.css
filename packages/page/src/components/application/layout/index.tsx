import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../navigators';
import { useScrollToTop } from './hook/use-scroll-to-top';
import { container, fallback } from './layout.css';
import type { FC } from 'react';

export const Layout: FC = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <main className={container}>
        <ErrorBoundary fallbackRender={() => <>Error!</>}>
          <Suspense fallback={<div className={fallback} />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
};
