import { contentSubHeading } from './content.css';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Content: FC<Props> = ({ children }) => <section className={contentSubHeading}>{children}</section>;
