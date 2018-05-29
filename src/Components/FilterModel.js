import React from "react";
import {Row, Col} from "react-bootstrap";
import TilesModel2 from "./TilesModel2";
import _ from "lodash";
class FilterModel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex:0,
            startIndex:0,
            leftScrollButton:0,
            rightScrollButton:0
        };
        this.rightScrollButton=0;
        this.leftScrollButton=0;
        this.buttonsNotSelected = {
            backgroundColor: "orange",
            display: "inline-block",
            position: "relative",
            margin: "20px 0px 0px 40px",
            width: "150px",
            height: "60px",
            cursor: "pointer",
            boxShadow: "0px 0px 5px 0px #000",
        }
        this.optionsTextNotSelected = {
            textTransform:"uppercase",
            color:"#ffffff", 
            textAlign:"-webkit-center",
            wordWrap:"break-word",
            margin: "15px 10px 0px 10px",
            fontWeight: "600"
        };
        this.buttonsSelected = {
            backgroundColor: "#fff",
            display: "inline-block",
            position: "relative",
            margin: "20px 0px 0px 40px",
            width: "150px",
            height: "60px",
            cursor: "pointer",
            boxShadow: "0px 0px 5px 0px #000",
        };
        this.optionsTextSelected = {
            textTransform:"uppercase",
            color:"#0c4999", 
            textAlign:"-webkit-center",
            wordWrap:"break-word",
            margin: "15px 10px 0px 10px",
            fontWeight: "600"
        }
        this.downArrow = {
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: "10px solid #0c4999",
            position: "absolute",
            width: "0px",
            height: "0px",
            left: "65px",
            bottom: "-10px"
        };
        this.scrollButton = {
            display: "inline-block",
            backgroundColor: "orange",
            color: "#fff",
            width: "30px",
            height: "30px",
            marginLeft: "2px",
            marginRight: "2px",
            textAlign: "center",
            marginTop: "20px",
            cursor: "pointer"
        }
    }
    componentWillMount(){
        let scrollNumber = 0;
        if(!_.isEmpty(this.props.propertyDetails)){
            if(this.props.propertyDetails.length % 4 !== 0){
                scrollNumber = Math.floor(this.props.propertyDetails.length/4);
            }else {
                scrollNumber = this.props.propertyDetails.length/4;
            }
        }
        this.rightScrollButton = scrollNumber;
        if(this.props.selectedIndex){
            this.setState({selectedIndex: this.props.selectedIndex});
        }
    }
    componentWillReceiveProps(nextProps){
        let scrollNumber = 0;
        if(!_.isEmpty(nextProps.propertyDetails)){
            if(nextProps.propertyDetails.length % 4 !== 0){
                scrollNumber = Math.floor(nextProps.propertyDetails.length/4);
            }else {
                scrollNumber = nextProps.propertyDetails.length/4;
            }
        }
        this.rightScrollButton = scrollNumber;
        if(nextProps.selectedIndex){
            this.setState({selectedIndex: nextProps.selectedIndex});
        }
    }
    getFilterOptions=(values)=>{
        let comp = [];
        let selectedValue = this.props.selectedIndex?this.props.selectedIndex:0;
        if(!_.isEmpty(values)){
            values.map((obj, index)=>{
                comp.push(<Col xs={3} onClick={()=>this.props.onClickCallBackNavButton(obj, index)} style={selectedValue === index?this.buttonsSelected:this.buttonsNotSelected} key={index}>
                    <h5 style={selectedValue === index? this.optionsTextSelected:this.optionsTextNotSelected}>{obj}</h5>
                {selectedValue === index?<span style={this.downArrow}>&nbsp;</span>:null}
                </Col>);
            })
        }
        return comp;
    }
    getPropertyDetails = (proprtyValue)=>{
        let comp = [];
        if(!_.isEmpty(proprtyValue)){
        //    proprtyValue.map((value, index)=>{
        //     comp.push(
        //         <Col xs={6} key={index} style={{}}>
        //             <TilesModel2 
        //                 imageURL={value.imageURL}
        //                 placeName={value.placeName}
        //                 contents={value.content}
        //                 onClickCallBack={()=>this.props.onClickTilesCallBack(value, index)}
        //             />
        //         </Col>
        //     );
        //    });
        let startIndex = this.state.startIndex;
        for(let i = startIndex; i<startIndex+4; i++){
            if(!_.isEmpty(proprtyValue[i])){
                comp.push(
                            <Col xs={6} key={i}>
                                <TilesModel2 
                                    imageURL={proprtyValue[i].imageURL}
                                    placeName={proprtyValue[i].placeName}
                                    contents={proprtyValue[i].content}
                                    onClickCallBack={()=>this.props.onClickTilesCallBack(proprtyValue[i], i)}
                                />
                            </Col>);
                }
            }
        }
        return comp;
    }
    onClickScrollButton = (keyValue) =>{
        if(keyValue === "left" && this.leftScrollButton !==0){
            this.rightScrollButton = ++this.rightScrollButton; 
            this.leftScrollButton = --this.leftScrollButton;
            let startIndex = this.state.startIndex - 4;
            this.setState({startIndex});
        }
        if(keyValue === "right" && this.rightScrollButton !==0){
            this.rightScrollButton = --this.rightScrollButton; 
            this.leftScrollButton = ++this.leftScrollButton;
            let startIndex = this.state.startIndex + 4;
            this.setState({startIndex});
        }
    }
    render(){
        return (
        <div>
               <div>
                   <Row>
                      {this.getFilterOptions(this.props.filterOptions)}
                    </Row>
                </div>
                <div style={{display: "inline-block",width: "70%",height: "400px",}}>
                    <Row>
                        {this.getPropertyDetails(this.props.propertyDetails)}
                        </Row>
                </div>
               <div style={{position:"relative",left:"35%",bottom:"20px"}}><div style={this.scrollButton}>
               <span style={this.leftScrollButton === 0?{color: "#c9c9c9",top: "7px"}:{top: "7px"}} className="glyphicon glyphicon-menu-left" onClick={this.leftScrollButton !== 0?()=>this.onClickScrollButton("left"):null}></span>
               </div><div style={this.scrollButton}>
               <span style={this.rightScrollButton === 0?{color: "#c9c9c9",top: "7px"}:{top: "7px"}} className="glyphicon glyphicon-menu-right" onClick={this.rightScrollButton !== 0?()=>this.onClickScrollButton("right"):null}></span>
               </div>
               <br/>
               </div>
        </div>);
    }
}
export default FilterModel;