import React from "react";
import FilterModel from "./FilterModel";
import TilesModel1 from "./TilesModel1";
import TilesModel2 from "./TilesModel2";

class ComponentsDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.onClickCallBack = this.onClickCallBack.bind(this);
        this.onClickTilesCallBack = this.onClickTilesCallBack.bind(this);
    }
    onClickCallBack(obj, index){
        console.log("onClickCallBack!!", obj, index);
        this.setState({selected: index});
    }
    onClickTilesCallBack(obj, index){
        console.log("onClickTilesCallBack!!", obj, index);
    }
    render(){
        let content = {
            villaName:"The Address...",
            BHK:[1,2,4],
            flatSize:{minValue:556, maxValue:2623, scale:"sqft"},
            price:{curency:"rupee", value:25.5, multiplesOf:"L", minValue:true, maxValue: false, fixedValue:false, availableCurrency:["Rupee","US-Dolar"]}
        };
        let propsValue = [
            {
                content : {
                    villaName:"The Address...",
                    BHK:[1,2,4],
                    flatSize:{minValue:556, maxValue:2623, scale:"sqft"},
                    price:{curency:"rupee", value:25.5, multiplesOf:"L", minValue:true, maxValue: false, fixedValue:false, availableCurrency:["Rupee","US-Dolar"]}
                },
                imageURL:"http://www.phadke-developers.com/images/projects/girinar-residency/large/flat-apartment-under-construction-reasonable-rate.jpg",
                placeName:"Sholingallur",
            },
            {
                content : {
                    villaName:"The Address...",
                    BHK:[1,2,4],
                    flatSize:{minValue:556, maxValue:2623, scale:"sqft"},
                    price:{curency:"rupee", value:25.5, multiplesOf:"L", minValue:true, maxValue: false, fixedValue:false, availableCurrency:["Rupee","US-Dolar"]}
                },
                imageURL:"http://www.phadke-developers.com/images/projects/girinar-residency/large/flat-apartment-under-construction-reasonable-rate.jpg",
                placeName:"Sholingallur",
            },
            {
                content : {
                    villaName:"The Address...",
                    BHK:[1,2,4],
                    flatSize:{minValue:556, maxValue:2623, scale:"sqft"},
                    price:{curency:"rupee", value:25.5, multiplesOf:"L", minValue:true, maxValue: false, fixedValue:false, availableCurrency:["Rupee","US-Dolar"]}
                },
                imageURL:"http://www.phadke-developers.com/images/projects/girinar-residency/large/flat-apartment-under-construction-reasonable-rate.jpg",
                placeName:"Sholingallur",
            },
            {
                content : {
                    villaName:"The Address...",
                    BHK:[1,2,4],
                    flatSize:{minValue:556, maxValue:2623, scale:"sqft"},
                    price:{curency:"rupee", value:25.5, multiplesOf:"L", minValue:true, maxValue: false, fixedValue:false, availableCurrency:["Rupee","US-Dolar"]}
                },
                imageURL:"http://www.phadke-developers.com/images/projects/girinar-residency/large/flat-apartment-under-construction-reasonable-rate.jpg",
                placeName:"Sholingallur",
            },
            {
                content : {
                    villaName:"The Address...",
                    BHK:[1,2,4],
                    flatSize:{minValue:556, maxValue:2623, scale:"sqft"},
                    price:{curency:"rupee", value:25.5, multiplesOf:"L", minValue:true, maxValue: false, fixedValue:false, availableCurrency:["Rupee","US-Dolar"]}
                },
                imageURL:"http://www.phadke-developers.com/images/projects/girinar-residency/large/flat-apartment-under-construction-reasonable-rate.jpg",
                placeName:"Sholingallur",
            },
            {
                content : {
                    villaName:"The Address...",
                    BHK:[1,2,4],
                    flatSize:{minValue:556, maxValue:2623, scale:"sqft"},
                    price:{curency:"rupee", value:25.5, multiplesOf:"L", minValue:true, maxValue: false, fixedValue:false, availableCurrency:["Rupee","US-Dolar"]}
                },
                imageURL:"http://www.phadke-developers.com/images/projects/girinar-residency/large/flat-apartment-under-construction-reasonable-rate.jpg",
                placeName:"Sholingallur",
            },
            {
                content : {
                    villaName:"The Address...",
                    BHK:[1,2,4],
                    flatSize:{minValue:556, maxValue:2623, scale:"sqft"},
                    price:{curency:"rupee", value:25.5, multiplesOf:"L", minValue:true, maxValue: false, fixedValue:false, availableCurrency:["Rupee","US-Dolar"]}
                },
                imageURL:"http://www.phadke-developers.com/images/projects/girinar-residency/large/flat-apartment-under-construction-reasonable-rate.jpg",
                placeName:"Sholingallur",
            },
            {
                content : {
                    villaName:"The Address...",
                    BHK:[1,2,4],
                    flatSize:{minValue:556, maxValue:2623, scale:"sqft"},
                    price:{curency:"rupee", value:25.5, multiplesOf:"L", minValue:true, maxValue: false, fixedValue:false, availableCurrency:["Rupee","US-Dolar"]}
                },
                imageURL:"http://www.phadke-developers.com/images/projects/girinar-residency/large/flat-apartment-under-construction-reasonable-rate.jpg",
                placeName:"Sholingallur",
            },
            {
                content : {
                    villaName:"The Address...",
                    BHK:[1,2,4],
                    flatSize:{minValue:556, maxValue:2623, scale:"sqft"},
                    price:{curency:"rupee", value:25.5, multiplesOf:"L", minValue:true, maxValue: false, fixedValue:false, availableCurrency:["Rupee","US-Dolar"]}
                },
                imageURL:"http://www.phadke-developers.com/images/projects/girinar-residency/large/flat-apartment-under-construction-reasonable-rate.jpg",
                placeName:"Sholingallur",
            }
        ];
        return(<div>
            <h2>FIlter Model 1</h2>
            <div>
                <FilterModel 
                    selectedIndex={this.state.selected} 
                    onClickCallBackNavButton={this.onClickCallBack}
                    filterOptions={["Home","Hello","Hello","Hai!","Hello!"]}
                    propertyDetails={propsValue}
                    onClickTilesCallBack={this.onClickTilesCallBack}
                    />
            </div>
             <h2>Tiles Model 1</h2>
                <div>
                <TilesModel1 
                    imageURL="http://www.phadke-developers.com/images/projects/girinar-residency/large/flat-apartment-under-construction-reasonable-rate.jpg"
                    placeName="Sholingallur"
                    contents={content}
                    onClickCallBack={this.onClickTilesCallBack}
                    onClickCurrencyChanges={this.onClickCallBack}
                />
            </div>
            <h2>Tiles Model 2</h2>
            <div>
                <TilesModel2 
                    imageURL="http://www.phadke-developers.com/images/projects/girinar-residency/large/flat-apartment-under-construction-reasonable-rate.jpg"
                    placeName="Sholingallur"
                    contents={content}
                    onClickCallBack={this.onClickTilesCallBack}
                    onClickCurrencyChanges={this.onClickCallBack}
                    />
            </div>
            </div>);
    }
}
export default ComponentsDemo;