const dBPresets = (state = [], action) => {
    switch (action.type) {
        case 'SET_dBPresets':
            return action.payload;
        default:
            return state;
    }
}

export default dBPresets;