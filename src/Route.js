import React from "react";
import { Store } from "./Store";
import { Router, IndexRoute, Route, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import LandingPage from "../src/Application/LandingPage/LandingPage.Container";
import HomePage from "../src/Application/HomePage/HomePage.Container";
import ComponentsDemo from "../src/Components/ComponentsDemo";
import WireFramePage from "../src/Application/WireFramePage/WireFramePage.container";
import EmptyPage from "../src/Application/EmptyPage";

const history = syncHistoryWithStore(hashHistory, Store);
const ppsPage = <EmptyPage name="Properties"/>;

export const routeComponents = (
    <Router history={history} basename={process.env.REACT_APP_ROUTER_BASE || ''}>
        < Route path="/" component={LandingPage} >
            <IndexRoute component={HomePage}/>
            <Route path="/home" component={HomePage}></Route>
            <Route path="/properties" component={EmptyPage}></Route>
            <Route path="/top-developers" component={EmptyPage}></Route>
            <Route path="/happy-customers" component={EmptyPage}></Route>
            <Route path="/properties" component={EmptyPage}></Route>
            <Route path="/contact-us" component={EmptyPage}></Route>
        </Route >
        {/* <Route  exact path="/properties" component={EmptyPage}></Route>
        <Route  exact path="/top-developers" component={EmptyPage}></Route>
        <Route  exact path="/happy-customers" component={EmptyPage}></Route>
        <Route  exact path="/properties" component={EmptyPage}></Route> */}
        <Route path="/components" component={ComponentsDemo}></Route>
        <Route path="/wireframe" component={WireFramePage}></Route>
    </Router>
);