import React from 'react';

export default class Plus extends React.Component{
    render(){
        let {foodInfo,num,add,minus} = this.props;
        return (
            <div className="btn">
                {
                    num>0?
                    <button className="minusBtn" onClick={ev=>{
                        ev.stopPropagation();
                        this.props.minus(this.props.foodInfo);
                    }}>
                        -
                    </button>:
                    null
                }
                {
                    num>0?
                    <span>
                        &nbsp;
                        {num}
                        &nbsp;
                    </span>:
                    null
                }
                <button onClick={ev=>{
                        ev.stopPropagation();
                        this.props.add(this.props.foodInfo);
                    }}>
                    +
                    {this.props.children}
                </button>
            </div>
        )
    }
}
