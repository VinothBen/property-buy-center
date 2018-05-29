import React, {Component} from "react";

class Tiles2 extends Component {
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
            height: "150px",
            position: "relative",
            width: "150px",
            float: "left",
            marginRight: "20px"
        };
        this.containerDiv = {
            height: "150px",
            position: "relative",
            width: "410px",
            boxShadow: "0px 0px 5px 0px #000",
            margin: "30px 0px 10px 50px",
            cursor: "pointer",
        };
        this.contenth4Tag = {
            display: "inline-block",
            color: "#09e0f7",
            fontWeight: "bold",
            marginBottom: "0px"
        };
        this.h5tags = {
            marginTop: "0px",
            marginBottom: "3px"
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
            <h5 style={this.contenth4Tag}>{contents.villaName}</h5>
            <br/>
            <h6 style={{color: "#1f4e9b",display: "inline-block",fontWeight: "600",marginTop: "5px", marginBottom: "7px"}}>{this.props.placeName}</h6>
            <h6 style={this.h5tags}>{contents.BHK.join(",")} BHK Apartment</h6>
            <div style={{display: "-webkit-inline-box", color:"#686868"}}>
                <h6 style={this.h5tags}>{contents.flatSize.minValue} </h6>{contents.flatSize.maxValue?<h6 style={this.h5tags}>&nbsp;-&nbsp;{contents.flatSize.maxValue}</h6>:null} 
                <h6 style={this.h5tags}>&nbsp;{contents.flatSize.scale}</h6>
            </div>
            <div style={{position:"relative",top: "-1px",fontSize: "smaller"}}><span style={{fontSize: "large"}}>&#x20b9;&nbsp;</span><span style={{fontWeight:"600", position:"relative",top:"-2px"}}>25.5 Lac</span><span style={{color:"#686868",position:"relative",top:"-2px"}}>&nbsp;onwards</span>
            </div>{changedCurrency?<div>{changedCurrency}</div>:null}
        </div>
       );
   }
    render(){
        return (<div style={this.containerDiv} onClick={()=>this.props.onClickCallBack(this.props)}>
                <div><img style={this.imageStyle} src={this.props.imageURL}/></div>
                {this.state.contents?this.getContentDiv():null}
            </div>);
    }
}
export default Tiles2;