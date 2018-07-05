import React from 'react';
import {connect} from 'react-redux';
import {Carousel,Icon,Button} from 'antd';
import {Link} from 'react-router-dom';
import {queryBanner,queryList} from '../../api/home';
import action from '../../store/action/index';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[],
            data:[],
            isLoading:false
        }
    };

    async componentWillMount(){
        this.bannerData=await queryBanner();
        this.setState({
            arr:this.bannerData.arr
        });
        this.listData=await queryList();
        this.setState({
            data:this.listData.data
        });
    }

    async componentDidMount(){

        if(this.state.data.length===0){
            queryList();
        }
    }

    componentWillReceiveProps(){
        this.setState({isLoading:false});
    }

    loadMore=()=>{
        let {listData}=this.props;

        //=>防止重复点击
        if(this.state.isLoading) return;
        this.setState({isLoading:true});

        //=>重新发送新的dispatch
        queryList({
            page:listData.page+1,
            flag:'push'
        });
    };


    render(){
        this.isRun=false;
        return <div className="listBox">
            {/*轮播图*/}
            {this.state.arr&&(this.state.arr.length>0)? (<Carousel autoplay>
                {this.state.arr.map((item,index)=>{
                    return <div key={index}>
                        <img src={item.pic} alt={item.name}/>
                    </div>;
                })}
                {/*<div><img src={require('../../static/images/1.jpg')} alt=""/></div>
                 <div><img src={require('../../static/images/2.jpg')} alt=""/></div>
                 <div><img src={require('../../static/images/5.jpg')} alt=""/></div>
                 <div><img src={require('../../static/images/3.jpg')} alt=""/></div>
                 <div><img src={require('../../static/images/4.jpg')} alt=""/></div>*/}
            </Carousel>):''}

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
            <div className="moreSeller">
                <h2>
                    附近商家
                </h2>
                <ul className="sellerList">
                        {this.state.data.map((item,index)=>{
                            return <li className="clearfix" key={index}>
                                <Link to={{pathname:'/home/list',
                        search:`?listId=${item.id}`}}>
                                    <img src={item.seller.avatar} alt=""/>
                                    <div className="sellerRight">
                                        <h3>{item.seller.name}</h3>
                            <span className="star">
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                            </span>
                                        <span>月售{item.seller.sellCount}</span>

                                <span>{item.seller.deliveryTime}min</span>
                                        <span>|</span>
                                        <span>{item.seller.description}</span>
                                        <br/>
                                        <span>起送价¥{item.seller.minPrice}</span>
                                        <span>|</span>
                                        <span>配送¥{item.seller.deliveryPrice}</span>
                                        <p>
                                            <img className="piao" src="http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png.webp" alt=""/>
                                            &nbsp;
                                            {item.seller.infos[0]}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                            {/*<li className="clearfix">
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
                             </li>*/}
                        })}

                    </ul>
                <Button onClick={this.loadMore} loading={this.state.isLoading}>加载更多数据</Button>
            </div>
        </div>;
    }
}

export default connect(state => ({...state.home}), action.home)(List);