import React from 'react';
import {connect} from "react-redux";
import {Switch,Route,Redirect} from 'react-router-dom';
import action from "../store/action"
import {Link} from "react-router-dom";

/*IMPORT COMPONENT*/
import List from './home/List';
/*IMPORT LESS*/
import './home/index.less';

class Home extends React.Component{
		componentWillMount(){
			//获取数据
		}
    render(){
        return <section className="homeBox">
            <Switch>
                <Route path="/home" exact component={List}/>
            </Switch>
            {/*<Link to="/seller/1">测试跳转到详情页</Link>*/}
        </section>
    }
}
export default connect(state=>({...state.home}),action.home)(Home);