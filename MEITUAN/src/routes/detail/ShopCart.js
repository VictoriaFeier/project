import React from 'react';
import {Icon} from "antd";
import Plus from "./Plus"
export default class ShopCart extends React.Component{
    /*componentWillReceiveProps(){
        console.log("..."+this.props.info.type.length);
        if(this.props.info.type.length===0){
            this.mask.style.display = "none";
            this.cat.style.display = "none";
        }
    }
    componentWillUpdate(){
        console.log("."+this.props.info.type.length);
        if(this.props.info.type.length===0){
            this.mask.style.display = "none";
            this.cat.style.display = "none";
        }
    }*/
    componentDidUpdate(){
        if(this.props.info.type.length===0){
            this.mask.style.display = "none";
            this.cat.style.display = "none";
        }
    }
    render(){
        let {info,minPrice} = this.props;
        console.log(this.props);
        this.isEmpty = info.totalPrice == 0 ? true : false;
        this.isBeyond = info.totalPrice >= minPrice ? true : false;
        console.log(this.isEmpty);
        return <section className="shopCartBox">
        <div ref={x=>{this.mask=x;}} className="j-mask mask cart-mask" onClick={ev=>{
            ev.target.style.display = "none";
            this.cat.style.display = "none";
        }} style={{display:"none"}}></div>
        <div>
            <div className="scrollTop">
                <div className="icon">
                    <Icon type="shopping-cart" onClick={ev=>{
                        if(this.isEmpty){
                            return;
                        }
                        //打开购物车的详细部分
                        console.log("打开购物车的详细部分");
                        this.mask.style.display = "block";
                        this.cat.style.display = "block";
                    }}/>
                    
                </div>
                {!this.isEmpty?
                        <div className="iconTop">
                            {info.totalNum}
                        </div>:null}
                

                <div className="topInfo">
                    {this.isEmpty?
                        <span>购物车空空如也~</span>:
                        <span>{`￥${info.totalPrice}`}</span>}
                    
                    {this.isBeyond?
                        <button onClick={()=>{
                            this.props.pay();
                        }}>立即购买</button>:
                        <span className="right">{this.isEmpty?
                            `￥${minPrice}起送`:
                            `还差￥${minPrice-info.totalPrice}`}</span>}
                </div>
            </div>
            <div id="cart-dtl" className="cart-dtl" style={{display:"none"}} ref={x=>{this.cat=x}}>
                <div className="cart-dtl-head">
                    <span className="j-box-fee box-fee"></span>
                    <span className="j-cart-dusbin cart-dusbin" onClick={()=>{
                        this.props.clear();
                    }}><i></i>清空购物车</span>
                </div>
                <div className="j-cart-dtl-list cart-dtl-list">
                    <div className="j-cart-dtl-list-inner">
                        {info.type.map((item,index)=>{

                            return (
                        <div key={index} className="j-fooditem cart-dtl-item" data-orderid="456066495">

                            <div className="cart-dtl-item-inner">
                                <i className="cart-dtl-dot"></i>

                                <p className="cart-goods-name">{item.name}</p>
                                <Plus foodInfo={item} add={this.props.add} minus={this.props.minus} num={item.num}/>
                                
                                <span className="cart-dtl-price">¥{item.num*item.price}</span>
                            </div> 
                        </div>
                           ) 
                        })}
                        
                    </div>
                </div>
            </div>
            {/*<ul className="scrollShopCart" ref="scroll">
                <span onClick={ev=>{}}>清空购物车</span>
                {
                    info.type.map((item,index)=>{
                        return <li key={index}>
                           <div className="spanBox">
                               <span>{item.name}</span>
                               <span>￥{item.price}</span>
                           </div>
                        </li>
                    })
                }
            </ul>*/}
        </div>
        </section>

    }
}
