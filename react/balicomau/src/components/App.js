import React, { Component } from 'react';
import { connect } from "react-redux";
<<<<<<< HEAD
import HomePage from './pages/HomePage'
import BurgerMenu from './ui/BurgerMenu';
import AboutSection from './sections/AboutSection';
import 'normalize.css';
import "./../styles/index.css";
=======
import BookingForm from "./forms/BookingForm";
>>>>>>> 889cc82ad7ea380494f3b8d4df8449a813d256bf

class App extends Component {
    render() {
        return (
<<<<<<< HEAD
            <HomePage />
=======
            <div>
                <h1>Test</h1>
                <h2>Booking form</h2>
                <BookingForm />
            </div>
>>>>>>> 889cc82ad7ea380494f3b8d4df8449a813d256bf
        );
    }
}

export default App;