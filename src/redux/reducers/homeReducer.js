import actionList from '../actions/actionsList';

const initState = {
    data: []
};

const fetchHomeData = (state = initState, action) => {
    const { type, param } = action;
    switch (type) {
        case actionList.Home_Data_Request_Successful:
            return { ...state, param }
        case actionList.Home_Data_Request_Failed:
            return state;
        default:
            return state;
    }
}

export default fetchHomeData;