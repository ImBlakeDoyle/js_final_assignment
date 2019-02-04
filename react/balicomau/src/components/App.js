import React, { Component } from 'react';
import { connect } from "react-redux";
import HomePage from './pages/HomePage'
import WizardForm from "./forms/WizardForm";
import BurgerMenu from './ui/BurgerMenu';
import AboutSection from './sections/AboutSection';
import Payments from "./forms/Payments";
import 'normalize.css';
import "./../styles/index.css";
import UserForm from "./forms/UserForm";
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={HomePage} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;