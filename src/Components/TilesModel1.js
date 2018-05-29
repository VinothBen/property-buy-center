import React, {Component} from "react";

class Tiles1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageURL:"",
            flatPlaveName:"",
            BHKS:[],
            flatSize:{},
            price:{},
            placeName:"",
            contents:{},
            changedCurrency : ""
        };
        this.imageStyle = {
            height: "180px",
            position: "relative",
            width: "350px",
        };
        this.containerDiv = {
            height: "350px",
            position: "relative",
            width: "350px",
            boxShadow: "0px 0px 5px 0px #000",
            margin: "35px 35px"
        };
        this.placeNameStyle = {
            backgroundColor: "#17376b",
            color: "#ffffff",
            position: "relative",
            display: "inline-block",
            float: "right",
            top: "-5%",
            marginRight: "10px",
            padding: "5px 15px 5px 15px",
        };
        this.contenth4Tag = {
            display: "inline-block",
            color: "#1f4e9b",
            fontSize: "16px",
            fontWeight: "bold",
            marginTop: "35px",
            marginBottom: "5px"
        };
        this.h5tags = {
            marginTop: "3px",
            marginBottom: "5px"
        };
        this.seeDetails = {
            display: "inline-block",
            float: "right",
            marginRight: "20px",
            color: "#04c9de",
            cursor: "pointer",
            position: "relative",
            bottom: "10px"
        };
    }
    componentWillMount(){
        this.setState({
            contents:this.props.contents
        });
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            contents:nextProps.contents
        });
    }
   getContentDiv = () =>{
       const {contents, changedCurrency} = this.state;
       return(
        <div style={{margin: "0px 0px 0px 15px"}}>
            <h4 style={this.contenth4Tag}>{contents.villaName}</h4>
            <h5 style={this.h5tags}>{contents.BHK.join(",")} BHK Apartment</h5>
            <div style={{display: "-webkit-inline-box", color:"#686868"}}>
                <h5 style={this.h5tags}>{contents.flatSize.minValue} </h5>{contents.flatSize.maxValue?<h5 style={this.h5tags}>&nbsp;-&nbsp;{contents.flatSize.maxValue}</h5>:null} 
                <h5 style={this.h5tags}>&nbsp;{contents.flatSize.scale}</h5>
            </div>
            <div style={{position:"relative",top: "-5px"}}><span style={{fontSize: "x-large"}}>&#x20b9;&nbsp;</span><span style={{fontWeight:"600", position:"relative",top:"-2px"}}>25.5 Lac</span><span style={{color:"#686868",position:"relative",top:"-2px"}}>&nbsp;onwards</span>
            </div>{changedCurrency?<div>{changedCurrency}</div>:null}
        </div>
       );
   }
    render(){
        return (<div style={this.containerDiv}>
                <div><img style={this.imageStyle} src={this.props.imageURL}/></div>
                <div style={this.placeNameStyle}>{this.props.placeName}</div>
                {this.state.contents?this.getContentDiv():null}
                <div style={this.seeDetails} onClick={()=>this.props.onClickCallBack(this.props)}><h5>See Details &#x2212;&#x003E;</h5></div>
            </div>);
    }
}
export default Tiles1;