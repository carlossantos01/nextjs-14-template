import {
  AuthorizationHeader,
  ContentTypeHeader,
} from "@/domain/enums/api/apiConfig";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export interface ApiParams {
  apiName: string;
  baseUrl?: string;
  authorizationHeader?: AuthorizationHeader;
  contentTypeHeader?: ContentTypeHeader;
}

export type CustomQueryReturnValue<T, E, M> =
  | {
      error: E;
      data?: never;
      meta?: M;
    }
  | {
      error?: never;
      data: T;
      meta?: M;
    };

export interface ApiResponse<T> {
  data: T;
  error: FetchBaseQueryError;
  meta: {
    response: Response;
    request: Request;
  };
}
export interface ApiErrorResponse {
  detail: string;
  message: string;
  path: string;
  status: number;
  title: string;
}

export type CustomFetchBaseQueryError<T> = Omit<FetchBaseQueryError, "data"> & {
  data: T;
};

export interface CatchResponseError {
  error: CustomFetchBaseQueryError<ApiErrorResponse>;
  isUnhandledError: boolean;
  meta: {
    response: Response;
    request: Request;
  };
}
