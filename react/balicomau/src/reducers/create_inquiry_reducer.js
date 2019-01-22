const defaultState = [];

export default (state = defaultState, action) => {
    switch(action.type) {
        case "INQUIRY_CREATE":
            return action.payload;
        default: 
            return state;
    }
}