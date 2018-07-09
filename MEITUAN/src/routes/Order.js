import React from 'react'
import "./order/index.less";
export default class Order extends React.Component{
		componentWillMount(){
			console.log("########### 订单页重新加载了");
			
		}
    render(){
        return (
        	<section className="orderBox">
         		订单页
        	</section>
        )

    }
}