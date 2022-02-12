import styled from "styled-components";
import KakaoLoginBtn from "../../components/sign/KakaoLoginBtn";
import GoogleLoginBtn from "../../components/sign/GoogleLoginBtn";
import NaverLoginBtn from "../../components/sign/NaverLoginBtn";

const Sign = () => {
  return (
    <StyledWrapper>
      <KakaoLoginBtn />
      <GoogleLoginBtn />
      <NaverLoginBtn />
    </StyledWrapper>
  );
};

export default Sign;

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
