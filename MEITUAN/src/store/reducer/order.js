import * as TYPES from "../action-types";

let init_data = {
	orderInfo:[]
}
export default function order(state=init_data,action){
	state=JSON.parse(JSON.stringify(state));
	switch(action.type){
		case TYPES.GET_ORDER_INFO:
			state.orderInfo=action.payload;
			break;
    }
	return state;
}