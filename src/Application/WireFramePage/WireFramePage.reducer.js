import WireFramePageConstants from "./WireFramePage.constants";
 
const initialState={
   searchData:{},
 };

 function WireFramePageReducer(state=initialState, action){
  switch(action.type){
    case WireFramePageConstants.GET_ALL_PROPERTIES_SUCCESS:
        return Object.assign({}, state, {searchData: action.data});
    default:
        return state; 
  }
 }
 export default WireFramePageReducer;
 export {initialState};