const initState = []

const example = (state = initState, action) => {
    switch (action.type) {
        case 'add_todo':
            return state.concat([action.param]);
        default:
            return state
    }
}

export default example;