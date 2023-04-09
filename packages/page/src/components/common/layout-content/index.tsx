import { content } from './layout-content.css';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const LayoutContent: FC<Props> = ({ children }) => <section className={content}>{children}</section>;
