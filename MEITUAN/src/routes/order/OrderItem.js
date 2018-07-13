import React from 'react';
import {connect} from "react-redux";
import action from "../../store/action/index";
import {getOrderInfo} from "../../api/order";
import {withRouter} from "react-router-dom";
class OrderItem extends React.Component {
    constructor(props) {
        super(props);
    }

    toM = ms=>{

        ms = Math.floor(ms/1000);
        let m = Math.floor(ms/60);
        let s = ms%60;
        return m + " : " + (s+"").padStart(2,"0");
    }

    /*addTimer = ms=>{
        if()
    }

    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer);
            this.timer=null;
        }
    }*/

    render() {
        // console.log(this.props.data);
        if(this.props.data.length===0) return "没有订单哦~"
        return <ul>
            {
                this.props.data.map((item,index)=>{
                    return  <li className="field" key={index}>
                        <div className="field-head">
                            <div className="avatar">
                                <img src={item.sellerAvatar}
                                     className="avatar-img"/>
                            </div>
                            <a className="field-head-name" href="javascript:;" onClick={()=>{
                                this.props.history.push(`/seller/${item.sellerID}`);
                            }}>{item.sellerName}</a>
                            <span className="field-head-status">{item.state===0?"订单完成":item.state===1?this.toM(item.remainderTime):"已完成"}</span>
                        </div>
                        <a className="field-item clearfix" href="javascript:;" key={index}>
                            <ul className="content">
                                {
                                    item.sellerInfo.type.map((key,index)=>{
                                       return  <li className="field-content-product clearfix" key={index}>
                                           <div className="field-content-product-name">
                                               {key.name}
                                           </div>
                                           <div className="field-content-product-count">x{key.num}</div>
                                       </li>
                                })
                                }
                            </ul>
                            <div className="field-content-desc clearfix">
                                <div className="count">
                                    总计{item.sellerInfo.totalNum}个菜，实付<span className="price">￥{item.sellerInfo.totalPrice}</span>
                                </div>
                            </div>

                        </a>

                        <div className="field-console">
                            <div className="field-console-btns">
                                <button onClick={()=>{
                                    // console.log(item.sellerInfo);
                                    let info = {...item.sellerInfo};
                                    delete info.deliveryTime;
                                    this.props.setDetailCatDataAPI({
                                        id:item.sellerID,
                                        info
                                    });
                                    this.props.history.push(`/seller/${item.sellerID}`);
                                }}>
                                    再来一单
                                </button>
                            </div>
                        </div>
                    </li>
                })
            }
        </ul>
    }
}
export default withRouter(connect(null,action.detail)(OrderItem));