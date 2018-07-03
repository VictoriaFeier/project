import * as TYPES from "../action-types";

let init_data = {
	listData:[],
	swipeData:[]
}
export default function home(state=init_data,action){
	switch(action.type){
		case TYPES.GET_HOME_SWIPE_DATA:
			
			break;
		case TYPES.GET_HOME_LIST_DATA:

			break;
	}
	return state;
}