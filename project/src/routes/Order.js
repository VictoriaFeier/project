import React from 'react';
import {Menu} from "antd";
export default class Order extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return <section className="orderBox">
            <Menu>
                <Menu.Item>全部订单</Menu.Item>
                <Menu.Item>已完成</Menu.Item>
                <Menu.Item>未完成</Menu.Item>
            </Menu>
        </section>
        
    }
}