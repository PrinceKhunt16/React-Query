import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:4000'
});

export const request = ({ ...options }) => {
    client.defaults.headers.common.Authorization = 'Bearer token'
    
    return client(options)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        })
}