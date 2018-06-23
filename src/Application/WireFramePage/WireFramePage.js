import React from "react";
import { Carousel, Button, ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";

class WireFramePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValues: {}
        };
    }
    // componentWillMount() {
    //     if (_.isEmpty(this.props.searchData)) {
    //         this.props.actions.getBuilderSearchDetails("http://127.0.0.1:5984/builders/_design/builders/_view/getallproperties");
    //     }
    // }
    componentWillReceiveProps(nextProps) {
        console.log("...CWRP", nextProps);
    }
    getDropDowns = (options, key) => {
        let dropDownItems = [];
        if (!_.isEmpty(options)) {
            options.map((value, index) => {
                dropDownItems.push(<MenuItem key={index} eventKey={index} onSelect={() => { this.onChangeDropDown(value, key) }}>{value}</MenuItem>);
            });
        }
        return dropDownItems;
    }
    onChangeDropDown = (value, key) => {
        let filterValues = this.state.filterValues;
        filterValues[key] = value;
        this.setState({ filterValues });
    }
    onSearchClick = () => {
        if (!_.isEmpty(this.state.filterValues)) {
            let url = "http://127.0.0.1:5984/builders/_design/filter/_view/builder";
            let key = Object.keys(this.state.filterValues);
            // console.log("...OnSearch", this.state.filterValues, key);
            if (key.length === 1) {
                url = url + "?key[" + "%22" + this.state.filterValues[key[0]] + "%22" + "]";
            } else if (key.length === 2) {
                url = url + "?key=[" + "%22" + this.state.filterValues[key[0]] + "%22" + "," + "%22" + this.state.filterValues[key[1]] + "%22" + "]";
            }
            console.log("...url", key, (url));
            this.props.actions.getBuilderSearchDetails(url);
        }
    }
    getSearchDetails = () => {
        let comp = [];
        if (!_.isEmpty(this.props.searchData)) {
            console.log("...SD", this.props.searchData);
            if (!_.isEmpty(this.props.searchData.rows)) {
                this.props.searchData.rows.map((rowObjext, index) => {
                    console.log("...objects", rowObjext);
                    comp.push((<div className="searchtiles" key={index}><h4>{rowObjext.value.builder}</h4><h4>{rowObjext.value.location}</h4><h4>{rowObjext.value.type}</h4></div>));
                });
            }else {
                comp.push(<div key ="emptydiv" className="searchtiles"><h4>No Match Found!</h4></div>);
            }
        }
        return comp;
    }
    render() {
        const location = ['Chennai', 'Bangalore', 'Andhra'];
        const propertyType = ['Villa', 'Apartment'];
        const { filterValues } = this.state;
        // console.log("...render", this.props, this.state);
        return (
            <div>
                <div className="searchFilterDiv">
                    <h2 className="searchFilterHeader">FIND YOUR DREAM HOME</h2>
                    <ButtonToolbar>
                        <DropdownButton
                            title={(!_.isEmpty(this.state.filterValues) && _.has(this.state.filterValues, "location")) ? this.state.filterValues.location : "Location"}
                            key={"search-locatio"}
                            id={"search-locatio"}
                        >
                            {this.getDropDowns(location, "location")}
                        </DropdownButton>
                        <DropdownButton
                            title={(!_.isEmpty(this.state.filterValues) && _.has(this.state.filterValues, "propertyType")) ? this.state.filterValues.propertyType : "Property Type"}
                            key={"search-locati"}
                            id={"search-locati"}
                        >
                            {this.getDropDowns(propertyType, "propertyType")}
                        </DropdownButton>
                    </ButtonToolbar>
                    <Button bsStyle="warning" onClick={(e) => { e.preventDefault(), this.onSearchClick() }}>SEARCH</Button>
                </div>
                <div className="frmaworkpage">{this.getSearchDetails()}</div>
            </div>
        );
    }
}
export default WireFramePage;