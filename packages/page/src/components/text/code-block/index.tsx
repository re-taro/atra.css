import { ContentSubHeading, Playground } from '../../common';
import type { FC } from 'react';

export const CodeBlockSection: FC = () => (
  <>
    <ContentSubHeading>Code Block</ContentSubHeading>
    <Playground>
      <pre>
        <code>pnpm add atra.css</code>
      </pre>
    </Playground>
  </>
);
