import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiDumbbell } from 'react-icons/bi';
import { DiCode } from 'react-icons/di';
import * as HStyles from './HeaderStyles';
import Modal from '../Modal/Modal';

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
            <HStyles.NavLink>Portfolio</HStyles.NavLink>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <HStyles.NavLink>About</HStyles.NavLink>
          </Link>
        </li>
        <li>
          <HStyles.NavLink
            onClick={() => {
              setShowModal(true);
            }}
          >
            Contact Me
          </HStyles.NavLink>

          <div>
            <Modal show={showModal} onClose={() => setShowModal(false)}></Modal>
          </div>
        </li>
      </HStyles.NavSubjects>
      <HStyles.NavSocials>
        <HStyles.SocialIcons href="https://github.com">
          <AiFillGithub size="3rem"></AiFillGithub>
        </HStyles.SocialIcons>
        <HStyles.SocialIcons href="https://www.linkedin.com/in/bram-janssen-aa0859210/">
          <AiFillLinkedin size="3rem"></AiFillLinkedin>
        </HStyles.SocialIcons>
        <HStyles.SocialIcons href="https://facebook.com">
          <AiFillFacebook size="3rem"></AiFillFacebook>
        </HStyles.SocialIcons>
      </HStyles.NavSocials>
    </HStyles.Container>
  );
};

export default Header;
