import React from 'react';
import {connect} from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom';
class Register extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div className={'meiTuan-reg'}>
            <div className={'reg-header'}>
                <Link to='/person/login'> <Icon type="left" /></Link>
                <span className={'reg'}>注册</span>


            </div>
            <div className={'reg-body'}>
                <div className={'reg-userName'}>用户名：<input type="text" placeholder='请输入用户名'/></div>
                <div className={'reg-Email'}>邮箱：<input type="text" placeholder='请输入邮箱'/></div>
                <div className={'reg-phone'}>手机：<input type="text" placeholder='请输入手机号'/></div>
                <div className={'reg-password'}>密码：<input type="password" placeholder='请输入密码'/></div>
                <button>立即注册</button>
            </div>

        </div>
    }
}
export default connect()(Register);