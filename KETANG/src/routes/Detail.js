import React from 'react';
import {Icon} from "antd";
import "./detail/index.less";
import {connect} from "react-redux";
import action from "../store/action/index";
import {Link} from "react-router-dom";
import ShopCart from "./detail/ShopCart";
import {getDeatilData} from "../api/detail";
class Detail extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getDetailDataApi();
    }
    render(){
        console.log(this.props);
        return <section className="detailBox">
            <header className="detailTop">
                <Icon type="left" onClick={ev=>{this.props.history.go(-1)}}/>
                <span>肯德基宅急送</span>
            </header>
            <div className="detailBody">
                <h3>商品列表</h3>
                <div className="shoppingList clearfix">
                    <ul className="shoppingLeft">
                        {
                            this.props.detailData.map((item,index)=>{
                                return <li key={index}>{item.name}</li>
                            })
                        }
                    </ul>
                    <ul className="shoppingRight">
                        {this.props.detailData.map((item,index)=>{
                           return item.foods.map((item,index)=>{
                                return  <li  key={index}>
                                    <img src={item.image} alt=""/>
                                    <div className="right">
                                        <h4>{item.name}</h4>
                                        <span>月售1000份</span>
                                        &nbsp;&nbsp;&nbsp;
                                        <span>好评率100%</span>
                                        <i>￥{item.price}</i>
                                        <div className="btn">
                                            <button>-</button>
                                            <span>&nbsp;1&nbsp;</span>
                                            <button>+</button>
                                        </div>
                                    </div>
                                </li>
                            })

                        })}
                    </ul>
                </div>
            </div>

            <ShopCart sellerID={this.props.match.params.sellerID}/>
        </section>

    }
}

console.log(action.detail);
export default connect(state=>({...state.detail}),action.detail)(Detail)