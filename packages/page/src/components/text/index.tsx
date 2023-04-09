import { ContentHeading } from '../common';
import { BlockquoteSection } from './blockquote';
import { CodeBlockSection } from './code-block';
import { ListSection } from './list';
import { ParagraphSection } from './paragraph';
import { HorizontalSection } from './horizontal';
import { HeadingSection } from './heading';
import { DescriptionSection } from './description';
import type { FC } from 'react';

export const TextSection: FC = () => (
  <>
    <ContentHeading>Text</ContentHeading>
    <section>
      <HeadingSection />
      <ParagraphSection />
      <ListSection />
      <BlockquoteSection />
      <CodeBlockSection />
      <DescriptionSection />
      <HorizontalSection />
    </section>
  </>
);
