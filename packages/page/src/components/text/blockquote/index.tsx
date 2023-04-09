import { ContentSubHeading, Playground } from '../../common';
import type { FC } from 'react';

export const BlockquoteSection: FC = () => (
  <>
    <ContentSubHeading>Blockquote</ContentSubHeading>
    <Playground>
      <blockquote>Our mission is to make cloud computing accessible to everyone.</blockquote>
    </Playground>
  </>
);
