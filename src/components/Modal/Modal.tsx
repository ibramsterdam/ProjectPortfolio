import React, { useEffect, useState } from 'react';
import { BsXCircle } from 'react-icons/bs';
import ReactDOM from 'react-dom';
import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import {
  StyledModalOverlay,
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledModalWrapper,
  LeftSection,
  RightSection,
  SectionTitle,
  SectionSubTitle,
  Links,
} from './ModalStyles';

const Modal = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  // create ref for the StyledModalWrapper component
  const modalOverlayRef = React.useRef<HTMLHeadingElement>(null);

  //Check whether the click is in or out of the modalOverlay
  const backDropHandler = (e: any) => {
    if (modalOverlayRef?.current == e.target) {
      onClose();
    }
  };

  //Listener to the window object on the initial render and then remove the listener when the modal is closed
  useEffect(() => {
    setIsBrowser(true);
    window.addEventListener('click', backDropHandler);
    return () => window.removeEventListener('click', backDropHandler);
  }, []);

  React.useLayoutEffect(() => {}, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay ref={modalOverlayRef}>
      <StyledModalWrapper>
        <StyledModal>
          <StyledModalHeader>
            <a href="#" onClick={handleCloseClick}>
              <BsXCircle size="3rem"></BsXCircle>
            </a>
          </StyledModalHeader>
          <StyledModalBody>
            <LeftSection>
              <SectionTitle>Contact Information</SectionTitle>
              <br />
              <SectionSubTitle>
                Or fill in the contact information and click send!
              </SectionSubTitle>
              <br />
              <br />
              <Links>
                <AiFillPhone></AiFillPhone> 06********
                <br />
              </Links>
              <Links>
                <AiFillMail></AiFillMail> Bram.Janssen2@hva.nl
              </Links>
            </LeftSection>
            <RightSection>
              <form></form>
            </RightSection>
          </StyledModalBody>
        </StyledModal>
      </StyledModalWrapper>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;

//Used - https://devrecipes.net/modal-component-with-next-js/
