import ActionList from '../actions/actionsList'

const initState = {
    isLoading: false
}
const commonReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionList.Start_Animating:
            return {
                ...state,
                isLoading: true
            };
        case ActionList.Stop_Animating:
            return {
                ...state,
                isLoading: false
            };
        default: return { ...state }
    }
}

export default commonReducer;