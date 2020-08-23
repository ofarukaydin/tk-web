import { isServer } from "util/isServer";

const AUTH_TOKEN = "auth-token";

export const getToken = () => {
  if (!isServer()) {
    return localStorage.getItem(AUTH_TOKEN);
  }
  return null;
};
export const setToken = (token: string) => {
  if (!isServer()) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};
export const deleteToken = () => {
  if (!isServer()) {
    localStorage.removeItem(AUTH_TOKEN);
  }
};

export const checkAuthState = (): void => {
  const token = localStorage.getItem("token");
  const expirationDate = new Date(Number.parseInt(getToken() || "", 10) * 1000);

  if (
    !token ||
    !(expirationDate instanceof Date) ||
    expirationDate <= new Date()
  ) {
    deleteToken();
  } else if (token) {
    setToken(token);
    setTimeout(() => {
      deleteToken();
    }, (expirationDate as any) - (new Date() as any));
  }
};
