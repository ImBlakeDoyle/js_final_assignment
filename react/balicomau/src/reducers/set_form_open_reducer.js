const defaultState = false;

export default (state = defaultState, action) => {
    switch (action.type) {
       case 'SET_FORM_OPEN':
           return action.payload;
       default:
           return state;
  }
}