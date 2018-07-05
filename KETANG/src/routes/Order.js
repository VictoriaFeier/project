import React from 'react'
import OrderList from "./order/OrderList";
import "./order/index.less";
export default class Order extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return (
        	<section className="order-box">
        		<div className="title">
        			<h2>订单</h2>
        		</div>
        		{/*<div className="wrap">
        			<div className="list">
        				
        			</div>
        		</div>*/}

        		{<OrderList/>}
        		
        	</section>
        )

    }
}