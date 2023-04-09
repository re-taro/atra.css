import {
  header,
  headerGuide,
  headerGuideButton,
  headerGuideButtonGitHub,
  headerGuideItem,
  headerHeading,
  headerSub,
} from './header.css';
import type { FC } from 'react';

export const Header: FC = () => (
  <header className={header}>
    <h1 className={headerHeading}>atara.css</h1>
    <p className={headerSub}>A lightly modern reset CSS</p>
    <nav className={headerGuide}>
      <div className={headerGuideItem}>
        <a href="#example" className={headerGuideButton}>
          Get started
        </a>
      </div>
      <div className={headerGuideItem}>
        <a
          href="https://github.com/re-taro/atra.css"
          target="_blank"
          rel="noreferrer"
          className={headerGuideButtonGitHub}
        >
          GitHub
        </a>
      </div>
    </nav>
  </header>
);
