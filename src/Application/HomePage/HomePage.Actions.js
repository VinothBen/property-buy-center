import HomePageConstants from "./HomePage.Constants";
// import axios from "axios";
// import LocalDB from "../../LocalDB"
export const homePageActionCheck = (data) =>{
    return {
        type : HomePageConstants.UPDATE_DATA,
        data
    };  
}