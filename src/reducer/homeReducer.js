import ActionList from '../action/actionsList';

const initState = {
    index: 0,
    dataArray: []
}

const fetchHomeData = (state = initState, action) => {
    const { type, param } = action;
    switch (type) {
        case ActionList.Home_Data_Request_Successful:
            const index = state.index + 6;
            const dataArray = [...state.dataArray, ...param];
            return { ...state, index, dataArray }
        case ActionList.Home_Data_Request_Failed:
            return state;
        default:
            return state;
    }
}

export default fetchHomeData;