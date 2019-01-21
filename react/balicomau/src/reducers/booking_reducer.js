const defaultState = {};

export default (state = defaultState, action) => {
    switch(action.type) {
        case "BOOKING":
            return action.payload;
        default:
            return state;
    }
}