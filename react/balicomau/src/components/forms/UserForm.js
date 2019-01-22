import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import { createInquiry } from "./../../actions";
import { setSubmitStatus } from "./../../actions";
import { withRouter } from 'react-router-dom';

class UserForm extends Component {

renderError({ error, touched }) {
    if (touched && error) {
        return (
            <div>{error}</div>
        );
    }
}

renderInput = ({ input, label, meta, type }) => {
    return (
    <div>
        <label>{label}</label>
    <input {...input} type={type}/>
    {this.renderError(meta)}
    </div>
    );
}  

onSubmit = async (formValues) => {
const { name, email, comment, phone } = formValues;
const { createInquiry, reset, setSubmitStatus } = this.props;

createInquiry({ name, email, comment, phone });
reset();
setSubmitStatus(true);
// this.props.history.push('/inquiry/success')
// console.log(this.props)
setTimeout(() => {
    setSubmitStatus(false)
}, 4000)


}
  render() {
    return (
        <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
            <Field 
            name="name" 
            type="text" 
            component={this.renderInput} 
            label="Name:" />
            <Field 
            name="email" 
            type="email" 
            component={this.renderInput} 
            label="Email:"/>
            <Field 
            name="comment" 
            type="text" 
            component={this.renderInput} 
            label="Comment:" />
            <Field 
            name="phone"
            type="number" 
            component={this.renderInput} 
            label="Phone:"/>
        <button>Submit</button>
        
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