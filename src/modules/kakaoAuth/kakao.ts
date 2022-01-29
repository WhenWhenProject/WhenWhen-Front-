import envConfig from "../Envkey";

const { Kakao } = window;

Kakao.init(envConfig.kakoJsKey);

export default Kakao;
