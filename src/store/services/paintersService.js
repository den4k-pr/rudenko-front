import axios from "axios";

const getPainters = async () => {
    const painters = await axios.get('https://backend-production-9fa0.up.railway.app/api/painters');

    return painters.data;
}

const getPainter = async (id) => {
    const painter = await axios.get(`https://backend-production-9fa0.up.railway.app/api/painters/${id}`);

    return painter.data;
}

export const deletePainter = async (id) => {
    const delPainter = await axios.delete(`https://backend-production-9fa0.up.railway.app/api/painters/${id}`);

    return delPainter.data;
}

const createPainter = async (planeData) => {
    const painters = await axios.post(`https://backend-production-9fa0.up.railway.app/api/painters`, planeData);

    return painters.data;
}

const paintersServise = {
    getPainters,
    getPainter,
    createPainter,
    deletePainter
}

export default paintersServise;
