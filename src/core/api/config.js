import axios from 'axios';

export function dispatch(options) {
    let config = {
        method: options.method || 'get',
        url: options.url
    }

    return axios(config)
        .then(res => res.data)
        .catch(error => console.log(error))
}