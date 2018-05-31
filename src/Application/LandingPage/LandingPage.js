import React from "react";
import _ from "lodash";
import {Carousel, Button, ButtonToolbar, DropdownButton, MenuItem} from "react-bootstrap";
class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: "0"
        }
    }
    componentWillMount() {
        this.props.actions.landingPageActionCheck("Hello!");
    }
    onClickNavMenu = (e) => {
        this.setState({ activeIndex: e.target.id });
    }
    getNavigationMenu = (values) => {
        let comp = [];

        let { activeIndex } = this.state;
        if (!_.isEmpty(values)) {
            values.map((value, index) => {
                comp.push(<li className={activeIndex === index.toString() ? "active underscore-bar" : ""} id={index} key={index}>{value}
                </li>);
            });
        }
        return comp;
    }
    getDropDowns = (options) =>{
        let dropDownItems = [];
        if(!_.isEmpty(options)){
            options.map((value, index)=>{
                dropDownItems.push(<MenuItem eventKey={index}>{value}</MenuItem>);
            });
        }
        return dropDownItems;
    }
    render() {
        const options = ['Chennai', 'Bangalore', 'Andhra'];
        return (< div className="landing-page-container">
            <div className="navigation-bar">
                <div className="header-text"><span className="first">REAL&nbsp;</span><span className="second">  ESTATE</span></div>
                <ul onClick={this.onClickNavMenu}>
                    {this.getNavigationMenu(["HOME", "PROPERTIES", "TOP DEVELOPERS", "HAPPY CUSTOMERS", "CONTACT US"])}
                </ul>
            </div>
            <div className="searchFilterDiv">
                <h2 className="searchFilterHeader">FIND YOUR DREAM HOME</h2>
                    <ButtonToolbar>
                        <DropdownButton
                            title={"Chennai"}
                            key={"search-location"}
                            id={"search-location"}
                            >
                            {this.getDropDowns(options)}
                        </DropdownButton>
                        <DropdownButton
                            title={"Chennai"}
                            key={"search-location"}
                            id={"search-location"}
                            >
                            {this.getDropDowns(options)}
                        </DropdownButton>
                        <DropdownButton
                            title={"Chennai"}
                            key={"search-locatio"}
                            id={"search-locatio"}
                            >
                            {this.getDropDowns(options)}
                        </DropdownButton>
                        <DropdownButton
                            title={"Chennai"}
                            key={"search-locati"}
                            id={"search-locati"}
                            >
                            {this.getDropDowns(options)}
                        </DropdownButton>
                    </ButtonToolbar>
                <Button bsStyle="warning">SEARCH</Button>
            </div>
            <div className="slideBar">
                <Carousel interval={2000} pauseOnHover={false}>
                    <Carousel.Item>
                        <img width={1370} height={500} alt="900x500" src="http://www.inspireditaly.com/wp-content/uploads/2013/03/Cottage-cucina-Bastia-Creti-061229-1360x500.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1370} height={500} alt="900x500" src="https://1995768825.rsc.cdn77.org/SK/images/4/6/9/f/9caeaa39e189fcf8d3470ccb6445/shutterstock_370641806-1360x500.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1370} height={500} alt="900x500" src="http://www.dreamstaysapartments.com/wp-content/uploads/2013/10/dreamstays-WhiteLoft_home_banner-1360x500.jpg" />
                    </Carousel.Item>
                </Carousel>;
                    </div>
        </div>);
    }
}
export default LandingPage;