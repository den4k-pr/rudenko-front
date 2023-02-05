import axios from "axios";

const getCategories = async () => {
    const categories = await axios.get('https://backend-production-9fa0.up.railway.app/api/categories');

    return categories.data;
}


export const deleteCategories = async (id) => {
    const delCategories = await axios.delete(`https://backend-production-9fa0.up.railway.app/api/categories/${id}`);

    return delCategories.data;
}

const createCategory = async (planeData) => {
    const categories = await axios.post(`https://backend-production-9fa0.up.railway.app/api/categories`, planeData);

    return categories.data;
}

const categoriesServise = {
    getCategories,
    createCategory,
    deleteCategories
}

export default categoriesServise;
