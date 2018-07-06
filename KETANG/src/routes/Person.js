import React from 'react';
import './person/person.less';
import {connect} from 'react-redux';
import Tip from './person/Tip';
import Register from './person/Register';
import Info from './person/Info';
import Login from './person/Login';
import {Switch,Route,Redirect} from 'react-router-dom';
import action from "../store/action";
import {checkLogin} from '../api/person';
class Person extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getPersonLoginInfoAPI();
    }

    render(){
        return <section>
            <Switch>
                <Route path='/person/info' render={()=>{
                    //掉接口,是异步的，然而，这里不能是异步返回
                    return this.props.isLogin?<Info change={this.props.changePersonLoginInfo}/>:<Tip/>;
                }}/>

                <Route path='/person/login' component={Login}/>
                <Route path='/person/register' component={Register}/>
                {/*<Route path='/person/info' component={Info}/>*/}
                <Redirect from='/person' to="/person/info"/>
            </Switch>
        </section>
    }
}

export default connect(state=>({...state.person}),action.person)(Person);