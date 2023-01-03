import axios from "axios";

const getCategories = async () => {
    const categories = await axios.get('/api/categories');

    return categories.data;
}


export const deleteCategories = async (id) => {
    const delCategories = await axios.delete(`/api/categories/${id}`);

    return delCategories.data;
}

const createCategories = async (planeData) => {
    const categories = await axios.post(`/api/categories`, planeData);

    return categories.data;
}

const categoriesServise = {
    getCategories,
    createCategories,
    deleteCategories
}

export default categoriesServise;