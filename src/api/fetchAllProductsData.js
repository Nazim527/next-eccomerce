import { instance } from "."

export const getFetchAllProducts = async () => {
    const resCatg = await instance.get("api/products/")

    return resCatg.data
}