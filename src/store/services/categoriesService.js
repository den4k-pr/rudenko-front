import axios from "axios";

const getCategories = async () => {
    const categories = await axios.get('https://rudenko-back-production.up.railway.app/api/categories/');

    return categories.data;
}


export const deleteCategories = async (id) => {
    const delCategories = await axios.delete(`https://rudenko-back-production.up.railway.app/api/categories/${id}`);

    return delCategories.data;
}

const createCategory = async (planeData) => {
    const categories = await axios.post(`https://rudenko-back-production.up.railway.app/api/categories`, planeData);

    return categories.data;
}

const categoriesServise = {
    getCategories,
    createCategory,
    deleteCategories
}

export default categoriesServise;
