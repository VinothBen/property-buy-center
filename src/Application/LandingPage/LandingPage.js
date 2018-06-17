import React from "react";
import _ from "lodash";
import { Carousel, Button, ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";
import SlideImage1 from "../../Images/SlideImage1.jpg";
import SlideImage2 from "../../Images/SlideImage2.jpg";
import SlideImage3 from "../../Images/SlideImage3.jpg";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: "0"
        }
    }
    componentWillMount() {
        this.props.actions.landingPageActionCheck("Hello!!");
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
    getDropDowns = (options) => {
        let dropDownItems = [];
        if (!_.isEmpty(options)) {
            options.map((value, index) => {
                dropDownItems.push(<MenuItem key={index}>{value}</MenuItem>);
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
                        key={"search-type"}
                        id={"search-type"}
                    >
                        {this.getDropDowns(options)}
                    </DropdownButton>
                    <DropdownButton
                        title={"Chennai"}
                        key={"search-price"}
                        id={"search-price"}
                    >
                        {this.getDropDowns(options)}
                    </DropdownButton>
                    <DropdownButton
                        title={"Chennai"}
                        key={"search-bhk"}
                        id={"search-bhk"}
                    >
                        {this.getDropDowns(options)}
                    </DropdownButton>
                </ButtonToolbar>
                <Button bsStyle="warning">SEARCH</Button>
            </div>
            <div className="slideBar">
                <Carousel interval={2000} pauseOnHover={false}>
                    <Carousel.Item>
                        <img width={1370} height={400} alt="900x500" src={SlideImage1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1370} height={400} alt="900x500" src={SlideImage2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1370} height={400} alt="900x500" src={SlideImage3} />
                    </Carousel.Item>
                </Carousel>;
                    </div>
        </div>);
    }
}
export default LandingPage;