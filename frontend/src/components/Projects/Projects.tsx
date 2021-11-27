import React from 'react';

import * as Pstyles from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding={true} id="projects">
    <SectionDivider />
    <SectionTitle main={true}>Projects</SectionTitle>
    <Pstyles.GridContainer>
      {[0, 1, 23, 4, 5].map((project) => (
        <div>{project}</div>
      ))}
    </Pstyles.GridContainer>
  </Section>
);

export default Projects;
