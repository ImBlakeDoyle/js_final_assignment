const defaultState = false;

export default (state = defaultState, action) => {
    switch (action.type) {
       case 'SET_SUBMIT_STATUS':
           return action.payload;
       default:
           return state;
  }
}