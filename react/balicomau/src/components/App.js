import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from './pages/HomePage'

class App extends Component {
    render() {
        return (
            <div>
                <HomePage />
            </div>
        );
    }
}

export default App;