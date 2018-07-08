import React from 'react';
import {Icon} from "antd";
import "./index.less";
import ShopCart from "./ShopCart";
export default class DetailInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <section className="detailInfoBox">
            <header className="detailInfoTop">
                <Icon type="left" onClick={ev=>{this.props.history.go(-1)}}/>
                <span>炸鸡排</span>
            </header>
            <div className="detailInfoBody">
                <img src="" alt=""/>
                <h3>炸鸡排</h3>
                <br/>
                <span>月售1000份</span>
                <span>好评率100%</span>
                <h3>商品介绍</h3>
                <p>炸鸡排，炸鸡排，炸大鸡排，炸大鸡排，炸大鸡排，炸大鸡排，炸大鸡排，炸大鸡排，炸大鸡排，炸大鸡排</p>
            </div>
            <ShopCart/>
        </section>

    }
}