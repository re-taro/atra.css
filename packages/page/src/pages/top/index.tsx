import { LayoutContent } from '../../components/common';
import { TextSection } from '../../components/text';
import { InlineSection } from '../../components/inline';
import { FormSection } from '../../components/form';
import { ImageSection } from '../../components/image';
import { FlowContentSection } from '../../components/flow-content';
import { contentHeading, installContentPerformatted, sectionContainer, sectionHeading } from './top.css';
import type { FC } from 'react';

const Top: FC = () => (
  <>
    <section className={sectionContainer}>
      <h2 className={sectionHeading} id="installation">
        Installation
      </h2>
      <section>
        <LayoutContent>
          <h3 className={contentHeading}>package manager</h3>
          <pre className={installContentPerformatted}>
            <code>pnpm add atra.css</code>
          </pre>
        </LayoutContent>
        <LayoutContent>
          <h3 className={contentHeading}>CDN</h3>
          <pre className={installContentPerformatted}>
            <code>https://unpkg.com/atra.css@latest/dist/atra.min.css</code>
          </pre>
        </LayoutContent>
      </section>
    </section>
    <section className={sectionContainer}>
      <h2 className={sectionHeading} id="example">
        Example
      </h2>
      <section>
        <LayoutContent>
          <TextSection />
        </LayoutContent>
        <LayoutContent>
          <InlineSection />
        </LayoutContent>
        <LayoutContent>
          <FormSection />
        </LayoutContent>
        <LayoutContent>
          <ImageSection />
        </LayoutContent>
        <LayoutContent>
          <FlowContentSection />
        </LayoutContent>
      </section>
    </section>
  </>
);

export default Top;
