import { ContentList, ContentListItem, ContentSubHeading, Playground, PlaygroundItem } from '../../common';
import type { FC } from 'react';

export const SelectSection: FC = () => (
  <>
    <ContentSubHeading>Select</ContentSubHeading>
    <Playground>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <select aria-label="select sample">
              <option>Noa Ikushio</option>
              <option>Yuka Hayase</option>
              <option>Koyuki Kurosaki</option>
            </select>
          </ContentListItem>
          <ContentListItem>
            <select aria-label="select sample" disabled>
              <option>Noa Ikushio</option>
              <option>Yuka Hayase</option>
              <option>Koyuki Kurosaki</option>
            </select>
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <select aria-label="select sample" multiple>
              <option>Noa Ikushio</option>
              <option>Yuka Hayase</option>
              <option>Koyuki Kurosaki</option>
            </select>
          </ContentListItem>
          <ContentListItem>
            <select aria-label="select sample" multiple disabled>
              <option>Noa Ikushio</option>
              <option>Yuka Hayase</option>
              <option>Koyuki Kurosaki</option>
            </select>
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <select aria-label="select sample">
              <optgroup label="Group 1">
                <option>Noa Ikushio</option>
                <option>Yuka Hayase</option>
                <option>Koyuki Kurosaki</option>
              </optgroup>
              <optgroup label="Group 2">
                <option>Sayumi Suzushiro</option>
                <option>Ran Haruka</option>
                <option>Natsune Inui</option>
              </optgroup>
            </select>
          </ContentListItem>
          <ContentListItem>
            <select aria-label="select sample" disabled>
              <optgroup label="Group 1">
                <option>Noa Ikushio</option>
                <option>Yuka Hayase</option>
                <option>Koyuki Kurosaki</option>
              </optgroup>
              <optgroup label="Group 2">
                <option>Sayumi Suzushiro</option>
                <option>Ran Haruka</option>
                <option>Natsune Inui</option>
              </optgroup>
            </select>
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
      <PlaygroundItem>
        <ContentList>
          <ContentListItem>
            <select aria-label="select sample" multiple>
              <optgroup label="Group 1">
                <option>Noa Ikushio</option>
                <option>Yuka Hayase</option>
                <option>Koyuki Kurosaki</option>
              </optgroup>
              <optgroup label="Group 2">
                <option>Sayumi Suzushiro</option>
                <option>Ran Haruka</option>
                <option>Natsune Inui</option>
              </optgroup>
            </select>
          </ContentListItem>
          <ContentListItem>
            <select aria-label="select sample" multiple disabled>
              <optgroup label="Group 1">
                <option>Noa Ikushio</option>
                <option>Yuka Hayase</option>
                <option>Koyuki Kurosaki</option>
              </optgroup>
              <optgroup label="Group 2">
                <option>Sayumi Suzushiro</option>
                <option>Ran Haruka</option>
                <option>Natsune Inui</option>
              </optgroup>
            </select>
          </ContentListItem>
        </ContentList>
      </PlaygroundItem>
    </Playground>
  </>
);
