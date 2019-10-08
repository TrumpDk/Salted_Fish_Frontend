import HttpUtil from './httpUtil'

export default class httpService {
    /**
     * type post, params needed
     */
    static logIn = params => HttpUtil.post('/LogIn', params);
}