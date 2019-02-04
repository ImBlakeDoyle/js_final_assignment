import axios from "axios";

export const createBooking = ({ first_name, last_name, email, guests, checkin, checkout, cost, phone, comment, token }) => {
    return async (dispatch, getState) => {
        let response = await axios.post("http://localhost:3000/booking/new", { first_name, last_name, email, guests, checkin, checkout, cost, phone, comment, token});

        dispatch ({
            type: "BOOKING",
            payload: response.data
        });
    }
}

export const fetchInvalid = () => {
    return async (dispatch, getState) => {
        let response = await axios.get("http://localhost:3000/booking/invalid");

        dispatch({
            type: "INVALID_DATES",
            payload: response.data
        });
    }
}

export const createInquiry = ({ name, email, comment, phone }) => {
    return async (dispatch, getState) => {
        let response = await axios.post("http://localhost:3000/inquiry/new", {name, email, comment, phone});

        dispatch({
            type: "INQUIRY_CREATE",
            payload: response.data
        });
    }
}

export function setSubmitStatus(setSubmitStatus) {
    return {
         type: 'SET_SUBMIT_STATUS',
         payload: setSubmitStatus
    };
 }

 export const handleToken = (token) => {
     return async (dispatch, getState) => {
         console.log(token);
        let response = await axios.post('http://localhost:3000/booking/stripe', token);
        dispatch({
            type: "PAYMENT",
            payload: response.data
        });
    };
}

