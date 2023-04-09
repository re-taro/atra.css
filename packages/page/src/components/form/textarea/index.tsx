import { ContentList, ContentListItem, ContentSubHeading, Playground } from '../../common';
import type { FC } from 'react';

export const TextareaSection: FC = () => (
  <>
    <ContentSubHeading>Textarea</ContentSubHeading>
    <Playground>
      <ContentList>
        <ContentListItem>
          <textarea defaultValue="Textarea" />
        </ContentListItem>
        <ContentListItem>
          <textarea defaultValue="Textarea disabled" disabled />
        </ContentListItem>
      </ContentList>
    </Playground>
  </>
);
