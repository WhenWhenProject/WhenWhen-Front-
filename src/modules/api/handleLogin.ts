import axios from "axios";
import {
  API_GOOGLE_LOGIN,
  API_KAKAO_LOGIN,
  API_NAVER_LOGIN,
} from "./keyFactory";

const handleLogin = async (snsType: "google" | "naver" | "kakao") => {
  let res;
  switch (snsType) {
    case "google":
      res = await axios.get(API_GOOGLE_LOGIN);
      console.log(res);
      break;
    case "naver":
      res = await axios.get(API_NAVER_LOGIN);
      console.log(res);
      break;
    case "kakao":
      res = await axios.get(API_KAKAO_LOGIN);
      console.log(res);
      break;
  }
};

export default handleLogin;
