import axios from "axios";

export const createBooking = ({ name, email, guests, checkin, checkout, cost, phone, comment, stripe_id }) => {
    return async (dispatch, getState) => {
        let response = await axios.post("http://localhost:3000/booking/new", { name, email, guests, checkin, checkout, cost, phone, comment, stripe_id });

        dispatch ({
            type: "BOOKING",
            payload: response.data
        });
    }
}


// export const bookingAvailability = ({checkin, checkout, guests}) => {
//     return async (dispatch, getState) => {
//         let response = await axios.get("http://localhost:3000/booking/new");

//         dispatch ({
//             type: "BOOKING",
//             payload: response.data
//         })
//     }
// }

export const createInquiry = ({ name, email, comment, phone }) => {
    return async (dispatch, getState) => {
        let response = await axios.post("http://localhost:3000/inquiry/new", {name, email, comment, phone});

        dispatch({
            type: "INQUIRY_CREATE",
            payload: response.data
        });
    }
}

