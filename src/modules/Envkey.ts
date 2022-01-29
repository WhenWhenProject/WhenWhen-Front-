const envConfig = {
  kakaoKey: process.env.REACT_APP_KAKAO_CLIENT_ID as string,
  kakoJsKey: process.env.REACT_APP_KAKAO_JS_CLIENT_ID as string,
  kakaoRedirect: process.env.REACT_APP_KAKAO_REDIRECT as string,
};

export default envConfig;
