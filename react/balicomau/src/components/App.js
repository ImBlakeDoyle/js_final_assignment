import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from './pages/HomePage'
import BurgerMenu from './ui/BurgerMenu';
import AboutSection from './sections/AboutSection';

class App extends Component {
    render() {
        return (
            <div>
            <HomePage />
            <AboutSection />
            </div>
        );
    }
}

export default App;