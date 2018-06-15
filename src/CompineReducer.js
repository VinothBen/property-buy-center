import landingPageReducer from "./Application/LandingPage/LandingPage.Reducer";
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
export default combineReducers(
    {
        landingPageReducer,
        routing: routerReducer
    }
);