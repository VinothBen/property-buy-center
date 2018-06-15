import React, { Component } from "react";
import { Router, IndexRoute, Route, hashHistory } from "react-router";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Logger from "redux-logger";
import Reducers from "../src/CompineReducer";
import thunk from "redux-thunk";
import {syncHistoryWithStore, routerMiddleware} from "react-router-redux";

import LandingPage from "../src/Application/LandingPage/LandingPage.Container";
import ComponentsDemo from "../src/Components/ComponentsDemo";

const middleWare = routerMiddleware(Logger, thunk, hashHistory);
const Store = createStore(Reducers, applyMiddleware(middleWare));
const history = syncHistoryWithStore(hashHistory, Store)

class Root extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Router history={ history } basename={process.env.REACT_APP_ROUTER_BASE || ''}>
                        <Route path="/" component={LandingPage}>
                        {/*<IndexRoute component={LandingPage}/>
                             <Route exact path="/home" component={}></Route>
                        <Route exact path="/properties" component={}></Route>
                        <Route exact path="/topdevelopers" component={}></Route>
                        <Route exact path="/happycustomers" component={}></Route>
                        <Route exact path="/contactus" component={}></Route> */}
                        </Route>
                        <Route path="/components" component={ComponentsDemo}></Route>
                </Router>
            </Provider>
        );
    };
}
export default Root;

// import { HashRouter, Link, Route, Switch } from "react-router-dom";
// class Root extends Component {
//     render() {
//         return (
//             <Provider store={Store}>
//                 <HashRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
//                     <Switch>
//                         <Route exact path="/" component={LandingPage}>
//                             {/* <Route exact path="/home" component={}></Route>
//                         <Route exact path="/properties" component={}></Route>
//                         <Route exact path="/topdevelopers" component={}></Route>
//                         <Route exact path="/happycustomers" component={}></Route>
//                         <Route exact path="/contactus" component={}></Route> */}
//                         </Route>
//                         <Route exact path="/components" component={ComponentsDemo}></Route>
//                     </Switch>
//                 </HashRouter>
//             </Provider>
//         );
//     };
// }
// export default Root;