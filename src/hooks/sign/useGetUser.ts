export const useGetUser = () => {
  const user = sessionStorage.getItem("user");
  return {
    login: user ? true : false,
  };
};

export const sessionLogin = (token: string) => {
  sessionStorage.setItem("user", token);
};
