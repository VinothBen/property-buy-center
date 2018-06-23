import landingPageReducer from "./Application/LandingPage/LandingPage.Reducer";
import homePageReducer from "./Application/HomePage/HomePage.Reducer";

import wireFramePageReducer from "./Application/WireFramePage/WireFramePage.Reducer";

import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

export default combineReducers(
    {
        routing: routerReducer,
        landingPageReducer,
        wireFramePageReducer,
        homePageReducer

    }
);