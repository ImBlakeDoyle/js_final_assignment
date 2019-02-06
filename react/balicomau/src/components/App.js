import React, { Component } from 'react';
import HomePage from './pages/HomePage'
// import 'normalize.css';
import "./../styles/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import LoginPage from "./pages/LoginPage";
import AllBookingsPage from "./pages/AllBookingsPage";

class App extends Component {
    render() {
        return (
            <>
                <CssBaseline />
                <BrowserRouter>
                    {/* <div> */}
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/admin/all" component={AllBookingsPage} />
                        </Switch>
                    {/* </div> */}
                </BrowserRouter>
            </>
        );
    }
}

export default App;