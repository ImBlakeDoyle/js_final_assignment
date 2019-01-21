import React, { Component } from 'react';
import { connect } from "react-redux";
import HomePage from './pages/HomePage'
import BurgerMenu from './ui/BurgerMenu';
import AboutSection from './sections/AboutSection';
import 'normalize.css';
import "./../styles/index.css";
import BookingForm from "./forms/BookingForm";

class App extends Component {
    render() {
        return (
            <HomePage />
        );
    }
}

export default App;