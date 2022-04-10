import axios from 'axios';

export const login = ({username, password}) => {
    return axios.post('http://localhost:8081/auth/login', {username, password}).then(response => {
        const {token, user} = response.data
        return {token, user};
    });
}