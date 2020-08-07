import axios from 'axios'
import location from './location'
import storage from '../shared/utils/storage'
import ActionList from '../action/actionsList'

const instance = axios.create({
    baseURL: location,
    timeout: 10000,
    withCredentials: true
});

instance.interceptors.response.use(response => {
    if (response.data.code === "403") {
        storage.dispatch({ type: ActionList.Check_LogIn_Not_Loged });
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default class HttpUtil {
    static get(url, params = undefined) {
        if (params) {
            url += params
        }
        return new Promise((resolve, reject) => {
            instance.get(url).then(result => {
                resolve(result.data);
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