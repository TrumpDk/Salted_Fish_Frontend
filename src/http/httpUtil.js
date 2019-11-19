import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 10000,
    withCredentials: true
});

export default class HttpUtil {
    static get(url, params = {}) {
        return new Promise((resolve, reject) => {
            instance.get(url, {params}).then(result => {
                console.log('result', result);
                resolve(result);
            }).catch(err => {
                console.log('err', err)
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