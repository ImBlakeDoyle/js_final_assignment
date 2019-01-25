import React from "react";
import "react-datepicker/dist/react-datepicker.css";
// import { connect } from "react-redux";
// import { bookingAvailability } from "../../actions";
import { reduxForm, Field } from "redux-form";
import DatePickerField from "./fields/DatePicker";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    menu: {
        width: 200,
      },
    button: {

    },
    guests : {
        width: 165,
    },
    gridItem: {
        textAlign: 'center',
    },
    button: {
        textAlign: 'center',
        paddingTop: 10
    }
    // formBody: {
    //     display: 'inline-block',
    // }
});

const numberOfGuests = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 7,
        label: '7',
    },
    {
        value: 8,
        label: '8',
    },
];

class BookingForm1 extends React.Component {
    state = {
        numberOfGuests: 0
    }
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render() {
        const { classes } = this.props;
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit}> 
                {/* <div> */}
                    <Grid container xs={12} spacing={8} direction="column" alignItems="center">
                        <Grid item xs={0} className={classes.gridItem}>
                            <TextField
                                id="standard-name"
                                label="Check-in"
                                // className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="normal"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={0} className={classes.gridItem}>
                            <TextField
                                id="standard-name"
                                label="Check-out"
                                // className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="normal"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={0}>
                            <TextField
                                id="select-guests"
                                select
                                label="Number of Guests"
                                className={classes.guests}
                                value={this.state.numberOfGuests}
                                onChange={this.handleChange('numberOfGuests')}
                                type="number"
                                SelectProps={{
                                    MenuProps: {
                                    className: classes.menu,
                                    },
                                }}
                                // helperText="Please select the amount of guests"
                                margin="normal"
                            >
                                {numberOfGuests.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField> 
                        </Grid>
                    </Grid>          
                {/* </div> */}
                <div className={classes.button}>
                    <Button variant="contained" color="primary" className={classes.button} type="submit">
                        Check availability 
                    </Button>
                </div>
            </form>
        );
    }
}

// const WrappedBookingForm = reduxForm({
//     form: "booking"
// })(AvailabilityForm);

// export default connect(null, {
//     bookingAvailability
// })(WrappedBookingForm);

export default withStyles(styles)(reduxForm({
    form: "booking",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(BookingForm1));