import React, { Component } from "react";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import { VictoryPie } from "victory";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

class SearchDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    handle = (props) => {
        const { value, dragging, index, ...restProps } = props;
        let pieChartValue = {
            y1: props.value * 10,
            y2: props.value * 5.9,
        };
        this.pieChartValue = pieChartValue;
        console.log("...handle props", props, pieChartValue);
        return (
            <Tooltip
                prefixCls="rc-slider-tooltip"
                overlay={value}
                visible={dragging}
                placement="top"
                key={index}
            >
                <Handle value={value} {...restProps} />
            </Tooltip>
        );
    }
    onChangeRange = (props) => {
        console.log("...range oncahenh", props);
    }
    render() {
        console.log("...render", this.pieChartValue);
        let pieChartValue = this.pieChartValue;
        const wrapperStyle = { width: 400, margin: 50 };
        const wrapperStyleVictory = { width: 250, margin: 250, marginTop: "0px", marginLeft: "50px", position: "absolute", top: "40px", left: "440px" };
        return (<div>
            <div style={wrapperStyle}>
                <p>Slider with custom handle</p>
                <Slider min={0} max={20} defaultValue={3} handle={this.handle} mark={{ number: "1" }} />
            </div>
            <div style={wrapperStyle}>
                <p>Range with custom handle</p>
                <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} onChange={this.onChangeRange} handle={this.handle} />
            </div>
            <div style={wrapperStyleVictory}>
                <VictoryPie
                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                    data={[
                        { x: "Interest", y: pieChartValue.y1 },
                        { x: "Payeble", y: pieChartValue.y2 }
                    ]}
                />
            </div>
            <div style={{ margin: "50px" }}>
                <div style={{ float: "left" }}>
                    <h4>Map with link to Google Maps</h4>
                    <a href="https://www.google.com/maps/place/Medavakkam+Bus+Depot,+BHEL+Nagar,+Medavakkam,+Chennai,+Tamil+Nadu/">
                        <img src="https://maps.googleapis.com/maps/api/staticmap?autoscale=false&size=600x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:A%7CMedavakkam+Bus+Depot,+BHEL+Nagar,+Medavakkam,+Chennai,+Tamil+Nadu&markers=size:mid%7Ccolor:0xff0000%7Clabel:B%7CMedavakkam,+BHEL+Nagar,+Medavakkam,+Chennai,+Tamil+Nadu"
                            alt="Google Map of Medavakkam Bus Depot, BHEL Nagar, Medavakkam, Chennai, Tamil Nadu" />
                    </a>
                </div>
                <div style={{ float: "right" }}>
                    <h4>Map with link to Google Maps Directions</h4>
                    <a href="https://www.google.com/maps/dir//Medavakkam+Bus+Depot,+BHEL+Nagar,+Medavakkam,+Chennai,+Tamil+Nadu/">
                        <img src="https://maps.googleapis.com/maps/api/staticmap?autoscale=false&size=600x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:A%7CMedavakkam+Bus+Depot,+BHEL+Nagar,+Medavakkam,+Chennai,+Tamil+Nadu&markers=size:mid%7Ccolor:0xff0000%7Clabel:B%7CMedavakkam,+BHEL+Nagar,+Medavakkam,+Chennai,+Tamil+Nadu"
                            alt="Google Map of Medavakkam Bus Depot, BHEL Nagar, Medavakkam, Chennai, Tamil Nadu" />
                    </a>
                </div>
            </div>
        </div>);
    }
}
export default SearchDetailsPage;