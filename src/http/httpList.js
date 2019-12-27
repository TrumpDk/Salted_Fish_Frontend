import HttpUtil from './httpUtil'

export default class httpService {
    /**
     * user log in
     */
    static logIn = params => HttpUtil.post('/LogIn', params);

    /**
     * user register
     */
    static register = params => HttpUtil.post('/Register', params);

    /**
     * find user by name
     */
    static findUserByName = params => HttpUtil.post('/FindUserByName', params);

    /**
     * check log in
     */
    static checkLogIn = params => HttpUtil.get('/checkLogIn', params);

    /**
     * load init data for home page
     */
    static loadCommodityForHome = params => HttpUtil.post('/loadHomeData', params);
}