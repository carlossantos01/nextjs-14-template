import { Token } from "@/domain/model/authentication";

class AuthUtils {
  private static readonly AUTH_TOKEN_KEY = "jhi-authenticationToken";

  static readonly setAuthToken = (token: Token): void => {
    return localStorage.setItem(this.AUTH_TOKEN_KEY, JSON.stringify(token));
  };

  static getAuthToken(): Token | null {
    const token: string | null = localStorage.getItem(this.AUTH_TOKEN_KEY);
    return token === null ? null : { id_token: token };
  }

  static readonly removeAuthToken = (): void => {
    localStorage.removeItem(this.AUTH_TOKEN_KEY);
  };
  static readonly cleanAsyncStorage = (): void => {
    localStorage.clear();
  };
}

export default AuthUtils;
