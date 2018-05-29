import React from "react";

class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    componentWillMount(){
        console.log("...CWM", this.props);
        this.props.actions.landingPageActionCheck("Hello!");
    }
    render(){
        return (<div>Hai! {this.props.data}</div>);
    }
}
export default LandingPage;