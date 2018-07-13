import React from 'react';
// import ReactSwipe from 'react-swipe';
import OrderItem from "./OrderItem";
import { Tabs } from 'antd';


const TabPane = Tabs.TabPane;

export default class OrderList extends React.Component{
    callback=(key)=>{
        this.props.getData(key-1);
    }
	render(){
        // console.log(this.state.data);
        // if(!this.state.data)return;
        
        return (
			<section className="list-container">
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="全部订单" key="1">
						<ul className="wrap">
							<OrderItem data={this.props.obj["1"]||[]}/>
						</ul>
					</TabPane>
                    <TabPane tab="未完成" key="2">
                        <ul className="wrap">
                            <OrderItem data={this.props.obj["2"]||[]}/>
                        </ul>
					</TabPane>
                    <TabPane tab="已完成" key="3">
                        <ul className="wrap">
                            <OrderItem data={this.props.obj["3"]||[]}/>
                        </ul>
					</TabPane>
                </Tabs>
				{/*<ReactSwipe className="carousel" swipeOptions={{continuous: false}}>


                </ReactSwipe>*/}
			</section>
		)
	}
}