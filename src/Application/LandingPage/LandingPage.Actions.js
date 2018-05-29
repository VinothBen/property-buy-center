import LandingPageConstants from "./LandingPage.Constants";
// import axios from "axios";
// import LocalDB from "../../LocalDB"
export const landingPageActionCheck = (data) =>{
    return {
        type : LandingPageConstants.UPDATE_DATA,
        data
    };  
}