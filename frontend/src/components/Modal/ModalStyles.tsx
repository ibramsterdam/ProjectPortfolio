import styled from 'styled-components';

export const StyledModalBody = styled.div`
  padding-top: 10px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

export const StyledModal = styled.div`
  background: #0f111b;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  padding: 15px;
`;
export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
`;

export const StyledModalWrapper = styled.div`
  width: 1000px;
  height: 400px;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 700px;
    height: 400px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 300px;
    height: 550px;
  }
`;
