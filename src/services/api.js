import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:5000/api',
    timeout: 10000,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API error:', error);
        return Promise.reject(error);
    }
);

export const getAllHospitals = () => api.get('/hospitals');
export const getHospitalsBySpecialization = (specializationId) =>
    api.get(`/hospitals/specialization/${specializationId}`);
export const searchHospitalsByName = (name) =>
    api.get(`/hospitals/search`, { params: { name } });
export const getHospitalsByProximity = (lat, lng, radius) =>
    api.get(`/hospitals/proximity`, { params: { lat, lng, radius } });
export const getHospitalById = (hospitalId) =>
    api.get(`/hospitals/${hospitalId}`);
export default api;
