import styled from 'styled-components';
import KakaoLoginBtn from '../../components/sign/KakaoLoginBtn';
import GoogleLoginBtn from '../../components/sign/GoogleLoginBtn';

const Sign = () => {
  return (
    <div>
      <StyledWrapper>
        <KakaoLoginBtn></KakaoLoginBtn>
        <GoogleLoginBtn></GoogleLoginBtn>
      </StyledWrapper>
    </div>
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
