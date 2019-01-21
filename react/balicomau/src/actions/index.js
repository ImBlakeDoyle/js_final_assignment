import axios from "axios";

export const createBooking = ({ name, email, guests, checkin, checkout, cost, phone, comment, stripe_id }) => {
    return async (dispatch, getState) => {
        let response = await axios.post("/booking/new", { name, email, guests, checkin, checkout, cost, phone, comment, stripe_id });

        dispatch ({
            type: "BOOKING",
            payload: response.data
        });
    }
}