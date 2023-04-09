import { ContentSubHeading, Playground } from '../../common';
import type { FC } from 'react';

export const FigcaptionSection: FC = () => (
  <>
    <ContentSubHeading>figure + figcaption</ContentSubHeading>
    <Playground>
      <figure>
        <img src="/sample.webp" width="320" height="320" alt="Tokyo Tower" loading="lazy" />
        <figcaption>Tokyo Tower</figcaption>
      </figure>
    </Playground>
  </>
);
