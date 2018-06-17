import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import WireFramePage from "./WireFramePage";
import * as WireFramePageActions from "./WireFramePage.actions";
export default connect(
    (state)=>{
       return {
        searchData: state.wireFramePageReducer.searchData,
              };
},
    (dispatch)=>{
        return {
                actions: bindActionCreators(WireFramePageActions, dispatch)
        };
}
)(WireFramePage);