import React from 'react';
import {connect} from 'react-redux';
import NavBottom from "../component/NavBottom";

class Person extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return <div>
            个人中心
            <NavBottom/>
        </div>
    }
}
export default connect()(Person);