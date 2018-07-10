import React from 'react';
import ReactSwipe from 'react-swipe';
import OrderItem from "./OrderItem";
import { Tabs } from 'antd';
import {getOrderInfo} from "../../api/order";

const TabPane = Tabs.TabPane;

export default class OrderList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isLoading:false,
			data:[]
		}
	}
     componentWillMount(){
		this.getData(0);
    }
    getData= async (state)=>{
    this.result=await getOrderInfo(state),
    this.data=this.result.data;
    this.setState({
		           data:this.data
                  })
	}

    callback=(key)=>{
        this.getData(key-1);
    }
	render(){
        // console.log(this.state.data);
        if(!this.state.data)return;
        return (
			<section className="list-container">
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="全部订单" key="1">
						<ul className="wrap">
							<OrderItem {...this.state}/>
						</ul>
					</TabPane>
                    <TabPane tab="未完成" key="2">
                        <ul className="wrap">
                            <OrderItem {...this.state}/>
                        </ul>
					</TabPane>
                    <TabPane tab="已完成" key="3">
                        <ul className="wrap">
                            <OrderItem {...this.state}/>
                        </ul>
					</TabPane>
                </Tabs>
				<ReactSwipe className="carousel" swipeOptions={{continuous: false}}>


        </ReactSwipe>
			</section>
		)
	}
}