import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import * as HStyles from './HeaderStyles';
import { NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <HStyles.Container>
    <HStyles.NavIcon>
      <Link href="/">
        <HStyles.NavIconText>
          <DiCssdeck size="3rem" />
          <HStyles.NavSpan>Portfolio</HStyles.NavSpan>
        </HStyles.NavIconText>
      </Link>
    </HStyles.NavIcon>
    <HStyles.NavSubjects>
      <li>
        <Link href="/#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#About">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </HStyles.NavSubjects>
    <HStyles.NavSocials>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/bram-janssen-aa0859210/">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="https://facebook.com">
        <AiFillFacebook size="3rem"></AiFillFacebook>
      </SocialIcons>
    </HStyles.NavSocials>
  </HStyles.Container>
);

export default Header;
