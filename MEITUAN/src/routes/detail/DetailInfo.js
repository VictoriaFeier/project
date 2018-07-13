import React from 'react';
import {Icon} from "antd";
import Plus from "./Plus"

export default class DetailInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.foodInfo);
        let {foodInfo}=this.props;
        return <section className="detailInfoBox">
            <header className="detailInfoTop">
                <Icon type="left" onClick={ev=>{
                    this.props.clearDetailInfoName();
                }}/>
                <span>{foodInfo.name}</span>
            </header>
            <Plus foodInfo={this.props.foodInfo} add={this.props.add} minus={this.props.minus} num={this.props.num}/>
            <div className="detailInfoBody">
                <img src={foodInfo.image} alt=""/>
                <div className="relativeDIv">
                    <h3>{foodInfo.name}</h3>
                    <br/>
                    <span>月售{foodInfo.sellCount}份</span>
                    <span>好评率{foodInfo.rating}%</span>
                    <h3>{foodInfo.description}</h3>

                </div>
            </div>
            {/*<ShopCart/>*/}
        </section>

    }
}