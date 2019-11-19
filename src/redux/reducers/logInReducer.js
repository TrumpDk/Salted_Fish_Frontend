import ActionList from '../actions/actionsList'

const initState = {
    isLogIn: false,
}

const logInReducer = (state = initState, action) => {
    switch (action.type) {

        case ActionList.Log_In_Successful:
            return {
                ...state,
                isLogIn: true
            };
        case ActionList.Log_In_Failed:
            return {
                ...state,
                isLogIn: false
            };

        case ActionList.Check_LogIn_Failed:
            return {
                ...state,
                isLogIn: false
            };
        case ActionList.Check_LogIn_Successfull:
            return {
                ...state,
                isLogIn: true
            };
        default: return state;
    }
}

export default logInReducer;