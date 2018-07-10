import React from 'react';
import {connect} from "react-redux";
import action from "../../store/action/index";
import {getOrderInfo} from "../../api/order";
class OrderItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.data);
        return <ul>
            {
                this.props.data.map((item,index)=>{
                    return  <li className="field" key={index}>
                        <div className="field-head">
                            <div className="avatar">
                                <img src="http://p1.meituan.net/waimaipoi/94ad1e93db03c81974375716cf61ec66636116.jpg"
                                     className="avatar-img"/>
                            </div>
                            <a className="field-head-name" href="/seller">{item.sellerID}</a>
                            <span className="field-head-status">{item.state===0?"订单完成":item.state===1?"未完成":"已完成"}</span>
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
                                <button>
                                    {item.state===1?"立即支付":"再来一单"}
                                </button>
                            </div>
                        </div>
                    </li>
                })
            }
        </ul>
    }
}
export default connect(state=>({...state.order}),action.order)(OrderItem);