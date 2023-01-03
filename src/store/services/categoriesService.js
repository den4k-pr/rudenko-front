import axios from "axios";

const getCategories = async () => {
    const categories = await axios.get('https://rudenko.up.railway.app/api/categories');

    return categories.data;
}


export const deleteCategories = async (id) => {
    const delCategories = await axios.delete(`https://rudenko.up.railway.app/api/categories/${id}`);

    return delCategories.data;
}

const createCategories = async (planeData) => {
    const categories = await axios.post(`https://rudenko.up.railway.app/api/categories`, planeData);

    return categories.data;
}

const categoriesServise = {
    getCategories,
    createCategories,
    deleteCategories
}

export default categoriesServise;