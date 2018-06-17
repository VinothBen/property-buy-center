import React from "react";
import { Store } from "./Store";
import { Router, IndexRoute, Route, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import LandingPage from "../src/Application/LandingPage/LandingPage.Container";
import ComponentsDemo from "../src/Components/ComponentsDemo";
import WireFramePage from "../src/Application/WireFramePage/WireFramePage.container";

const history = syncHistoryWithStore(hashHistory, Store);

export const routeComponents = (
    <Router history={history} basename={process.env.REACT_APP_ROUTER_BASE || ''}>
        < Route path="/" component={LandingPage} >
            {/*<IndexRoute component={LandingPage}/>
            <Route exact path="/home" component={}></Route>
            <Route exact path="/properties" component={}></Route>
            <Route exact path="/topdevelopers" component={}></Route>
            <Route exact path="/happycustomers" component={}></Route>
            <Route exact path="/contactus" component={}></Route> */}
        </Route >
        <Route path="/components" component={ComponentsDemo}></Route>
        <Route path="/wireframe" component={WireFramePage}></Route>
    </Router>
);