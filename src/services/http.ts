import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const access_key =
  process.env.REACT_FIXER_API_KEY || 'iRymMbi6eQQPxPtLfgGr3fQDq90ofB7A';
class Http {
  client: AxiosInstance;
  constructor() {
    const initialClient = axios.create({
      baseURL: 'https://api.apilayer.com/fixer',
      timeout: 800000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    initialClient.interceptors.request.use(this.handleRequestHeader);

    initialClient.interceptors.response.use(
      this.handleSuccess,
      this.handleError,
    );

    this.client = initialClient;
  }

  handleRequestHeader = (config: any) => {
    config.headers.apikey = access_key;

    return config;
  };

  handleSuccess = (response: AxiosResponse) => {
    return response.data;
  };

  handleError = (error: AxiosError) => {
    let errorTemp = null;

    if (error.response?.status === 401) {
      //   logout();
    } else if (error.response?.status === 403) {
      errorTemp = {
        status: error.status,
        message: 'User is not authorized to perform this action',
      };
    } else {
      // Something else happened while setting up the request
      // triggered the error
      errorTemp = {
        status: -1,
        message: error.message,
        // @ts-ignore
        errorMessage: error.response?.data?.message || '',
      };
    }

    return Promise.reject(errorTemp);
  };
}

export default new Http().client;
