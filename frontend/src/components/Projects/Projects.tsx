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
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <Pstyles.BlogCard key={id}>
            <Pstyles.Img src={image} />
            <Pstyles.TitleContent>
              <Pstyles.HeaderThree headerTitle={true}>
                {title}
              </Pstyles.HeaderThree>
              <Pstyles.Hr />
            </Pstyles.TitleContent>
            <Pstyles.CardInfo>{description}</Pstyles.CardInfo>
            <div>
              <Pstyles.TitleContent>Stack</Pstyles.TitleContent>
              <Pstyles.TagList>
                {tags.map((tag, i) => (
                  <Pstyles.Tag key={i}>{tag}</Pstyles.Tag>
                ))}
              </Pstyles.TagList>
            </div>
            <Pstyles.UtilityList>
              <Pstyles.ExternalLinks href={visit}>Code</Pstyles.ExternalLinks>
              <Pstyles.ExternalLinks href={source}>
                Source
              </Pstyles.ExternalLinks>
            </Pstyles.UtilityList>
          </Pstyles.BlogCard>
        )
      )}
    </Pstyles.GridContainer>
  </Section>
);

export default Projects;
