import Kakao from "./kakao";

export const kakaoAuth = {
  login: (parameter) => {
    return Kakao.Auth.authorize(parameter);
  },
  setToken: (accessToken) => {
    return Kakao.Auth.setAccessToken(accessToken);
  },
  getToken: () => {
    return Kakao.Auth.getAccessToken();
  },
  logout: (callback) => {
    return Kakao.Auth.logout(callback);
  },
};
