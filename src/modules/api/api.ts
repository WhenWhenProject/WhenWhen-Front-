import axios from 'axios';
import envConfig from '../Envkey';

axios.defaults.withCredentials = true;
class API {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = envConfig.apiUri as string;
  }

  async CALL({ url = '', method, data = null }) {
    try {
      const access = localStorage.getItem('accessToken') as string;
      const refresh = localStorage.getItem('refreshToken') as string;
      const response = await axios({
        method,
        data,
        url: this.apiUrl + url,
        headers: {
          ...(access && { access }),
          ...(refresh && { refresh }),
        },
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  GET(urlData) {
    return this.CALL({
      method: 'GET',
      url: urlData,
    });
  }
  POST(params) {
    return this.CALL({
      ...params,
      method: 'POST',
      url: params.url,
    });
  }
  PUT(params) {
    return this.CALL({
      ...params,
      method: 'PUT',
      url: params.url,
    });
  }

  DELETE(params) {
    return this.CALL({
      ...params,
      method: 'DELETE',
      url: params.url,
    });
  }
}

export default new API();
