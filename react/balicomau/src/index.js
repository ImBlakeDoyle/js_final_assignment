import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider } from "material-ui-pickers";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Route path="/" exact component={App} />
            </MuiPickersUtilsProvider>
        </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);