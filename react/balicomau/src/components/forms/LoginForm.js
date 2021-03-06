import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class LoginForm extends Component{
    state = {
        email: "",
        password: ""
    }

    //Takes values from login form and posts to the url to view all the current bookings
    onLoginSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;

        await axios.post(`${process.env.REACT_APP_API_URI}login`, { email, password })
            .then(response => {
                console.log(response);
                this.props.history.push("/admin/all");
            })
            .catch(err => console.log(err));
    }

    onInputChange = (name, event) => {
        this.setState({ [name]: event.target.value });
    }

    render() {
        const { email, password } = this.state;

        return (
            <form onSubmit={this.onLoginSubmit}>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(event) => this.onInputChange("email", event)} />
                </p>
                <p>
                    <label htmlFor="email">Password</label>
                    <input type="password" value={password} onChange={(event) => this.onInputChange("password", event)} />
                </p>
                <p>
                    <input type="submit" value="Login" />
                </p>
            </form>
        );
    }

}

export default (withRouter(LoginForm));