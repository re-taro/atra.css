import { lazy } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '../layout';
import type { FC } from 'react';

const TopPage = lazy(() => import('../../../pages/top'));
const NotFoundPage = lazy(() => import('../../../pages/not-found'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/">
      <Route element={<TopPage />} path="" />
      <Route element={<NotFoundPage />} path="*" />
    </Route>,
  ),
);

export const Routes: FC = () => <RouterProvider router={router} />;
