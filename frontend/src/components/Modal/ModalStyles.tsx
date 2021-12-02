import styled from 'styled-components';

export const StyledModalBody = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
  margin: 24px 0 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr 2fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 10px;
    margin: 24px auto;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SectionTitle = styled.div`
  font-size: 25px;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 2rem;
  }
`;
export const SectionSubTitle = styled.div`
  font-size: 15px;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 1rem;
  }
`;
export const LeftSection = styled.div`
  border-radius: 12px;
  height: 100%;
  padding: 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 12px;
  }
`;
export const RightSection = styled.div`
  border-radius: 12px;
  height: 100%;
  width: 100%;
  padding: 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 12px;
  }
`;

export const Links = styled.div`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: #fff;
    left: 6px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 15px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
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
