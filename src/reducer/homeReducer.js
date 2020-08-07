import ActionList from '../action/actionsList';

const initState = {
    // index: 0,
    isLoaded: false,
    dataArray: []
}

const fetchHomeData = (state = initState, action) => {
    const { type, param } = action;
    const dataArray = param;
    switch (type) {
        case ActionList.Home_Data_Request_Successful:
            return { ...state, dataArray, isLoaded: true }
        case ActionList.Home_Data_Request_Failed:
            return state;
        default:
            return state;
    }
}

export default fetchHomeData;