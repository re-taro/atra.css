import { contentHeading } from './content-heading.css';
import type { FC } from 'react';

interface Props {
  children: string;
}

export const ContentHeading: FC<Props> = ({ children }) => <h2 className={contentHeading}>{children}</h2>;
