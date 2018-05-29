import React, {Component} from "react";
import {Router, Route, browserHistory} from "react-router";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import Logger from "redux-logger";
import Reducers from "../src/CompineReducer";
import thunk from "redux-thunk";

import LandingPage from "../src/Application/LandingPage/LandingPage.Container";
import ComponentsDemo from "../src/Components/ComponentsDemo";

const Store = createStore(Reducers, applyMiddleware(Logger, thunk));

class Root extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Router history={browserHistory}>
                   <Route exact path="/" component={LandingPage}>
                        {/* <Route exact path="/home" component={}></Route>
                        <Route exact path="/properties" component={}></Route>
                        <Route exact path="/topdevelopers" component={}></Route>
                        <Route exact path="/happycustomers" component={}></Route>
                        <Route exact path="/contactus" component={}></Route> */}
                   </Route>
                   <Route exact path="/components" component={ComponentsDemo}></Route>
                </Router>
            </Provider>
        );
    };
}
export default Root;

