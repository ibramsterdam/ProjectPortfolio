import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiDumbbell } from 'react-icons/bi';
import { DiCode } from 'react-icons/di';
import * as HStyles from './HeaderStyles';
import Modal from '../Modal/Modal';
import { NavLink, SocialIcons } from './HeaderStyles';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <HStyles.Container>
      <HStyles.NavIcon>
        <Link href="/">
          <HStyles.NavIconText>
            <DiCode size="3rem" />
            <HStyles.NavSpan>Dev Bram</HStyles.NavSpan>
          </HStyles.NavIconText>
        </Link>
      </HStyles.NavIcon>
      <HStyles.NavSubjects>
        <li>
          <Link href="/#projects">
            <NavLink>Portfolio</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setShowModal(true);
            }}
          >
            Contact Me
          </NavLink>

          <div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              Test
            </Modal>
          </div>
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
};

export default Header;
