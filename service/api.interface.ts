import type { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

export interface TokenRequest {
  accessToken: string;
  expiresAt: number;
}

export interface RequestConfig extends AxiosRequestConfig {
  notNeedAuth?: boolean;
}

export interface InternalRequestConfig extends InternalAxiosRequestConfig {
  notNeedAuth?: boolean;
}

export type ApiErrorHandler = (error: AxiosError) => void;
