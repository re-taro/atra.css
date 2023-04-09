import { ContentList, ContentListItem, ContentSubHeading, Playground } from '../../common';
import type { FC } from 'react';

export const RadioSection: FC = () => (
  <>
    <ContentSubHeading>Radio</ContentSubHeading>
    <Playground>
      <ContentList>
        <ContentListItem>
          <label>
            <input type="radio" name="radio" defaultChecked />
            <span>Noa Ikushio</span>
          </label>
        </ContentListItem>
        <ContentListItem>
          <label>
            <input type="radio" name="radio" />
            <span>Yuka Hayase</span>
          </label>
        </ContentListItem>
        <ContentListItem>
          <label>
            <input type="radio" name="radio" disabled />
            <span>Koyuki Kurosaki</span>
          </label>
        </ContentListItem>
      </ContentList>
    </Playground>
  </>
);
