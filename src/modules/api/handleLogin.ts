import axios from 'axios';

const handleLogin = async (snsType: 'google' | 'naver' | 'kakao') => {
  let res;
  switch (snsType) {
    case 'google':
      console.log(res);
      break;
    case 'naver':
      console.log(res);
      break;
    case 'kakao':
      console.log(res);
      break;
  }
};

export default handleLogin;
