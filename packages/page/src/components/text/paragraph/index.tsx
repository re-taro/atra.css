import { ContentSubHeading, Playground } from '../../common';
import type { FC } from 'react';

export const ParagraphSection: FC = () => (
  <>
    <ContentSubHeading>Paragraph</ContentSubHeading>
    <Playground>
      <p>
        The <code>&lt;p&gt;</code> HTML element represents a paragraph. Paragraphs are usually represented in visual
        media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML
        paragraphs can be any structural grouping of related content, such as images or form fields.
      </p>
    </Playground>
  </>
);
