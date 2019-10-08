import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.baseURL,
    timeout: 1000
});

export default class HttpUtil {
    static get(url, params = {}) {
        return new Promise((resolve, reject) => {
            instance.get(url, {params}).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }

    static post(url, params = {}) {
        return new Promise((resolve, reject) => {
            instance.post(url, params).then(result => {
                resolve(result.data);
            }).catch(err => {
                reject({err: err.message});
            })
        })
    }
}