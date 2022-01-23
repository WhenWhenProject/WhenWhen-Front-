import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sessionLogin } from "../hooks/sign/useGetUser";
import envConfig from "../modules/Envkey";

const kakaoAuth = "https://kauth.kakao.com/oauth/token";

interface IbodyData {
  grant_type: string;
  client_id: string;
  redirect_uri: string;
  code: string;
  [prop: string]: any;
}

interface ItokenData {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
}

const OauthRedirect = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href)!.searchParams!.get(
    "code"
  ) as string;

  const bodyData: IbodyData = {
    grant_type: "authorization_code",
    client_id: envConfig!.kakaoKey,
    redirect_uri: envConfig!.kakaoRedirect,
    code,
  };

  const queryStringBody = Object.keys(bodyData)
    .map(
      (query) => encodeURIComponent(query) + "=" + encodeURI(bodyData[query])
    )
    .join("&");

  const getKakaoToken = async () => {
    try {
      const { data } = await axios.post(kakaoAuth, queryStringBody);
      await setToken(data);
    } catch (e) {
      console.log(e);
    }
  };

  const setToken = async (data: ItokenData) => {
    sessionLogin(data.access_token);
    sessionStorage.setItem("refresh_token", data.refresh_token);
    navigate("/");
  };

  useEffect(() => {
    getKakaoToken();
  }, []);
  return <div>로딩중</div>;
};

export default OauthRedirect;
