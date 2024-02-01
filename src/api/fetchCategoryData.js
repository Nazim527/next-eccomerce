import { instance } from "."

export const fetchCategoryData = async (category) => {
    const res = await instance.get(`api/products/?category=${category}`);
    return res.data;
};