import React from 'react';
import {Icon} from "antd";
import Plus from "./Plus"

export default class DetailInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <section className="detailInfoBox">
            <header className="detailInfoTop">
                <Icon type="left" onClick={ev=>{
                    this.props.clearDetailInfoName();
                }}/>
                <span>炸鸡排</span>
            </header>
            <Plus foodInfo={this.props.foodInfo} add={this.props.add} minus={this.props.minus} num={this.props.num}/>
            <div className="detailInfoBody">
                <img src="" alt=""/>
                <div className="relativeDIv">
                    <h3>炸鸡排</h3>
                    <br/>
                    <span>月售1000份</span>
                    <span>好评率100%</span>
                    <h3>商品介绍</h3>
                    <p>炸鸡排，炸鸡排，炸大鸡排，炸大鸡排，炸大鸡排，炸大鸡排，炸大鸡排，炸大鸡排，炸大鸡排，炸大鸡排</p>
                </div>
            </div>
            {/*<ShopCart/>*/}
        </section>

    }
}