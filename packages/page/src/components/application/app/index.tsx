import { Suspense } from 'react';
import { Routes } from '../routes';
import type { FC } from 'react';
import 'atra.css';
import '../../../styles/global.css';

export const App: FC = () => (
  <Suspense fallback={null}>
    <Routes />
  </Suspense>
);
