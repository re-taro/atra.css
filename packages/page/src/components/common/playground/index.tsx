import { playground } from './playground.css';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Playground: FC<Props> = ({ children }) => <section className={playground}>{children}</section>;
