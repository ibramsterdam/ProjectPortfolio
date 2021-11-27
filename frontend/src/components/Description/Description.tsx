import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './DescriptionStyles';

const Description = () => (
  <Section row={true} nopadding={true}>
    <LeftSection>
      <SectionTitle main={true}>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
        assumenda quod expedita totam sint eum accusantium ipsam praesentium
        soluta corrupti, quaerat voluptatem excepturi voluptas blanditiis! Id
        expedita exercitationem porro modi!
      </SectionText>
      <Button>
        <a href="mailto:Bram.Janssen2@hva.nl">Contact me</a>
      </Button>
    </LeftSection>
  </Section>
);

export default Description;
