import React from 'react';
import {Icon} from "antd";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import action from "../../store/action/index";
import {getDeatilData} from "../../api/detail";
class ShopCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isAddShopCart:false,
        }
    }
    componentWillMount(){
        this.sellerID = this.props.sellerID;
        this.getDetailSellerDataAPI();
        this.cat = this.props.cat;
        this.info = {
            totalPrice:0,
            totalNum:0,
            type:[{name:"包子",price:3,num:0}]
        }
    }
    getDetailSellerDataAPI = async ()=>{
        let sellerData = await getDeatilData(this.sellerID);

        //如果本地redux信息为空，用session的购物车信息
        if(sellerData.data.cat&&Object.getOwnPropertyNames(this.cat).length===0){
            this.cat = sellerData.data.cat;
        }

        this.info = {...this.info, ...this.cat[this.sellerID]};

        //通过调用setState触发redner渲染视图
        this.setState({
            id:sellerData.data.id,
            seller:sellerData.data.seller,
            goods:sellerData.data.goods
        });
    }
    render(){
        console.log(this.info);
        return <section className="shopCartBox">
            <div className="scrollTop">
                <div className="icon">
                    <Icon type="shopping-cart" onClick={ev=>{
                        (this.state.isAddShopCart?this.refs.scroll.style.transform=`translateY(-2.9rem)`:this.refs.scroll.style.transform=`translateY(0)`)
                        this.setState({
                            isAddShopCart:!this.state.isAddShopCart
                        })
                    }}/>
                </div>
                <NavLink to="/order">结算￥{this.info.totalPrice}</NavLink>
                <div className="iconTop">
                    {this.info.totalNum}
                </div>
            </div>
            <ul className="scrollShopCart" ref="scroll">
                <span onClick={ev=>{
                    this.props.deleteGoods();
                    this.refs.scroll.style.transform=`translateY(0)`;
                    this.setState({
                        isAddShopCart:false
                    })
                }}>清空购物车</span>
                {
                    this.info.type.map((item,index)=>{
                        return <li key={index}>
                           <div className="spanBox">
                               <span>{item.name}</span>
                               <span>￥{item.price}</span>
                           </div>
                            <div className="btn">
                                <button onClick={ev=>{
                                    // this.props.addGoods();
                                    if(this.info.totalNum>0){
                                        this.info.totalNum--;
                                    }
                                    this.info.totalPrice+=parseFloat(item.price);
                                    let tempIndex= this.info.type.findIndex((key,index)=>{
                                        return key.name===item.name;
                                    });
                                    if(tempIndex>-1){
                                        this.info.type[tempIndex]["num"]--;
                                    }else{
                                        this.info.type.push({
                                            name:item.name,
                                            price:item.price,
                                            num:1
                                        })
                                    }
                                    this.props.getDetailCar({id:this.sellerId,info:this.info});


                                }}>-</button>
                                <span>&nbsp;{item.num}&nbsp;</span>
                                <button onClick={ev=>{
                                    // this.props.addGoods();
                                    this.info.totalNum++;
                                    this.info.totalPrice+=parseFloat(item.price);
                                    let tempIndex= this.info.type.findIndex((key,index)=>{
                                        return key.name===item.name;
                                    });
                                    if(tempIndex>-1){
                                        this.info.type[tempIndex]["num"]++;
                                    }else{
                                        this.info.type.push({
                                            name:item.name,
                                            price:item.price,
                                            num:1
                                        })
                                    }
                                    this.props.getDetailCar({id:this.sellerId,info:this.info});


                                }}>+</button>
                            </div>
                        </li>
                    })
                }
            </ul>
        </section>

    }
}
export default connect(state=>({...state.detail}),action.detail)(ShopCart);