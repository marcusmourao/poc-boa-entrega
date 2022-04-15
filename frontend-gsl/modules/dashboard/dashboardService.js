import axios from 'axios';

const DASHBOARD_ENDPOINT = 'http://localhost:8084/dashboard';


export const fetchDashboard = () => {
    return axios.get(DASHBOARD_ENDPOINT).then(response => {
        const {
            deliveriesPerMonth,
            monthlyRevenue,
            lastDeliveries,
        } = response.data;

        return {
            deliveriesPerMonth,
            monthlyRevenue,
            lastDeliveries
        }
    })
}