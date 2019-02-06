import React, { Component } from "react";
import axios from "axios";

class AllBookingsPage extends Component{
    state = {
        bookings: []
    }
    async componentDidMount(){
        await axios.get(`${process.env.REACT_APP_API_URI}admin/all`)
        // .then(response => console.log(response.data))
        .then(response => this.setState({bookings: response.data}))
        .catch(err => console.log(err))
    }

    onBookingDeleteClick = async (booking) => {
        await axios.delete(`${process.env.REACT_APP_API_URI}${booking}`)
        .then(response => this.setState({bookings: response.data}))
        .catch(err => console.log(err))
    }

    render(){
        const { bookings } = this.state;
        console.log(this.state);


        return(
            <div>
                <h1>All Bookings</h1>
                {bookings.map(booking => {
                    return (
                        <div key={booking._id}>
                            <div>
                                First name: {booking.first_name}
                            </div>
                            <div>
                                Last name: {booking.last_name}
                            </div>
                            <div> 
                                Check-out: {booking.checkin}
                            </div>
                            <div>
                                Check-in: {booking.checkout}
                            </div>
                            <div>
                                Comment: {booking.comment}
                            </div>
                            <div>
                                Stripe ID: {booking.stripe_id}
                            </div>
                            <button onClick={() => this.onBookingDeleteClick(booking._id)}>Delete Booking</button>
                            <hr></hr>
                        </div>
                    );
                })}
                {/* Here */}
            </div>
        );
    }
}

export default AllBookingsPage;