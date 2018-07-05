import React from 'react';
import ReactSwipe from 'react-swipe';
import OrderItem from "./OrderItem";

export default class OrderList extends React.Component{
	constructor(props){
		super(props);
		this.state={
        	orderInfo:[
        		{ary:[1,2,3,4,5,6,7]},
        		{ary:[1,2]},
        		{ary:[1]}
        	]
        }
	}
	render(){
		return (
			<section className="list-container">
				<ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
        		{this.state.orderInfo.map((item,index)=>{
        			return (
        				<div className="wrap" key={index}>
        					{item.ary.map((item2,index2)=>{
        						return (
        							<OrderItem key={index2}/>
        						)
        					})}
        				</div>
        			)
        		})}

        </ReactSwipe>
			</section>
		)
	}
}