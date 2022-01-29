import { kakaoAuth } from "../../modules/kakaoAuth/kakaoAuth";

export const useGetUser = () => {
  const token = kakaoAuth.getToken();
  return {
    isLogin: token ? true : false,
    token,
  };
};

export const setLogin = (token: string) => {
  kakaoAuth.setToken(token);
};
