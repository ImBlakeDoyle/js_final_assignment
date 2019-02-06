import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { reduxForm, Field } from "redux-form";
import { withStyles } from '@material-ui/core/styles';
import TextField from "./fields/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import moment from "moment";
import NewDatePicker from "./fields/MaterialDatePicker";
import { Typography } from "@material-ui/core";
// import store from "./../../store";
import { fetchinvalid } from "./../../actions";
import { connect } from "react-redux";


const styles = theme => ({
    formButton: {
        maxWidth: '150px', minWidth: '150px',
    },
    guests : {
        minWidth: "135px",
        width: "60%",
        textAlign: "left"
    },
    gridItem: {
        textAlign: 'center',
        marginTop: '16px',
    },
    formButtonGroup: {
        paddingTop: '30px'
    },
    formField: {
        minWidth: "135px",
        width: "60%"
    },
    formBody: {
        marginBottom: "16px"
    }
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
        numberOfGuests: 0,
    }

    //Fetch the list of already booked dates
    componentDidMount(){
        this.props.fetchinvalid();
    }

    //Changes the value of guests
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render() {
        console.log(this.state);
        const { classes, handleSubmit, cancel } = this.props;
        return(

            <form onSubmit={handleSubmit} className={classes.formBody}>
                    <Grid container>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Typography variant="h5">Select your dates</Typography>
                            {/* <Typography variant="">* Required</Typography> */}
                        </Grid>
                        {/* <Grid item>
                            
                        </Grid> */}
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field 
                                className={classes.formField}
                                name="checkin"
                                label="Check-in"
                                component={NewDatePicker}
                                variant="outlined"
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field
                                className={classes.formField}
                                name="checkout"
                                label="Check-out"
                                component={NewDatePicker}
                                variant="outlined"
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field
                                id="select-guests"
                                select
                                label="Guests"
                                name="guests"
                                component={TextField}
                                className={classes.guests}
                                type="number"
                                variant="outlined"
                                required={true}
                                SelectProps={{
                                    MenuProps: {
                                    className: classes.menu,
                                    },
                                }}
                            >
                                {numberOfGuests.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </Field> 
                        </Grid>
                    </Grid>
                <div className={classes.formButtonGroup}>
                    <Grid container spacing={16} justify="space-evenly">
                        <Grid item>
                            <Button variant="contained" color="primary" className={classes.formButton} type="submit">
                                Continue
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary" className={classes.formButton} onClick={cancel}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </form>

        );
    }
}

const validate = (formValues, props) => {
    let { populateInvalid } = props;

    //Checks if the booked dates is an array, otherwise converts to an array
    populateInvalid = populateInvalid instanceof Array ? populateInvalid : [];

    //Format the form check-in and check-out form values to match the values of the booked dates array
    const newCheckin = moment(formValues.checkin).format("YYYY-MM-DD");
    const newCheckout = moment(formValues.checkout).format("YYYY-MM-DD");

    let dateArray = [];
    let currentDate = newCheckin;
    let stopDate = newCheckout;
    //Create an array of all the dates between the form check-in and check-out days
    while (currentDate <= stopDate){
        moment(currentDate).format();
        dateArray.push(currentDate);
        currentDate = moment(currentDate).add(1, 'days').format("YYYY-MM-DD");
    }

    const errors = {};

    console.log(dateArray);
    console.log(populateInvalid);
    console.log(newCheckin);
    console.log(newCheckout);
    if (!formValues.guests) {
        errors.guests = "You must enter number of guests"
    }
    if (formValues.guests > 8){
        errors.guests = "You can only select up to 8 guests"
    }
    if (formValues.guests < 1){
        errors.guests = "There must be at least 1 guest"
    }
    if (!formValues.checkin) {
        errors.checkin = 'You must enter a check-in date'
    }
    if (!formValues.checkout) {
        errors.checkout = 'You must enter a check-out date'
    }
    if (formValues.checkout < formValues.checkin){
        errors.checkout = "check-out must be after check-in"
    }
    if (newCheckin === newCheckout){
        errors.checkout = "Cannot check-out on the same day"
    }
    //If a day within the range of the check-in and check-out is present in the
    //array of already booked dates, render an error
    for (let a = 0; a < dateArray.length; a++){
        if (populateInvalid.includes(dateArray[a])){
            errors.checkin = "Requested dates are invalid"
        }
    }

    return errors;
};

    //Map the array of already booked dates to the props
const mapStateToProps = (state) => {
    return {
        populateInvalid: state.bookings
    }
}


//Allows the form to continue without clearing the data
export default connect(mapStateToProps, { fetchinvalid })(withStyles(styles)(reduxForm({
    form: "booking",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(BookingForm1)));