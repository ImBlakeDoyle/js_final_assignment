import React, { Component } from 'react';
import { connect } from "react-redux";
import HomePage from './pages/HomePage'
import BurgerMenu from './ui/BurgerMenu';
import AboutSection from './sections/AboutSection';
import 'normalize.css';
import "./../styles/index.css";
import BookingForm from "./forms/BookingForm";
import UserForm from "./forms/UserForm";

class App extends Component {
    render() {
        return (
            <div>
            <HomePage />
            <UserForm />
            </div>
        );
    }
}

export default App;