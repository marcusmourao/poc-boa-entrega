import axios from 'axios';

const CLIENT_ENDPOINT = 'http://localhost:8082/clients';

export const getClients = () => {
    return axios.get(`${CLIENT_ENDPOINT}`).then(response => response.data)
}

export const createClient = ({ name, email, phone }) => {
    return axios.post(`${CLIENT_ENDPOINT}`, {
        name,
        phone,
        email
    }).then(response => response.data)
}

export const editClientById = ({ id, name, email, phone }) => {
    return axios.patch(`${CLIENT_ENDPOINT}/${id}`, {
        name,
        phone,
        email
    }).then(response => response.data)
}

export const getClientById = id =>  axios.get(`${CLIENT_ENDPOINT}/${id}`).then(response => response.data);

export const deleteClientById = (id) =>  axios.delete(`${CLIENT_ENDPOINT}/${id}`);