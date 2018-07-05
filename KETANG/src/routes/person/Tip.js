import React from 'react';
import {connect} from 'react-redux';
import {Icon} from 'antd';
import {withRouter,Link} from 'react-router-dom';
import Login from './Login.js';
import Info from './Info.js';
import action from '../../store/action/index';
class Tip extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    async componentWillMount(){
        this.props.queryUserInfo();
    }

    render(){
            let {userInfo}=this.props;
        return <div className={'personCenter'}>
                    <div className={'personCenter-header'}>
                            <h3>
                                <Icon type="user" />
                                <Link className='pleaceLogin' to='/person/login'>请登录</Link>
                                <Link to='/person/info'> <Icon type="setting" /></Link>
                            </h3>
                       {/* {userInfo ? <span>{userInfo.name}</span> : <Link to={'/person/login'}>
                            <span>您还未登录！点此登录...</span>
                        </Link>}*/}
                    </div>
                <div className={'personCenter-collect'}>
                    <ul className={'collectList'}>
                        <li className={'person-myCollect'}>
                            <Icon type="book" />
                            <span>我的收藏</span>
                        </li>
                        <li className={'person-myCollect'}>
                            <Icon type="flag" />
                            <span>我的足迹</span>
                        </li>
                        <li className={'person-myCollect'}>
                            <Icon type="like-o" />
                            <span>我的评价</span>
                        </li>
                        <li className={'person-myCollect'}>
                            <Icon type="team" />
                            <span>我的好友</span>
                        </li>
                        <li className={'person-myCollect'}>
                            <Icon type="solution" />
                            <span>答谢记录</span>
                        </li>
                        <li className={'person-myCollect'}>
                            <Icon type="environment-o" />
                            <span>我的地址</span>
                        </li>
                    </ul>
                </div>
            <div className={'personCenter-asset'}>
                <div className={'personCenter-myAsset'}>
                    <h3>我的资产</h3>
                    <ul className={'person-myAsstList'}>
                        <li>
                            <Icon type="red-envelope" />
                            <span>红包</span>
                            <p>0个未使用</p>
                        </li>
                        <li>
                            <Icon type="printer" />
                            <span>代金券</span>
                            <p>0张未使用</p>
                        </li>
                        <li>
                            <Icon type="wallet" />
                            <span>我的钱包</span>
                            <p>签到赢现金</p>
                        </li>
                        <li>
                            <Icon type="pay-circle-o" />
                            <span>闪付</span>
                            <p>新客减8元</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={'personCenter-server'}>
                <div className={'personCenter-myServer'}>
                    <h3>我的服务</h3>
                    <ul className={'person-myServerList'}>
                        <li>
                            <Icon type="heart-o" />
                            <span>帮助与反馈</span>

                        </li>
                        <li>
                            <Icon type="customer-service" />
                            <span>客服中心</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/*refer*/}
            <div className={'personMore-refer'}>
                <div className={'moreRefer'}>
                    <h3>更多推荐</h3>
                    <ul className={'personMoreList'}>
                        <li>
                            <Icon type="dribbble" />
                            <span>集卡赢现金</span>
                        </li>
                        <li>
                            <Icon type="gift" />
                            <span>邀请有奖</span>
                        </li>
                        <li>
                            <Icon type="shop" />
                            <span>商家入驻</span>
                        </li>
                        <li>
                            <Icon type="dribbble" />
                            <span>骑手招募</span>
                        </li>
                        {/*  <li>
                            <Icon type="usergroup-add" />
                            <span>我要合作</span>
                        </li>*/}
                    </ul>
                </div>
            </div>
        </div>;
    }
}
export default withRouter(connect(state => ({...state.person}), action.person)(Tip));
