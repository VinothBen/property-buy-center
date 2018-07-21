import React, { Component } from "react";
import InterestCalculator2 from "../InterestCalculator/InterestCalculator";
import GoogleMap from "../GoogleMap/GoogleMap";

class PlaceDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onChangeLoanAmount = (props) => {
        console.log("...onChangeLoanAmount", props);
        // let pieChartValue = {
        //     y1: props * 10,
        //     y2: props * Math.random() * 100,
        // };
        // this.setState({ pieChartValue });
    }
    onChangeInterestRate = (props) => {
        console.log("...onChangeInterestRate", props);
        // let pieChartValue = {
        //     y1: props * 10,
        //     y2: props * Math.random() * 100,
        // };
        // this.setState({ pieChartValue });
    }

    onChangeNoOfMonth = (props) => {
        console.log("...onChangeNoOfMonth", props);
        // let pieChartValue = {
        //     y1: props * 10,
        //     y2: props * Math.random() * 100,
        // };
        // this.setState({ pieChartValue });
    }
    render() {
        const wrapperStyle = { width: 400, margin: 50 };
        // const wrapperStyleVictory = { width: 250, margin: 250, marginTop: "0px", marginLeft: "50px", position: "absolute", top: "40px", left: "440px" };
        return (<div className="detail-page-container">
            <div>Hai!!</div>
            <div><InterestCalculator2 /></div>
            <hr/>
            <div style={{clear: "left"}}><GoogleMap /></div>
        </div>);
    }
}

export default PlaceDetailsPage;