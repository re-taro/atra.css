import { ContentSubHeading, Playground } from '../../common';
import type { FC } from 'react';

export const BasicSection: FC = () => (
  <>
    <ContentSubHeading>Basic</ContentSubHeading>
    <Playground>
      <img src="/sample.webp" width="320" height="320" alt="Tokyo Tower" loading="lazy" />
    </Playground>
  </>
);
