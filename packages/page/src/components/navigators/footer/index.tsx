import { footer, inner } from './footer.css';
import type { FC } from 'react';

export const Footer: FC = () => (
  <footer className={footer}>
    created by&nbsp;
    <a className={inner} href="https://github.com/re-taro" target="_blank" rel="noreferrer">
      re-taro
    </a>
  </footer>
);
