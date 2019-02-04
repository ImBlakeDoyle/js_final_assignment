import React, { Component } from 'react';
import HomePage from './pages/HomePage'
// import 'normalize.css';
import "./../styles/index.css";
import { BrowserRouter, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
    render() {
        return (
            <>
                <CssBaseline />
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={HomePage} />
                    </div>
                </BrowserRouter>
            </>
        );
    }
}

export default App;