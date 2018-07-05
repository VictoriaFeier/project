import React from 'react';

export default class OrderItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="field">
                <div className="field-head">
                    <div className="avatar">
                        <img src="http://p1.meituan.net/waimaipoi/94ad1e93db03c81974375716cf61ec66636116.jpg"
                             className="avatar-img"/>
                    </div>
                    <a className="field-head-name" href="/restaurant/444276715202142">湘赣木桶饭</a>
                    <span className="field-head-status">订单完成</span>
                </div>
                <a className="field-item clearfix" href="javascript:;">
                    <div className="content">
                        <div className="field-content-product clearfix">
                            <div className="field-content-product-name">萝卜干炒腊肉饭+自选饮品
                            </div>
                            <div className="field-content-product-count">x1</div>
                        </div>
                        <div className="field-content-desc clearfix">
                            <div className="count">
                                总计1个菜，实付<span className="price">￥12.99</span>
                            </div>
                        </div>
                    </div>
                </a>
                <div className="field-console">
                    <div className="field-console-btns">
                        <button>
                            再来一单
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}