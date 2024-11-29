import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type {
  InternalRequestConfig,
  RequestConfig,
  ApiErrorHandler
} from '@/service/api.interface';

export class ApiService {
  private static instance: ApiService;

  #api = axios.create({
    timeout: 100000,
    withCredentials: true,
    baseURL: import.meta.env.VITE_API, // baseURL 설정
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json;charset=utf-8'
    }
  });
  #errorHandler: ApiErrorHandler;

  private constructor() {
    if (ApiService.instance) {
      throw new Error('Error: Instantiation failed: Use getInstance() instead of new.');
    }
    ApiService.instance = this;
  }

  static get Instance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async init(apiErrorHandler: ApiErrorHandler) {
    this.#api.defaults.baseURL = import.meta.env.VITE_API;
    this.#errorHandler = apiErrorHandler;
    this.#requestHook();
    this.#responseHook();
  }

  #requestHook() {
    this.#api.interceptors.request.use(async (config: InternalRequestConfig) => {
      const notNeedAuth = config.notNeedAuth;
      if (notNeedAuth) {
        delete config.notNeedAuth;
        return config;
      }
      return config;
    });
  }

  #responseHook() {
    this.#api.interceptors.response.use(async (response: AxiosResponse) => {
      //console.log('Response:', response);
      console.log('Response Details:', {
        url: response.config?.baseURL + '' + response.config?.url,
        method: response.config?.method,
        data: response.data,
        status: response.status,
        headers: response.headers
      });
      return response.data;
    }, this.#errorHandler);
  }

  testHookSetup() {
    // Setup request interceptor
    this.#api.interceptors.request.use(async (config: InternalRequestConfig) => {
      console.log('='.repeat(50)); // 구분선 추가
      console.log('Request Started');
      console.log('Request Details:', {
        url: config.baseURL + '' + config.url,
        method: config.method,
        data: config.data,
        headers: config.headers
      });
      console.log('Request Ended');
      console.log('='.repeat(50)); // 구분선 추가
      return config;
    });

    // Setup response interceptor
    this.#api.interceptors.response.use(
      (response: AxiosResponse) => {
        //기본 interceptors.response에서 response.data만 반환
        //Response Ended 만 출력
        /*
        console.log('='.repeat(50)); // 구분선 추가
        console.log('Response Started');
        console.log('Response Details:', {
          url: response.config?.baseURL + '' + response.config?.url,
          method: response.config?.method,
          data: response.data,
          status: response.status,
          headers: response.headers
        });
        */
        console.log('Response Ended');
        console.log('='.repeat(50) + '\n\n'); // 구분선 추가
        return response;
      },
      (error) => {
        console.log('='.repeat(50)); // 구분선 추가
        //console.error('Response Error:', error);
        console.log('Response Error!');
        console.log('Response Error:', {
          url: error.config?.baseURL + '' + error.config?.url,
          method: error.config?.method,
          data: error.response.data,
          status: error.response.status,
          statusText: error.response.statusText,
          headers: error.response.headers
        });
        console.log('='.repeat(50)); // 구분선 추가
        console.log('Response Error Details:', error);
        console.log('='.repeat(50)); // 구분선 추가
        return Promise.reject(error);
      }
    );
  }

  get(url: string, config?: RequestConfig): Promise<any> {
    return this.#api.get(url, config);
  }

  post(url: string, data?: any, config?: RequestConfig): Promise<any> {
    return this.#api.post(url, data, config);
  }

  put(url: string, data?: any, config?: RequestConfig): Promise<any> {
    return this.#api.put(url, data, config);
  }

  patch(url: string, data?: any, config?: RequestConfig): Promise<any> {
    return this.#api.patch(url, data, config);
  }

  delete(url: string, config?: RequestConfig): Promise<any> {
    return this.#api.delete(url, config);
  }
}
