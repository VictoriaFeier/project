import * as TYPES from "../action-types";
import {queryList} from '../../api/home';

let home = {
	getHomeSwipeDataAPI(){
		return {type:TYPES.GET_HOME_SWIPE_DATA};
	},
	getHomeListDataAPI(payload={}){
		let {limit=10,page=1,flag='push'}=payload;
		return async dispatch => {
			let result = await queryList({
				limit,
				page,
				flag
			});
			dispatch({
				type:TYPES.GET_HOME_LIST_DATA,
				result,
				flag
			});
		}
	}
};

export default home;