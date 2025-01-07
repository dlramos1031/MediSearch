import axios from 'axios';

const api = axios.create({
    baseURL: process.env.SUPABASE_URL, // Replace with your server's URL
    timeout: 10000,
});

export const getAllHospitals = () => api.get('/hospitals');
export const getHospitalsBySpecialization = (specializationId) =>
    api.get(`/hospitals/specialization/${specializationId}`);
export const searchHospitalsByName = (name) =>
    api.get(`/hospitals/search`, { params: { name } });
export const getHospitalsByProximity = (lat, lng, radius) =>
    api.get(`/hospitals/proximity`, { params: { lat, lng, radius } });

export default api;
