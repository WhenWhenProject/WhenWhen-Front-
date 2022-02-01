const envConfig = {
  kakaoKey: process.env.REACT_APP_KAKAO_CLIENT_ID as string,
  kakoJsKey: process.env.REACT_APP_KAKAO_JS_CLIENT_ID as string,
  kakaoRedirect: process.env.REACT_APP_KAKAO_REDIRECT as string,
  googleKey: process.env.REACT_APP_GOOGLE_CLIENT_ID as string,
  googleRedirect: process.env.REACT_APP_GOOGLE_REDIRECT as string,
};

export default envConfig;
