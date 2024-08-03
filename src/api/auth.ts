import { useLogin } from "../store/authStore";
import { httpClient } from "./http";

export const backLogin = async (user: any) => {
  const result = await httpClient.post(`/member/oauth/kakao/login/v2`, user);
  if (result.data) {
    httpClient.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${result.data.data.access_token}`;
  }
  return result.data;
};

export const getUser = async () => {
  const result = await httpClient.get(`/member/info/get`);
  console.log("???????", result);
  return result.data;
};

export const patchUserNickname = async (nickname: string) => {
  await httpClient.put(`/member/nickname/update`, {
    nickname: nickname,
  });
};

export const tokenRefresh = async (refreshToken: string) => {
  const { setRefresh } = useLogin.getState();
  const { data } = await httpClient.post(`/member/token/refresh`, {
    refresh_token: refreshToken,
  });
  httpClient.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${data.data.access_token}`;
  console.log("???머ㅗ요ㅕ", data.data.access_token);
  console.log("리프셋깅", data.data.refresh_token);
  setRefresh(data.data.refresh_token);
};
