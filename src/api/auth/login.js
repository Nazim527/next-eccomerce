import { instance } from "..";

export const login = async (logObj) => {
  const res = await instance.post(
    "accounts/api/login/",
    JSON.stringify(logObj)
  );

  return res.data;
};
