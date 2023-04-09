import { ContentSubHeading, Playground } from '../../common';
import type { FC } from 'react';

export const HorizontalSection: FC = () => (
  <>
    <ContentSubHeading>Horizontal Rule</ContentSubHeading>
    <Playground>
      <p>This is the first paragraph of text.</p>
      <hr />
      <p>This is the second paragraph of text.</p>
    </Playground>
  </>
);
