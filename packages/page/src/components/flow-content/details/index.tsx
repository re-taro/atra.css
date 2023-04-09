import { ContentSubHeading, Playground } from '../../common';
import type { FC } from 'react';

export const DetailsSection: FC = () => (
  <>
    <ContentSubHeading>Details</ContentSubHeading>
    <Playground>
      <details>
        <summary>Summary</summary>
        <p>Paragraph</p>
      </details>
    </Playground>
  </>
);
