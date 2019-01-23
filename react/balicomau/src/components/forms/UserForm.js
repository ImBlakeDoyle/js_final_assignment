import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import { createInquiry } from "./../../actions";

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
    console.log(formValues);
const { name, email, comment, phone } = formValues;
const { createInquiry } = this.props;

createInquiry({ name, email, comment, phone });


}

  render() {
    return (
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

export default connect(null, {
    createInquiry 
})(WrappedUserForm);