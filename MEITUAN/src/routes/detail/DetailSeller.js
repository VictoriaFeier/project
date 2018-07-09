import React from 'react';

class DetailSeller extends React.Component{
		
		
    render(){
        if(this.state.goods.length===0) return"";
        return <section className="detailBox">
        		<header className="detailTop">
                <Icon type="left" onClick={ev=>{this.props.history.go(-1)}}/>
                <span>{this.state.seller.name}</span>
            </header>
            <h3>点菜</h3>
            <div className="detailBody">
            	<div className="detailList">
            		<div className="shoppingList clearfix">
                		<ul className="shoppingLeft">
                        {
                            this.state.goods.map((item,index)=>{
                                return <li className={index==this.state.index?"focus":""} key={index} onClick={()=>{
                                    this.leftOnClickHandler(index);
                                }}>{item.name}</li>
                            })
                        }
                    </ul>
                    <ul className="shoppingRight">
                    		{this.state.goods[this.state.index]["foods"].map((item,index)=>{
                                    let num = 0;
                                    if(this.info&&this.info.type&&this.info.type.length){
                                        let index = this.info.type.findIndex(typeItem=>{
                                            return typeItem.name === item.name
                                        })
                                        if(index>-1){
                                            num = this.info.type[index].num;
                                        }
                                    }

                    				    return  <li  key={index}>
                                    <img src={item.image} alt=""/>
                                    <div className="right">
                                        <h4>{item.name}</h4>
                                        <span>月售{item.sellCount}份</span>
                                        &nbsp;&nbsp;&nbsp;
                                        <span>好评率{item.rating}%</span>
                                        <i>￥{item.price}</i>

                                        <Plus foodInfo={item} add={this.add} minus={this.minus} num={num}/>
                                    </div>
                                </li>
                    		})}
                        
                    </ul>
                </div>
            	</div> 
            </div>

            <ShopCart clear={this.clear} add={this.add} minus={this.minus}minPrice={this.state.seller.minPrice||0} info={this.info}/>





        	{/*<button onClick={()=>{
        		this.props.history.push("/person");
        	}}>提交订单</button>
        	{(this.state.goods&&this.state.goods.length) 
        		?this.state.goods[0].foods.map((item,index)=>{
        		return <div key={index}
        								className="listDiv"
        						    data-name={item.name}
        						    data-price={item.price}
        						    onClick={ev=>{
        						    	// ev.stopPropagation();
        						    	//这里还需要做函数防抖处理
        						    	this.info.totalNum++;
        						    	this.info.totalPrice+=parseInt(item.price);
        						    	this.props.setDetailCatDataAPI({
        						    		id:this.sellerID,
        						    		info:this.info
        						    	});
        						    	this.goWeb = true;
        						    }}>
        						  <span>{item.name}</span>  <span>{item.price}</span>
        						  <p>点我添加菜品，在去首页看效果</p>
        						  
        					 </div>
        	})
        		:null
        	}*/}


        </section>

    }
}

export default connect(state=>({...state.detail}),action.detail)(Detail);