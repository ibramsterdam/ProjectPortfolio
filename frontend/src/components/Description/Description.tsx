import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { LeftSection } from './DescriptionStyles';

const Description = () => (
  <Section row={true} nopadding={true}>
    <LeftSection>
      Hi there
      <FcCheckmark />
      , I am
      <br />
      <SectionTitle main={true}>Bram Janssen</SectionTitle>
      <SectionText>
        Developer and Personal Trainer
        <br />
      </SectionText>
    </LeftSection>
  </Section>
);

export default Description;
