import WireFrmaePageConstatns from "./WireFramePage.constants";
// import {fetchUrl} from "fetch";
import axios from "axios";
// import LocalDB from "../../LocalDB"
export const getBuilderSearchDetailsSuccess = (data) => {
    return {
        type: WireFrmaePageConstatns.GET_ALL_PROPERTIES_SUCCESS,
        data
    }
}
export const getBuilderSearchDetailsFailure = () => {
    return {
        type: WireFrmaePageConstatns.GET_ALL_PROPERTIES_FAILURE,
        errorMessage: "Some Thing Went Wrong!"
    }
}

export const getBuilderSearchDetails = (url) => {
    return (dispatch) => {
        url = decodeURIComponent(url);
        axios.get(url)
            .then((response) => {
                    dispatch(getBuilderSearchDetailsSuccess(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }
}