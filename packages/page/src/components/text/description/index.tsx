import { ContentSubHeading, Playground } from '../../common';
import type { FC } from 'react';

export const DescriptionSection: FC = () => (
  <>
    <ContentSubHeading>Description</ContentSubHeading>
    <Playground>
      <dl>
        <dt>Noa Ikushio</dt>
        <dd>
          She belongs to Millennium Science School and is the secretary of the student council &ldquot;Seminar&rdquo;.
        </dd>
        <dt>Yuka Hayase</dt>
        <dd>
          She belongs to Millennium Science School and is the treasurer of the student council &ldquot;Seminar&rdquo;.
        </dd>
        <dt>Koyuki Kurosaki</dt>
        <dd>
          She belongs to Millennium Science School and is a troublemaker and genius girl in the student council
          &ldquot;Seminar&rdquo;.
        </dd>
      </dl>
    </Playground>
  </>
);
