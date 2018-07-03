import React from 'react';
import {connect} from "react-redux";
import action from "../store/action"
import {Link} from "react-router-dom";
class Home extends React.Component{
		componentWillMount(){
			//获取数据
		}
    render(){
        return <section className="homeBox">
        	首页
        	<Link to="/seller/1">测试跳转到详情页</Link>
        </section>
    }
}
export default connect(state=>({...state.home}),action.home)(Home);