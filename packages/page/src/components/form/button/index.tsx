import { ContentList, ContentListItem, ContentSubHeading, Playground, PlaygroundItem } from '../../common';
import type { FC } from 'react';

export const ButtonSection: FC = () => (
  <>
    <ContentSubHeading>Button</ContentSubHeading>
    <Playground>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <button type="button">Button</button>
          </ContentListItem>
          <ContentListItem>
            <button type="button" disabled>
              Button disabled
            </button>
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <button type="submit">Submit</button>
          </ContentListItem>
          <ContentListItem>
            <button type="submit" disabled>
              Submit disabled
            </button>
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <button type="reset">Reset</button>
          </ContentListItem>
          <ContentListItem>
            <button type="reset" disabled>
              Reset disabled
            </button>
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <input type="button" defaultValue="Input button" />
          </ContentListItem>
          <ContentListItem>
            <input type="button" defaultValue="Input button disabled" disabled />
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
    </Playground>
  </>
);
