import * as TYPES from "../action-types";

let init_data = {
	listData:[],
	swipeData:[],
	pageData:{
		hasMore:true,
    limit:10,
    page:0,
    isLoading:false
	}
	//还有分页相关的state数据
}
// action.payload.cat
export default function home(state=init_data,action){
	switch(action.type){
		case TYPES.GET_HOME_SWIPE_DATA:
			state = {...state,swipeData:action.payload.arr}
			break;
		case TYPES.GET_HOME_LIST_DATA:
			state = {
				...state,
				listData:[...state.listData,...action.payload.data],
				pageData:{
					...state.pageData,
					hasMore:action.payload.page<action.payload.total,
					isLoading:false,
					page:action.payload.page
				}
			}
			break;
		case TYPES.CHANGE_HOME_ISLOADING:
			state = {
				...state,
				pageData:{
					...state.pageData,
					isLoading:action.val
				}
			}
	}
	return state;
}