import envConfig from '../Envkey';

export const API_KAKAO_LOGIN = 'https://kauth.kakao.com/oauth/token';
export const API_KAKAO_REDIRECT = `https://kauth.kakao.com/oauth/authorize?client_id=${envConfig.kakaoKey}&redirect_uri=${envConfig.kakaoRedirect}&response_type=code`;
export const API_GOOGLE_LOGIN = 'https://accounts.google.com/o/oauth2/v2/auth';
export const API_GOOGLE_REDIRECT = `https://accounts.google.com/o/oauth2/v2/auth?
scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&
include_granted_scopes=true&
response_type=token&
redirect_uri=${envConfig.googleRedirect}&
client_id=${envConfig.googleKey}`;
export const API_GOOGLE_REDIRECT_LOGIN =
  'https://www.googleapis.com/drive/v2/files';
