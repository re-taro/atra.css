import { ContentList, ContentListItem, ContentSubHeading, Playground } from '../../common';
import type { FC } from 'react';

export const FieldsetSection: FC = () => (
  <>
    <ContentSubHeading>Fieldset and Legend</ContentSubHeading>
    <Playground>
      <fieldset>
        <legend>Choose your favorite character</legend>
        <ContentList>
          <ContentListItem>
            <label>
              <input type="radio" name="character" defaultChecked />
              <span>Noa Ikushio</span>
            </label>
          </ContentListItem>
          <ContentListItem>
            <label>
              <input type="radio" name="character" />
              <span>Yuka Hayase</span>
            </label>
          </ContentListItem>
          <ContentListItem>
            <label>
              <input type="radio" name="character" />
              <span>Koyuki Kurosaki</span>
            </label>
          </ContentListItem>
        </ContentList>
      </fieldset>
    </Playground>
  </>
);
