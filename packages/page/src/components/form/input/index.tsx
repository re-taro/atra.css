import { ContentList, ContentListItem, ContentSubHeading, Playground, PlaygroundItem } from '../../common';
import type { FC } from 'react';

export const InputSection: FC = () => (
  <>
    <ContentSubHeading>Input</ContentSubHeading>
    <Playground>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <input type="text" placeholder="Text" />
          </ContentListItem>
          <ContentListItem>
            <input type="text" placeholder="Disabled" disabled />
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <input type="password" placeholder="Password" />
          </ContentListItem>
          <ContentListItem>
            <input type="password" placeholder="Disabled" disabled />
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <input type="search" placeholder="Search" />
          </ContentListItem>
          <ContentListItem>
            <input type="search" placeholder="Disabled" disabled />
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <input type="number" placeholder="Number" />
          </ContentListItem>
          <ContentListItem>
            <input type="number" placeholder="Disabled" disabled />
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <input type="email" placeholder="Email" />
          </ContentListItem>
          <ContentListItem>
            <input type="email" placeholder="Disabled" disabled />
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <input type="tel" placeholder="Telephone" />
          </ContentListItem>
          <ContentListItem>
            <input type="tel" placeholder="Disabled" disabled />
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <input type="datetime-local" placeholder="Date and time" defaultValue="2023-04-08T01:34:00" />
          </ContentListItem>
          <ContentListItem>
            <input type="datetime-local" placeholder="Disabled" defaultValue="2023-04-08T01:34:00" disabled />
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <input type="date" placeholder="Date" defaultValue="2023-04-08" />
          </ContentListItem>
          <ContentListItem>
            <input type="date" placeholder="Disabled" defaultValue="2023-04-08" disabled />
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <input type="time" placeholder="Time" defaultValue="01:34:00" />
          </ContentListItem>
          <ContentListItem>
            <input type="time" placeholder="Disabled" defaultValue="01:34:00" disabled />
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <input type="file" aria-label="input type[file] sample" />
          </ContentListItem>
          <ContentListItem>
            <input type="file" aria-label="input type[file] sample" disabled />
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <input type="color" aria-label="input type[color] sample" />
          </ContentListItem>
          <ContentListItem>
            <input type="color" aria-label="input type[color] sample" disabled />
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <input type="range" aria-label="input type[range] sample" />
          </ContentListItem>
          <ContentListItem>
            <input type="range" aria-label="input type[range] sample" disabled />
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
    </Playground>
  </>
);
