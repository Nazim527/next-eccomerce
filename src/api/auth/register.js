import { instance } from "..";

export const register = async (registerObj) => {
    const res = await instance.post('accounts/api/register/',
    JSON.stringify(registerObj),
    )
    return res.data
}