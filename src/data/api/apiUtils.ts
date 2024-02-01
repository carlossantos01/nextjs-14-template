import {
  AuthorizationHeader,
  ContentTypeHeader,
} from "@/domain/enums/api/apiConfig";
import {
  ApiErrorResponse,
  CustomFetchBaseQueryError,
  CustomQueryReturnValue,
} from "@/domain/model/api/apiConfig";
import AuthUtils from "@/infrastructure/utils/authUtils";
import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

export const prepareHeadersWithAuth = (
  headers: Headers,
  authorizationHeader: AuthorizationHeader
): Headers => {
  const token = AuthUtils.getAuthToken();
  if (token) {
    headers.set("Authorization", `${authorizationHeader} ${token.id_token}`);
  }
  headers.set("Content-Type", ContentTypeHeader.JSON);
  return headers;
};

export const handleApiResponse = async <T>(
  baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions = {}
): Promise<CustomQueryReturnValue<T, FetchBaseQueryError, {}>> => {
  const response = await baseQuery(args, api, extraOptions);

  if (response.error) {
    const error = response.error as CustomFetchBaseQueryError<ApiErrorResponse>;

    // TODO: Ajustar tratamento de erros
    if (error.status === 401) {
    }
    if (error.status === 403) {
    }
    if (error.status === 400) {
    }
    return { error: response.error, meta: response.meta };
  }

  return { data: response.data as T, meta: response.meta };
};
