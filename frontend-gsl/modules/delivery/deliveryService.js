import axios from 'axios';

const DELIVERY_ENDPOINT = 'http://localhost:8083';

export const getDeliveryById = id =>  axios.get(`${DELIVERY_ENDPOINT}/deliveries/${id}`).then(response => response.data);

