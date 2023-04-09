import { contentSubHeading } from './content-sub-heading.css';
import type { FC } from 'react';

interface Props {
  children: string;
}

export const ContentSubHeading: FC<Props> = ({ children }) => <h3 className={contentSubHeading}>{children}</h3>;
