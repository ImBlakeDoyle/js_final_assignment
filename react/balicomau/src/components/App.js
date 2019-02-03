import React, { Component } from 'react';
import { connect } from "react-redux";
import HomePage from './pages/HomePage'
import WizardForm from "./forms/WizardForm";
import BurgerMenu from './ui/BurgerMenu';
import AboutSection from './sections/AboutSection';
import Payments from "./forms/Payments";
import 'normalize.css';
import "./../styles/index.css";

class App extends Component {
    render() {
        return (
            <>
                <HomePage />
            </>
        );
    }
}

export default App;