import styled from "styled-components";
import KakaoLoginBtn from "../../components/sign/KakaoLoginBtn";

const Sign = () => {
  return (
    <StyledWrapper>
      <KakaoLoginBtn></KakaoLoginBtn>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Sign;
