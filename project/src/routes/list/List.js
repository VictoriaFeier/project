import React from 'react';
import {Carousel,Icon} from 'antd';

export default class List extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="listBox">
            {/*轮播图*/}
            <Carousel autoplay>
                <div><img src={require('../../static/images/1.jpg')} alt=""/></div>
                <div><img src={require('../../static/images/2.jpg')} alt=""/></div>
                <div><img src={require('../../static/images/5.jpg')} alt=""/></div>
                <div><img src={require('../../static/images/3.jpg')} alt=""/></div>
                <div><img src={require('../../static/images/4.jpg')} alt=""/></div>

            </Carousel>

            {/*分类*/}
            <ul className="sort">
                <li>
                    <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt=""/>
                    <p>美食</p>
                </li>
                <li>
                    <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt=""/>
                    <p>美食</p>
                </li>
                <li>
                    <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt=""/>
                    <p>美食</p>
                </li>
                <li>
                    <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt=""/>
                    <p>美食</p>
                </li>
                <li>
                    <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt=""/>
                    <p>美食</p>
                </li>
                <li>
                    <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt=""/>
                    <p>美食</p>
                </li>
                <li>
                    <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt=""/>
                    <p>美食</p>
                </li>
                <li>
                    <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt=""/>
                    <p>美食</p>
                </li>
            </ul>

            {/*数据列表*/}
            <div>
            <h2>
                附近商家
            </h2>
                <ul className="sellerList">
                    <li className="clearfix">
                        <img src="http://p0.meituan.net/0.84.63/xianfu/aa86bc1b9a218ea5e094b861c03b59b94873.jpg.webp" alt=""/>
                        <div className="sellerRight">
                            <h3>麦当劳</h3>
                            <span className="star">
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                            </span>
                            <span>月售额</span>

                            <span>时间</span>
                            <span>|</span>
                            <span>距离</span>
                            <br/>
                        <span>起送价¥0</span>
                            <span>|</span>
                        <span>配送¥9</span>
                        <p>
                            <img className="piao" src="http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png.webp" alt=""/>
                            &nbsp;
                            本店支持开发票，开票金额0元起
                        </p>
                        </div>
                    </li>
                    <li className="clearfix">
                        <img src="http://p0.meituan.net/0.84.63/xianfu/aa86bc1b9a218ea5e094b861c03b59b94873.jpg.webp" alt=""/>
                        <div className="sellerRight">
                            <h3>麦当劳</h3>
                            <span className="star">
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                            </span>
                            <span>月售额</span>

                            <span>时间</span>
                            <span>|</span>
                            <span>距离</span>
                            <br/>
                            <span>起送价¥0</span>
                            <span>|</span>
                            <span>配送¥9</span>
                            <p>
                                <img className="piao" src="http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png.webp" alt=""/>
                                &nbsp;
                                本店支持开发票，开票金额0元起
                            </p>
                        </div>
                    </li>
                    <li className="clearfix">
                    <img src="http://p0.meituan.net/0.84.63/xianfu/aa86bc1b9a218ea5e094b861c03b59b94873.jpg.webp" alt=""/>
                    <div className="sellerRight">
                        <h3>麦当劳</h3>
                            <span className="star">
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                            </span>
                        <span>月售额</span>

                        <span>时间</span>
                        <span>|</span>
                        <span>距离</span>
                        <br/>
                        <span>起送价¥0</span>
                        <span>|</span>
                        <span>配送¥9</span>
                        <p>
                            <img className="piao" src="http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png.webp" alt=""/>
                            &nbsp;
                            本店支持开发票，开票金额0元起
                        </p>
                    </div>
                </li>
                    <li className="clearfix">
                        <img src="http://p0.meituan.net/0.84.63/xianfu/aa86bc1b9a218ea5e094b861c03b59b94873.jpg.webp" alt=""/>
                        <div className="sellerRight">
                            <h3>麦当劳</h3>
                            <span className="star">
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                            </span>
                            <span>月售额</span>

                            <span>时间</span>
                            <span>|</span>
                            <span>距离</span>
                            <br/>
                            <span>起送价¥0</span>
                            <span>|</span>
                            <span>配送¥9</span>
                            <p>
                                <img className="piao" src="http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png.webp" alt=""/>
                                &nbsp;
                                本店支持开发票，开票金额0元起
                            </p>
                        </div>
                    </li>
                    <li className="clearfix">
                        <img src="http://p0.meituan.net/0.84.63/xianfu/aa86bc1b9a218ea5e094b861c03b59b94873.jpg.webp" alt=""/>
                        <div className="sellerRight">
                            <h3>麦当劳</h3>
                            <span className="star">
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                            </span>
                            <span>月售额</span>

                            <span>时间</span>
                            <span>|</span>
                            <span>距离</span>
                            <br/>
                            <span>起送价¥0</span>
                            <span>|</span>
                            <span>配送¥9</span>
                            <p>
                                <img className="piao" src="http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png.webp" alt=""/>
                                &nbsp;
                                本店支持开发票，开票金额0元起
                            </p>
                        </div>
                    </li>
                    <li className="clearfix">
                        <img src="http://p0.meituan.net/0.84.63/xianfu/aa86bc1b9a218ea5e094b861c03b59b94873.jpg.webp" alt=""/>
                        <div className="sellerRight">
                            <h3>麦当劳</h3>
                            <span className="star">
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                            </span>
                            <span>月售额</span>

                            <span>时间</span>
                            <span>|</span>
                            <span>距离</span>
                            <br/>
                            <span>起送价¥0</span>
                            <span>|</span>
                            <span>配送¥9</span>
                            <p>
                                <img className="piao" src="http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png.webp" alt=""/>
                                &nbsp;
                                本店支持开发票，开票金额0元起
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    }
}