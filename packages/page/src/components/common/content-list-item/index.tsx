import { contentListItem } from './content-list-item.css';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const ContentListItem: FC<Props> = ({ children }) => <div className={contentListItem}>{children}</div>;
