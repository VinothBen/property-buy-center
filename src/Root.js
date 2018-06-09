import React, { Component } from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
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
                <HashRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
                    <Switch>
                        <Route exact path="/" component={LandingPage}>
                            {/* <Route exact path="/home" component={}></Route>
                        <Route exact path="/properties" component={}></Route>
                        <Route exact path="/topdevelopers" component={}></Route>
                        <Route exact path="/happycustomers" component={}></Route>
                        <Route exact path="/contactus" component={}></Route> */}
                        </Route>
                        <Route exact path="/components" component={ComponentsDemo}></Route>
                    </Switch>
                </HashRouter>
            </Provider>
        );
    };
}
export default Root;

