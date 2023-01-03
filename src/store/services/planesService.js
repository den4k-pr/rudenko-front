import axios from "axios";

const getPlanes = async () => {
    const planes = await axios.get('/api/planes');

    return planes.data;
}

const getPlane = async (id) => {
    const plane = await axios.get(`https://rudenko-back.up.railway.app/api/planes/${id}`);

    return plane.data;
}

export const deletePlane = async (id) => {
    const delPlane = await axios.delete(`https://rudenko-back.up.railway.app/api/planes/${id}`);

    return delPlane.data;
}

const createPlane = async (planeData) => {
    const planes = await axios.post(`https://rudenko-back.up.railway.app/api/planes`, planeData);

    return planes.data;
}

const planesServise = {
    getPlanes,
    getPlane,
    createPlane,
    deletePlane
}

export default planesServise;