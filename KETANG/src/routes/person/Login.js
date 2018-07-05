import React from 'react';
import {connect} from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom';
import Register from './Register';

class Nav extends React.Component{
    constructor(props,context){
        super(props,context);
    }

    render(){

        return <div className={'meiTuan-login'}>
                <div className={'login-header'}>
                    <Link to='/person'> <Icon type="left" /></Link>
                    <span className={'login'}>登录</span>
                    <Link to='/person/register'><span className={'regi'}>注册</span></Link>

                </div>
            <div className={'login-body'}>
                <div className={'userNameBox'}>用户名：<input type="text" placeholder='请输入用户名'/></div>
                <div className={'passNameBox'}>密码：<input type="password"/></div>
                <button>登录</button>
            </div>

        </div>
    }
}
export default connect()(Nav);