import HomePageConstants from "./HomePage.Constants";
 
const initialState={
   data:"",
 };

 function HomePage(state=initialState, action){
  switch(action.type){
    case HomePageConstants.UPDATE_DATA:
        return Object.assign({}, state, {data:action.data});
    default:
        return state;
  }
 }
 export default HomePage;
 export {initialState};