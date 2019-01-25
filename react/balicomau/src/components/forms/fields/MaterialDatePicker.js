import React, { Component } from "react";
import { InlineDatePicker } from "material-ui-pickers";

class NewDatePicker extends Component {

    render(){
        const { input, meta, ...other } = this.props;
        return(
            <InlineDatePicker
                disablePast={true}
                {...other}
                {...input}
            />
        );
    }
}

export default NewDatePicker