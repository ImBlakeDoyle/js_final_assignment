import React, { Component } from "react";
import BookingForm1 from "./BookingForm1";
import BookingForm2 from "./BookingForm2";

class WizardForm extends Component {
    state = {
        page: 1
    }

    nextPage() {
        this.setState({ page: this.state.page + 1});
    }

    previousPage(){
        this.setState({ page: this.state.page -1});
    }

    render(){
        const { onSubmit } = this.props;
        const { page } = this.state;

        return(
            <div>
                {page === 1 && <BookingForm1 onSubmit={this.nextPage}/>}
                {page === 2 && <BookingForm2 previousPage={this.previousPage}/>}
            </div>
        );
    }
}