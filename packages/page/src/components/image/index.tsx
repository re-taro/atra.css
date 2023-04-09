import { ContentHeading } from '../common';
import { BasicSection } from './basic';
import { FigcaptionSection } from './figcaption';
import type { FC } from 'react';

export const ImageSection: FC = () => (
  <>
    <ContentHeading>Image</ContentHeading>
    <section>
      <BasicSection />
      <FigcaptionSection />
    </section>
  </>
);
