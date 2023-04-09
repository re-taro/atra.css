import { ContentHeading } from '../common';
import { TableSection } from './table';
import { DetailsSection } from './details';
import type { FC } from 'react';

export const FlowContentSection: FC = () => (
  <>
    <ContentHeading>Flow Content</ContentHeading>
    <section>
      <TableSection />
      <DetailsSection />
    </section>
  </>
);
