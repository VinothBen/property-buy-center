import React, {Component} from "react";
import {Router, Route, browserHistory} from "react-router";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import Logger from "redux-logger";
import Reducers from "../src/CompineReducer";
import thunk from "redux-thunk";
import importedComponent from 'react-imported-component';
import Loading from "./Application/Loading";
import NoMatch from "./Application/NoMatch";

import LandingPage from "../src/Application/LandingPage/LandingPage.Container";
import ComponentsDemo from "../src/Components/ComponentsDemo";

const Store = createStore(Reducers, applyMiddleware(Logger, thunk));

const AsyncDynamicPAge = importedComponent(
    () => import(/* webpackChunkName:'DynamicPage' */ './Application/NoMatch'),
    {
      LoadingComponent: Loading
    }
  );
  const AsyncNoMatch = importedComponent(
    () => import(/* webpackChunkName:'NoMatch' */ './Application/NoMatch'),
    {
      LoadingComponent: Loading
    }
  );

  
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
                   <Route path="/dynamic" component={AsyncNoMatch} />
                </Router>
            </Provider>
        );
    };
}
export default Root;

