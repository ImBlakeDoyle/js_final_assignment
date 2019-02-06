import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import Grid from '@material-ui/core/Grid';
import TextField from './fields/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    gridItem: {
        textAlign: "center"
    },
    formButton: {
        maxWidth: '150px', minWidth: '150px',
    },
    formButtonGroup: {
        paddingTop: '30px'
    },
    formField: {
        minWidth: "135px",
        width: "70%"
    }
});

class BookingForm2 extends Component {

    render() {
    const { classes, handleSubmit, previousPage } = this.props;

        return(
            <form onSubmit={handleSubmit} className={classes.formBody}>
                <div>
                    <Grid container spacing={16} justify="center">
                        <Grid item xs={12} className={classes.gridItem}>
                            <Typography variant="h5">Your Information</Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field 
                                className={classes.formField}
                                name="first_name" 
                                type="text" 
                                component={TextField} 
                                label="First name" 
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field 
                                className={classes.formField}
                                name="last_name" 
                                type="text" 
                                component={TextField} 
                                label="Last name" 
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field 
                                className={classes.formField}
                                name="phone" 
                                type="text" 
                                component={TextField} 
                                label="Contact number" 
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field 
                                className={classes.formField}
                                name="email" 
                                type="text" 
                                component={TextField} 
                                label="Email" 
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Field 
                                className={classes.formField}
                                name="comment" 
                                type="text" 
                                component={TextField} 
                                label="Additional comments" 
                                variant="outlined"
                                multiline
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.formButtonGroup}>
                    <Grid container spacing={16} justify="space-evenly">
                        <Grid item>
                            <Button variant="contained" color="primary" className={classes.formButton} type="submit">
                                Pay
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary" className={classes.formButton} onClick={previousPage}>
                                Previous
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
        );
    }
}

export default withStyles(styles)(reduxForm({
    form:"booking",
    destroyOnUnmount: false,
    // forceUnregisterOnUnmount: true
})(BookingForm2));