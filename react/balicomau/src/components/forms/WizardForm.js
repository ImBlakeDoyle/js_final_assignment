import React, { Component } from "react";
import PropTypes from "prop-types";
import BookingForm1 from "./BookingForm1";
import BookingForm2 from "./BookingForm2";
// import Payments from "./Payments";
import { connect } from "react-redux";
import { createBooking } from "../../actions";

class WizardForm extends Component {
    state = {
        page: 1,
        events: []
    }

    componentDidMount = () => {
        this.getEvents();
    }

    getEvents = () => {
        
    }

    onFormSubmit = async (formValues) => {
        const { name, email, guests, checkin, checkout, cost, phone, comment, stripe_id } = formValues;
        const { createBooking } = this.props;

        createBooking({name, email, guests, checkin, checkout, cost, phone, comment, stripe_id });
    }

    nextPage = () => {
        this.setState({ page: this.state.page + 1});
    }

    previousPage = () => {
        this.setState({ page: this.state.page - 1});
    }

    render(){
        // const { onSubmit } = this.props;
        const { page } = this.state;

        return(
            <div>
                {page === 1 && <BookingForm1 onSubmit={this.nextPage} cancel={this.props.onClose}/>}
                {/* {page === 2 && <BookingForm2 previousPage={this.previousPage} onSubmit={this.nextPage} />} */}
                {page === 2 && <BookingForm2 previousPage={this.previousPage} onSubmit={this.onFormSubmit} />}
                {/* {page === 3 && <Payments previousPage={this.previousPage} onSubmit={this.onFormSubmit} />} */}
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         cost: state.form
//     }
// }

WizardForm.PropTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default connect(null, {createBooking})(WizardForm);