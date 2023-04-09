import { playgroundItem } from './playground-item.css';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const PlaygroundItem: FC<Props> = ({ children }) => <div className={playgroundItem}>{children}</div>;
