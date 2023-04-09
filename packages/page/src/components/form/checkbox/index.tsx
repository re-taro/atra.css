import { ContentList, ContentListItem, ContentSubHeading, Playground } from '../../common';
import type { FC } from 'react';

export const CheckboxSection: FC = () => (
  <>
    <ContentSubHeading>Checkbox</ContentSubHeading>
    <Playground>
      <ContentList>
        <ContentListItem>
          <label>
            <input type="checkbox" />
            <span>Noa Ikushio</span>
          </label>
        </ContentListItem>
        <ContentListItem>
          <label>
            <input type="checkbox" defaultChecked />
            <span>Yuka Hayase</span>
          </label>
        </ContentListItem>
        <ContentListItem>
          <label>
            <input type="checkbox" disabled />
            <span>Koyuki Kurosaki</span>
          </label>
        </ContentListItem>
      </ContentList>
    </Playground>
  </>
);
