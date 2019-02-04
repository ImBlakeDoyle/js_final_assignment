import { combineReducers } from "redux";
import bookingReducer from "./booking_reducer";
import createInquiryReducer from "./create_inquiry_reducer";
import submitStatusReducer from "./set_submit_status_reducer";
import setFormOpenReducer from "./set_form_open_reducer"
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    bookings: bookingReducer,
    createInquiry: createInquiryReducer,
    submitStatus: submitStatusReducer,
    formOpen: setFormOpenReducer,
    form: formReducer
});