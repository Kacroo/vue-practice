import axios from 'axios';


const GET = (url) => {
    return axios
        .get(url)
        .then(res => Promise.resolve(res))
        .catch(err =>{
            return Promise.reject(err)
        })
}

export default {
    ...axios,
    GET
}