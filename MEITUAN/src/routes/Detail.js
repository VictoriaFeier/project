import React from 'react';
import {connect} from "react-redux";
import action from "../store/action";
import {queryDetailSellerData,submissionCatData,submissionOrderData} from "../api/detail";
import {Icon} from "antd";
import Plus from "./detail/Plus";
import ShopCart from "./detail/ShopCart";
import DetailInfo from "./detail/DetailInfo";
import "./detail/index.less";
class Detail extends React.Component{
		constructor(props){
			super(props);
			this.state = {
				seller:{},
				goods:[],
				index:0,
                DetailInfoName:""
			};
		}
		componentWillMount(){
			console.log("########### 详情页重新加载了");
			//console.log(this.props.match.params.sellerID);
			this.sellerID = this.props.match.params.sellerID;
			this.getDetailSellerDataAPI();
			this.cat = this.props.cat;
			this.info = {
				totalPrice:0,
				totalNum:0,
				type:[]
			}
      //this.info = {...this.info, ...this.cat[this.sellerID]};
		}
		getDetailSellerDataAPI = async ()=>{
			let sellerData = await queryDetailSellerData(this.sellerID);
			//如果本地redux信息为空，用session的购物车信息
			if(sellerData.cat&&Object.getOwnPropertyNames(this.cat).length===0){
				this.cat = sellerData.cat;
				this.props.setDetailCatAllDataAPI(this.cat);
			}

			this.info = {...this.info, ...this.cat[this.sellerID]};

			console.log("通过调用setState触发redner渲染视图");
			this.setState({
				seller:sellerData.data.seller,
				goods:sellerData.data.goods
			});
		};
		componentDidUpdate(){
			if(this.goWeb){
				// submissionCatData({cat:this.props.cat});
				submissionCatData(this.props.cat);
				this.goWeb = false;
			}
		}
        add = foodInfo=>{
            console.log("add");
            this.info.totalNum=parseFloat(this.info.totalNum)+1;
            this.info.totalPrice=parseFloat(this.info.totalPrice)+parseFloat(foodInfo.price);
            let index = this.info.type.findIndex(item=>{
                return item.name == foodInfo.name;
            });
            if(index>-1){
                this.info.type[index]["num"]=parseFloat(this.info.type[index]["num"])+1;
            }else{
                this.info.type.push({
                    name:foodInfo.name,
                    num:1,
                    price:parseFloat(foodInfo.price)
                })
            }
            this.lalala();
        };
        minus = foodInfo=>{
            console.log("minus");
            this.info.totalNum=parseFloat(this.info.totalNum)-1;
            this.info.totalPrice=parseFloat(this.info.totalPrice)-parseFloat(foodInfo.price);
            let index = this.info.type.findIndex(item=>{
                return item.name == foodInfo.name;
            });
            if(index>-1){
                this.info.type[index]["num"]=parseFloat(this.info.type[index]["num"])-1;
                if(this.info.type[index]["num"]===0){
                    this.info.type.splice(index,1);
                }
            }else{
                throw new Error("没有这个菜，你却还要减这个菜，一定是哪里弄错了")
            }
            this.lalala();
        };
        clear = ()=>{
            this.info = {
                totalPrice:0,
                totalNum:0,
                type:[]
            };
            this.lalala();
        };
        lalala = ()=>{
            this.props.setDetailCatDataAPI({
                id:this.sellerID,
                info:this.info
            });
            this.goWeb = true;
        };
        leftOnClickHandler = index=>{
            this.setState({index})
        };
        clearDetailInfoName = ()=>{
            this.setState({DetailInfoName:""})
        };
        pay = async ()=>{

            let data = {
                sellerID: this.sellerID,
                sellerName:this.state.seller.name,
                sellerAvatar:this.state.seller.avatar,
                sellerInfo: {
                    ...this.props.cat[this.sellerID],
                    deliveryTime:this.state.seller.deliveryTime
                }
            }


            let res = await submissionOrderData(data);

            console.log(res)

            if(res.code==1){
                this.props.history.push("/person/login");
                //是否有必要把这个路径放入redux中记录？？
            }else if(res.code==0){
                this.clear();
                this.props.history.push("/order");
            }else{
                console.error(res);
            }
        };
    render(){
        if(this.state.goods.length===0) return"";

        let detailInfoData={}
        if(this.state.DetailInfoName){
            let num = 0;
            let item;
            let index = this.info.type.findIndex(item=>{
                return item.name === this.state.DetailInfoName;
            });
            if(index>-1){
                num = this.info.type[index].num;
                // item = this.info.type[index];
            }/*else{*/
                let foodsIndex = this.state.goods[this.state.index]["foods"].findIndex(item=>{
                        return item.name === this.state.DetailInfoName;
                });
                item = this.state.goods[this.state.index]["foods"][foodsIndex];
            /*}*/
            detailInfoData.num = num;
            detailInfoData.item = item;

        }

        return <section className="detailBox">
        	{this.state.DetailInfoName?
                <DetailInfo num={detailInfoData.num} 
                               add={this.add} 
                               minus={this.minus}
                               clearDetailInfoName={this.clearDetailInfoName}
                               foodInfo={detailInfoData.item}/>:
            <div>
            <header className="detailTop">
                <Icon type="left" onClick={ev=>{this.props.history.push("/home")}}/>
                <span>{this.state.seller.name}</span>
            </header>
            <div className="detailNav"><h3>点菜</h3></div>
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

                                        return  <li  key={index} onClick={()=>{
                                            this.setState({DetailInfoName:item.name})
                                        }}>
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
            </div> 

            }
             

            <ShopCart pay={this.pay} clear={this.clear} add={this.add} minus={this.minus}minPrice={this.state.seller.minPrice||0} info={this.info}/>





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