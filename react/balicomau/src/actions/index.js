import axios from "axios";

export const createBooking = ({ first_name, last_name, email, guests, checkin, checkout, cost, phone, comment, token }) => {
    return async (dispatch, getState) => {
        let response = await axios.post(`${process.env.REACT_APP_API_URI}booking/new`, { first_name, last_name, email, guests, checkin, checkout, cost, phone, comment, token});

        dispatch ({
            type: "BOOKING",
            payload: response.data
        });
    }
}

export const fetchInvalid = () => {
    return async (dispatch, getState) => {
        let response = await axios.get(`${process.env.REACT_APP_API_URI}booking/invalid`);

        dispatch({
            type: "INVALID_DATES",
            payload: response.data
        });
    }
}

export const createInquiry = ({ name, email, comment, phone }) => {
    return async (dispatch, getState) => {
        let response = await axios.post(`${process.env.REACT_APP_API_URI}inquiry/new`, {name, email, comment, phone});

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

 export function setFormOpen(setFormOpen) {
    return {
         type: 'SET_FORM_OPEN',
         payload: setFormOpen
    };
 }

 export const handleToken = (token) => {
     return async (dispatch, getState) => {
         console.log(token);
        let response = await axios.post(`${process.env.REACT_APP_API_URI}booking/stripe`, token);
        dispatch({
            type: "PAYMENT",
            payload: response.data
        });
    };
}

