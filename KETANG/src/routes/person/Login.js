import React from 'react';
import {connect} from 'react-redux';
import {Form, Icon, Input, Button, Checkbox, Modal} from 'antd';
import {Link} from 'react-router-dom';
import md5 from 'blueimp-md5';
import {login} from '../../api/person';
import action from '../../store/action/index';

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    loginFail = ()=> {
        const modal = Modal.error({
            title: '注册失败',
            content: '请稍后重新尝试!',
        });
        setTimeout(() => modal.destroy(), 3000);
    };
    render() {

        return <div className={'meiTuan-login'}>
            <div className={'login-header'}>
                <Link to='/person'> <Icon type="left"/></Link>
                <span className={'login'}>登录</span>
                <Link to='/person/register'><span className={'regi'}>注册</span></Link>

            </div>
            <div className={'login-body'}>
                <div className={'userNameBox'}>用户名：<input type="text" placeholder='请输入用户名'/></div>
                <div className={'passNameBox'}>密&nbsp;&nbsp;码：<input type="password" placeholder='请输入密码'/></div>
                <button onClick={this.toLogin}>登&nbsp;&nbsp;录</button>
            </div>

        </div>
    }

    toLogin = async ev => {
        ev.preventDefault();
        let target = ev.target,
            DIV_P = target.previousElementSibling,
            DIV_U = DIV_P.previousElementSibling,
            INPUT_P = DIV_P.firstElementChild,
            INPUT_U = DIV_U.firstElementChild,
            password = INPUT_P.value,
            userId = INPUT_U.value;

        if (password !== '' && userId !== '') {
            console.log(userId);
            console.log(password);
            password = md5(password);
            let result = await login({
                name: userId,
                password
            });

            if(result.code==0){
                console.log(result);
                //修改redux里的isLogin
                this.props.changePersonLoginInfo(true);
                this.props.history.go(-1);
                return;
                //this.props.history.push("/person");
            }
            this.loginFail();
        }

    }
}

export default connect(null,action.person)(Login);