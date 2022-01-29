import envConfig from "../Envkey";

export const API_KAKAO_LOGIN = "https://kauth.kakao.com/oauth/token";
export const API_KAKAO_REDIRECT = `https://kauth.kakao.com/oauth/authorize?client_id=${envConfig.kakaoKey}&redirect_uri=${envConfig.kakaoRedirect}&response_type=code`;
