import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import { createInquiry } from "./../../actions";
import { setSubmitStatus } from "./../../actions";
import { withRouter } from 'react-router-dom';
import TextField from "./fields/TextField";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Recaptcha from 'react-recaptcha';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    gridItem: {
        width: "100%"
    },
    gridContainer: {
        maxWidth: "540px",
        margin: "auto"
    },
    captcha: {
        display: "inline-block"
    },
    captchaDiv: {
        textAlign: "center"
    },
    formTitle: {
        textAlign: "start"
    }
});

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isVerified: false
        }
    }
    onSubmit = async (formValues) => {
        const { name, email, comment, phone } = formValues;
        const { createInquiry, reset, setSubmitStatus } = this.props;

        if (this.state.isVerified) {
            createInquiry({ name, email, comment, phone });
            reset();
            setSubmitStatus(true);
            // this.props.history.push('/inquiry/success')
            // console.log(this.props)
            setTimeout(() => {
                setSubmitStatus(false)
            }, 4000)
            // alert('Your inquiry has been sent')
        } else {
            alert('Please verify that you are human!')
        }

       
    }

    recaptchaLoaded = (event) => {
        console.log('recaptcha has loaded')
    };

    verifyCallback = (response) => {
        if (response) {
            this.setState({
                isVerified: true
            })
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Grid container 
                        className={classes.gridContainer}
                        xs={12}
                        spacing={16}
                        justify="center"
                    >
                        <Grid item xs={10}>
                            <Typography variant="h6" className={classes.formTitle}>
                                Ask a question
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Field 
                                className={classes.gridItem}
                                name="name" 
                                type="text" 
                                component={TextField} 
                                label="Name" 
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Field 
                                className={classes.gridItem}
                                name="email" 
                                type="email" 
                                component={TextField} 
                                label="Email"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Field 
                                className={classes.gridItem}
                                name="phone"
                                type="number" 
                                component={TextField} 
                                label="Phone"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Field 
                                className={classes.gridItem}
                                name="comment" 
                                type="text" 
                                component={TextField} 
                                label="Message" 
                                multiline
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={10} className={classes.captchaDiv}>
                            <div className={classes.captcha}>
                                <Recaptcha
                                    sitekey="6Lclc40UAAAAABi7ABxrNdDrkUMSkiSY7AJZZ05o"
                                    render="explicit"
                                    onloadCallback={this.recaptchaLoaded}
                                    verifyCallback={this.verifyCallback}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={10} className={classes.captchaDiv}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                {this.props.submitStatus && <div>Your message was sent</div> }
            </>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = 'You must enter a name'
    }
    if (!formValues.email) {
        errors.email = 'You must enter an email'
    }
    if (!formValues.comment) {
        errors.comment = 'You must enter a comment'
    }
    return errors;
};

const WrappedUserForm = reduxForm({
    form: 'inquiryForm',
    validate
})(UserForm);

const mapStateToProps = (state) => {
    return {
        submitStatus: state.submitStatus
    };
}

export default withStyles(styles)(connect(mapStateToProps, {
    createInquiry,
    setSubmitStatus 
})(withRouter(WrappedUserForm)));