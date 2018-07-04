import React from 'react';
import '../static/css/person.less';
import {Icon} from 'antd';
export default class Person extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className={'personCenter'}>
              <div className={'personCenter-header'}>
                    <h3>
                        <Icon type="user" />
                        <span>请登录</span>
                        <Icon type="right" />
                    </h3>
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



        </div>

    }
}
