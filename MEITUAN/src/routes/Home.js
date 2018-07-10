import React from 'react';
import {connect} from "react-redux";
import action from "../store/action"
import {Link} from "react-router-dom";
import {Carousel,Icon,Button} from 'antd';
import "./home/index.less";
class Home extends React.Component{
		componentWillMount(){
			console.log("########### 首页重新加载了");
			if(!this.props.swipeData.length){
				this.dispatchGetHomeSwipeDataAPI();
			}
			if(!this.props.listData.length){
				this.dispatchGetHomeListDataAPI();
			}
		}
		dispatchGetHomeSwipeDataAPI = ()=>{
			console.log("########### 首页派发任务加载服务器swipe数据");
			this.props.getHomeSwipeDataAPI()
		}
		dispatchGetHomeListDataAPI = ()=>{
			console.log("########### 首页派发任务加载服务器list数据");
			this.props.getHomeListDataAPI()
		}
    render(){
    	console.log("########### Home组件render...");

        return <section className="homeBox">
        	<div className="listBox">
        		{/*轮播图*/}
            {this.props.swipeData.length? (<Carousel autoplay>
                {this.props.swipeData.map((item, index)=> {
                    return <div key={index}>
                        <img src={item.pic} alt={item.name}/>
                    </div>;
                })}
            </Carousel>) : ''}

            {/*分类*/}
            <ul className="sort">
                <li>
                    <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt=""/>
                    <p>美食</p>
                </li>
                <li>
                    <img src="http://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png" alt=""/>
                    <p>美团超市</p>
                </li>
                <li>
                    <img src="http://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png" alt=""/>
                    <p>生鲜果蔬</p>
                </li>
                <li>
                    <img src="http://p1.meituan.net/jungle/da9181f93dd2e11c5d74cf685470408f10016.png" alt=""/>
                    <p>美团专送</p>
                </li>
                <li>
                    <img src="http://p1.meituan.net/jungle/a2a306c5467aba7fac8d7410d161f8db9364.png" alt=""/>
                    <p>下午茶</p>
                </li>
                <li>
                    <img src="http://p0.meituan.net/jungle/58b60a312cf86f3a3afc4c96ff0e53438774.png" alt=""/>
                    <p>汉堡披萨</p>
                </li>
                <li>
                    <img src="http://p0.meituan.net/jungle/2ec76f8f4f21a4ec163adc7fccfa1a399428.png" alt=""/>
                    <p>小吃馆</p>
                </li>
                <li>
                    <img src="http://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png" alt=""/>
                    <p>家常菜</p>
                </li>
            </ul>

            {/*数据列表*/}
            <div className="moreSeller">
                <h2>
                    附近商家
                </h2>
                {this.props.listData.length ? (<div>
                    <ul className="sellerList">
                        {this.props.listData.map((item, index)=> {
                            return <li className="clearfix" key={index}>
                                <Link to={{pathname:`/seller/${item.id}`}}>
                                    <div className="sellerLeft"><img src={item.seller.avatar} alt=""/>
                                        {(this.props.cat[item.id]&&this.props.cat[item.id]["totalNum"]!=0)?<span>{this.props.cat[item.id]["totalNum"]}</span>:
                                            null}
                                    </div>

                                    <div className="sellerRight">
                                        <h3>{item.seller.name}</h3>
                            <span className="star">
                                <Icon type="star"/>
                                <Icon type="star"/>
                                <Icon type="star"/>
                                <Icon type="star"/>
                                <Icon type="star"/>
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
                                            <img className="piao"
                                                 src="http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png.webp"
                                                 alt=""/>
                                            &nbsp;
                                            {item.seller.infos[0]}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        })}
                    </ul>
                    <div className="noMore">
                        {!this.props.pageData.hasMore ?
                            <span>暂无更多数据</span> :
                            (<Button onClick={()=>{
                            	this.props.getHomeListDataAPI()
                            }} loading={this.props.pageData.isLoading}>加载更多数据</Button>)}</div>
                </div>) :
                    '暂无数据'}
            </div>


        	{/*首页
        	<br/>
        	轮播图数据
        	{this.props.swipeData.map((item,index)=>{
        		return `pic: ${item.pic}`
        	})}
        	<br/>
        	列表数据
        	{this.props.listData.map((item,index)=>{
        		return (
        			<div className="listDiv" key={index} onClick={()=>{
        				this.props.history.push(`/seller/${item.id}`)
        			}}>
        				{
        					this.props.cat[item.id]?
        					<span>{this.props.cat[item.id]["totalNum"]}</span>:
        					null
        				}
        				<p>id: {item.id}</p>
        				<p>name: {item.seller.name}</p>
        			</div>
        		)
        	})}*/}

        	</div>
        </section>
    }
}
let mapDispatchToProps = dispatch=>{
		return{
			getHomeSwipeDataAPI(){
				dispatch(action.home.getHomeSwipeDataAPI());
			},
			getHomeListDataAPI(){
				dispatch(action.home.getHomeListDataAPI());
			},
			setDetailCatAllDataAPI(cat){
				dispatch(action.detail.setDetailCatAllDataAPI(cat));
			}
		}
}
export default connect(state=>({...state.home,...state.detail}),mapDispatchToProps)(Home);