import { combineReducers } from "redux";
import bookingReducer from "./booking_reducer";
import createInquiryReducer from "./create_inquiry_reducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    bookings: bookingReducer,
    createInquiry: createInquiryReducer,
    form: formReducer
});