import { instance } from "."

export const getFetchCategories = async () => {
    const resCatg = await instance.get("api/categories/")

    return resCatg.data
}
//! Choose Single categoriy
export const getSingleCategories = async (id) => {
    const response = await instance.get(`api/categories/${id}/`);
  
    return response.data
}