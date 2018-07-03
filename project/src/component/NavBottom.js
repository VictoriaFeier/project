import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {Icon} from "antd";
export default class NavBottom extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <section className="footerBox">
            <NavLink to="home">
                <Icon type="home"/>
                <span>首页</span>
            </NavLink>
            <NavLink to="home">
                <Icon type="exception"/>
                <span>订单</span>
            </NavLink>
            <NavLink to="home">
                <Icon type="user"/>
                <span>我的</span>
            </NavLink>
        </section>

    }
}