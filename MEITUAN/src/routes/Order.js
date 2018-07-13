import React from 'react'
import OrderList from "./order/OrderList";
import "./order/index.less";
import {getOrderInfo} from "../api/order";
export default class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orderState:0,
            obj:{}
        }
    }
    componentWillMount(){
        this.getData(this.state.orderState);
    }
    getData = async (orderState)=>{
        let res = await getOrderInfo(orderState);
        if(res.code==1){
            this.props.history.push("/person/login");
            //是否有必要把这个路径放入redux中记录？？
        }else{
            this.setState({
                orderState,
                obj:{...this.obj,[orderState+1]:res.data}
            })
        }
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

        		<OrderList getData={this.getData} defaultKey={this.state.orderState+1} obj={this.state.obj}/>
        		
        	</section>
        )

    }
}