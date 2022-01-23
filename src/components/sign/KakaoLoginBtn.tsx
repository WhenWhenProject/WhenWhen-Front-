import styled from "styled-components";
import envConfig from "../../modules/Envkey";

const KakaoLoginBtn = () => {
  const kakaoUri = `https://kauth.kakao.com/oauth/authorize?client_id=${envConfig.kakaoKey}&redirect_uri=${envConfig.kakaoRedirect}&response_type=code`;
  return (
    <StyledBtn>
      <a href={kakaoUri}>
        <img className="kakao-img" src="logo/kakao.png" alt="카카오 로그인" />
      </a>
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  border-radius: 12px;
  border: none;
  padding: 0;
  :hover {
    cursor: pointer;
  }
  a {
    display: flex;
  }
`;

export default KakaoLoginBtn;
