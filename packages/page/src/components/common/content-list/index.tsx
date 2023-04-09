import { contentList } from './content-list.css';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const ContentList: FC<Props> = ({ children }) => <div className={contentList}>{children}</div>;
