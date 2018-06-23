import React from "react";
import _ from "lodash";
import { Carousel, Button, ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";
import SlideImage1 from "../../Images/SlideImage1.jpg";
import SlideImage2 from "../../Images/SlideImage2.jpg";
import SlideImage3 from "../../Images/SlideImage3.jpg";
import { hashHistory } from "react-router";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: "0"
        }
    }
    componentWillMount() {
        this.props.actions.homePageActionCheck("Hello!!");
    }
    componentWillReceiveProps(nextProps) {
        console.log("..nextProps", nextProps);
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
export default HomePage;