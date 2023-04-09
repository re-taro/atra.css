import { ContentHeading } from '../common';
import { CheckboxSection } from './checkbox';
import { ButtonSection } from './button';
import { InputSection } from './input';
import { TextareaSection } from './textarea';
import { SelectSection } from './select';
import { RadioSection } from './radio';
import { FieldsetSection } from './fieldset';
import type { FC } from 'react';

export const FormSection: FC = () => (
  <>
    <ContentHeading>Form</ContentHeading>
    <section>
      <ButtonSection />
      <InputSection />
      <CheckboxSection />
      <RadioSection />
      <TextareaSection />
      <SelectSection />
      <FieldsetSection />
    </section>
  </>
);
