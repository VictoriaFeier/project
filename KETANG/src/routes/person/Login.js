import React from 'react';
import {connect} from 'react-redux';
import {Form, Icon, Input, Button, Checkbox, Modal} from 'antd';
import {Link} from 'react-router-dom';
import Register from './Register';
import md5 from 'blueimp-md5';
import {login} from '../../api/person';
import action from '../../store/action/index';

function loginFail() {
    const modal = Modal.error({
        title: '登录失败',
        content: '请稍后重新尝试!',
    });
    setTimeout(() => modal.destroy(), 2000);
}
class Nav extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    handleSubmit = ev => {
        ev.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let {userName, userPass} = values;
                userPass = md5(userPass);
                let result = await login({
                    name: userName,
                    password: userPass
                });
                if (parseFloat(result.code) === 0) {
                    this.props.queryBaseInfo();
                    this.props.queryPay();
                    this.props.history.go(-1);
                    return;
                }
                loginFail();
            }
        });
    };
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