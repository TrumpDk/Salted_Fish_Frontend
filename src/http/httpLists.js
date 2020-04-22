import HttpUtil from './httpUtil'

const httpService = {
    /**
     * user log in
     */
    logIn: params => HttpUtil.post('/LogIn', params),

    /**
     * user register
     */
    register: params => HttpUtil.post('/Register', params),

    /**
     * find user by name
     */
    findUserByName: params => HttpUtil.post('/FindUserByName', params),

    /**
     * check log in
     */
    checkLogIn: params => HttpUtil.get('/checkLogIn', params),

    /**
     * load init data for home page
     */
    loadCommodityForHome: params => HttpUtil.post('/loadHomeData', params),
}

export default httpService;