import ActionList from '../action/actionsList';

const initState = {
    index: 1,
    dataArray: []
}

const fetchHomeData = (state = initState, action) => {
    const { type, data } = action;
    switch (type) {
        case ActionList.Home_Data_Request_Successful:
            const index = state.index + 1;
            const dataArray = [...state.dataArray, ...data];
            return { ...state, index, dataArray }
        case ActionList.Home_Data_Request_Failed:
            return state;
        default:
            return state;
    }
}

export default fetchHomeData;