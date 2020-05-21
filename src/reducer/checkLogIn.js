import ActionList from '../action/actionsList'

const initState = {
    isLogin: localStorage.getItem('userName') === null ? false : true
}

const checkLogin = (state = initState, action) => {
    const { type } = action
    switch (type) {
        case ActionList.Check_LogIn_Loged:
            return { ...state, isLogin: true }
        case ActionList.Check_LogIn_Not_Loged:
            localStorage.removeItem('userName');
            localStorage.removeItem('userFavicon');
            return { ...state, isLogin: false }
        case ActionList.Log_Out_End:
            localStorage.removeItem('userName');
            localStorage.removeItem('userFavicon');
            return { ...state, isLogin: false }
        default: return state
    }
}

export default checkLogin;