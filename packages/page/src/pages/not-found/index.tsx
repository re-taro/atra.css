import { inner, main, sectionContainer, sub } from './not-found.css';
import type { FC } from 'react';

const NotFound: FC = () => (
  <section className={sectionContainer}>
    <div className={inner}>
      <p className={main}>Page doesn&apos;t exist</p>
      <p className={sub}>Not Found</p>
    </div>
  </section>
);

export default NotFound;
