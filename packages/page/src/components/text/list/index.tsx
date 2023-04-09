import { ContentSubHeading, Playground, PlaygroundItem } from '../../common';
import type { FC } from 'react';

export const ListSection: FC = () => (
  <>
    <ContentSubHeading>List</ContentSubHeading>
    <Playground>
      <PlaygroundItem>
        <ul>
          <li>unordered list</li>
          <li>unordered list</li>
          <li>unordered list</li>
        </ul>
      </PlaygroundItem>
      <PlaygroundItem>
        <ol>
          <li>ordered list</li>
          <li>ordered list</li>
          <li>ordered list</li>
        </ol>
      </PlaygroundItem>
    </Playground>
  </>
);
