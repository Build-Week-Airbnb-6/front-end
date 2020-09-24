import axios from 'axios';
export default function AxiosWithAuth(){
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://camhonis-airbnb.herokuapp.com',
        headers: {authorization: `Bearer ${token}`}
    })
}