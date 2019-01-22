const defaultState = false;

export default function setSubmitStatus(state = defaultState, action) {
    switch (action.type) {
       case 'SET_SUBMIT_STATUS':
           return action.setSubmitStatus;
       default:
           return state;
  }
}