import React from "react";
import _ from "lodash";
class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeIndex: "0"
        }
    }
    componentWillMount(){
        this.props.actions.landingPageActionCheck("Hello!");
    }
    onClickNavMenu = (e) =>{
        this.setState({activeIndex: e.target.id});
    }
    getNavigationMenu = (values)=>{
        let comp = [];
        
        let {activeIndex} = this.state;
        if(!_.isEmpty(values)){
            values.map((value, index)=>{
                comp.push(<li className={activeIndex === index.toString()?"active underscore-bar":""} id={index} key={index}>{value}
                </li>);
            });
        }
        return comp;
    }
    render(){
        return (< div className="landing-page-container">
                    <div className="navigation-bar">
                    <div className="header-text"><span className="first">REAL&nbsp;</span><span className="second">  ESTATE</span></div>
                        <ul onClick={this.onClickNavMenu}>
                            {this.getNavigationMenu(["HOME","PROPERTIES","TOP DEVELOPERS","HAPPY CUSTOMERS","CONTACT US"])}
                        </ul>
                    </div>
                </div>);
    }
}
export default LandingPage;