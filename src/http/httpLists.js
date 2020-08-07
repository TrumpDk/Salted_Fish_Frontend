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
    checkLogin: params => HttpUtil.get('/checkLogIn', params),

    /**
     * load init data for home page
     */
    loadCommodityForHome: params => HttpUtil.get('/loadHomeData'),

    /**
     * log out
     */
    signout: () => HttpUtil.get('/Logout'),

    /**
     * fetch Categories and SubCategories
     */
    getCates: params => HttpUtil.get('/getInitCates', params),

    /**
     * fetch sub cate items
     */
    getSubCateItems: params => HttpUtil.get('/getSubCatesList', params),

    /**
     * fetch item detail
     */
    getItemDetail: params => HttpUtil.get('/getItemDetail', params)
}

export default httpService;