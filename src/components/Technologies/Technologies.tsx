import React from 'react';
import { DiReact, DiAngularSimple, DiJava } from 'react-icons/di';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import * as TStyles from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
      consectetur autem quisquam qui, aut ratione? Mollitia praesentium cumque
      quae possimus?
    </SectionText>
    <TStyles.List>
      <TStyles.ListItem>
        <DiReact size="3rem" />
        <TStyles.ListContainer>
          <TStyles.ListTitle>Front-End</TStyles.ListTitle>
          <TStyles.ListParagraph>
            Experience with <br />
            React.js
          </TStyles.ListParagraph>
        </TStyles.ListContainer>
      </TStyles.ListItem>
      <TStyles.ListItem>
        <DiJava size="3rem" />
        <TStyles.ListContainer>
          <TStyles.ListTitle>Back-End</TStyles.ListTitle>
          <TStyles.ListParagraph>
            Experience with <br />
            Spring Boot
          </TStyles.ListParagraph>
        </TStyles.ListContainer>
      </TStyles.ListItem>
      <TStyles.ListItem>
        <DiAngularSimple size="3rem" />
        <TStyles.ListContainer>
          <TStyles.ListTitle>Front-End</TStyles.ListTitle>
          <TStyles.ListParagraph>
            Experience with <br />
            Angular
          </TStyles.ListParagraph>
        </TStyles.ListContainer>
      </TStyles.ListItem>
    </TStyles.List>
  </Section>
);

export default Technologies;
