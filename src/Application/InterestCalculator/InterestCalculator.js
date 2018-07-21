import React, { Component } from "react";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import { VictoryPie } from "victory";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

class InterestCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loanAmount: null,
            interestRate: null,
            noOfMonth: null,
            pieChartValue: {
                interestPayable: 25,
                totalPayable: 75
            },
            marks: {
                loanAmount: {
                    0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10"
                },
                interestRate: {
                    0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10"
                },
                noOfMonth: {
                    0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10"
                }
            }
        };
       
    }

    handle = (props) => {
        const { value, dragging, index, ...restProps } = props;
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
    getEMIAmount= (principleAmount, interestRate, tenureValue) =>{
        // let interest = interestRate/100;
        // let interestValue = (1 + interest);
        // let finalInterest = Math.pow(interestValue, tenureValue);
        // let EMI = (principleAmount * interest * finalInterest)/(finalInterest - 1);
        // let interestPercentage = "";
        // let principleAmountPercentage = "";
        // console.log("...EMI total", EMI, finalInterest, interestValue, interest);
        let pieChartValue = {
            interestPayable: (interestRate+tenureValue),
            totalPayable: (principleAmount+interestRate)
        }
        this.setState({pieChartValue});

    }
    onChangeLoanAmount = (props) => {
        console.log("...onChangeLoanAmount", props);
        this.getEMIAmount(props, 10, 24);
        
    }
    onChangeInterestRate = (props) => {
        console.log("...onChangeInterestRate", props);
        // let pieChartValue = {
        //     y1: props * 10,
        //     y2: props * Math.random() * 100,
        // };
        // this.setState({ pieChartValue });
        this.getEMIAmount(20, props, 24);
        
    }

    onChangeNoOfMonth = (props) => {
        console.log("...onChangeNoOfMonth", props);
        this.getEMIAmount(10, 10, props);
        
        // let pieChartValue = {
        //     y1: props * 10,
        //     y2: props * Math.random() * 100,
        // };
        // this.setState({ pieChartValue });
    }
    render() {
        const wrapperStyle = { width: 400, margin: 50 };
        return (<div>
            <h3>Calculate Your EMI</h3>
            <div style={{ width: "auto", height: "300px", float: "left" }}>
                <div style={wrapperStyle}>
                    <p>LOAN AMOUNT(IN LACS)</p>
                    <Slider min={0} max={10} step={1} defaultValue={3} marks={this.state.marks.loanAmount} onChange={this.onChangeLoanAmount} handle={this.handle} />
                </div>
                <div style={wrapperStyle}>
                    <p>INTEREST RATE(IN %)</p>
                    <Slider min={0} max={10} step={0.25} marks={this.state.marks.interestRate} defaultValue={3} onChange={this.onChangeInterestRate} handle={this.handle} />
                </div>
                <div style={wrapperStyle}>
                    <p>LOAN TENURE(IN YEARS)</p>
                    <Slider min={0} max={10} step={1} marks={this.state.marks.noOfMonth} defaultValue={3} onChange={this.onChangeNoOfMonth} handle={this.handle} />
                </div>
                <hr />
                {/* <div><h4>Loan EMI</h4><h4>Interest Payable</h4><h4>Total Payable</h4></div> */}
            </div>
            <div style={{ width: "auto", height: "300px", float: "left" }}>
                <VictoryPie
                    colorScale={["#36A2EB", "#FF6384", "gold", "cyan", "navy"]}
                    data={[
                        { x: this.state.pieChartValue.interestPayable.toString(), y: this.state.pieChartValue.interestPayable },
                        { x: this.state.pieChartValue.totalPayable.toString(), y: this.state.pieChartValue.totalPayable }
                    ]}
                    animate={{ duration: 700 }}
                    labelRadius={30}
                    radius={170}
                    style={
                        {
                            labels: { fill: "white", fontSize: 20, fontWeight: "bold" },
                            data: {
                                fillOpacity: 1, stroke: "white", strokeWidth: 3
                            }
                        }}
                />
            </div>
        </div>);
    }
}

export default InterestCalculator;