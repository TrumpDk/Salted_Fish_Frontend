import axios from 'axios'
import location from './location'

const instance = axios.create({
    baseURL: location,
    timeout: 10000,
    withCredentials: true
});

export default class HttpUtil {
    static get(url, params = {}) {
        return new Promise((resolve, reject) => {
            instance.get(url, { params }).then(result => {
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
                reject({ err: err.message });
            })
        })
    }
}