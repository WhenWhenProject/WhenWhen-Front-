export const useGetUser = (token: string | null) => {
  return {
    isLogin: token ? true : false,
    token,
  };
};

export const setLogin = (token: string, social: string) => {
  localStorage.setItem('access_token', token);
  localStorage.setItem('social', social);
};
