import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider } from "material-ui-pickers";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        {/* <div> */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {/* <Route exact path="/" exact component={App} /> */}
                <App />
            </MuiPickersUtilsProvider>
            {/* <App /> */}
        {/* </div> */}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);