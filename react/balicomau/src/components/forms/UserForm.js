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
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Grid container 
                    xs={12}
                    spacing={8}
                    justify="center"
                >
                    <Grid item xs={10}>
                        <Typography variant="h6">
                            Contact Us
                        </Typography>
                    </Grid>
                    <Grid item xs={10} sm={6}>
                        <Field 
                            name="name" 
                            type="text" 
                            component={TextField} 
                            label="Name:" 
                        />
                    </Grid>
                    <Grid item 
                        xs={10} 
                        sm={6}
                        justify-self="stretch"
                    >
                        <Field 
                            name="email" 
                            type="email" 
                            component={TextField} 
                            label="Email:"
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <Field 
                            name="phone"
                            type="number" 
                            component={TextField} 
                            label="Phone:"
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <Field 
                            name="comment" 
                            type="text" 
                            component={TextField} 
                            label="Comment:" 
                            multiline
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <Recaptcha
                            sitekey="6Lclc40UAAAAABi7ABxrNdDrkUMSkiSY7AJZZ05o"
                            render="explicit"
                            onloadCallback={this.recaptchaLoaded}
                            verifyCallback={this.verifyCallback}
                        />
                </Grid>
                    <Grid item xs={0}>
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
            </div>
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

export default connect(mapStateToProps, {
    createInquiry,
    setSubmitStatus 
})(withRouter(WrappedUserForm));