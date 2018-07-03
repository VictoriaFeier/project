import * as TYPES from "../action-types";

let home = {
	getHomeSwipeDataAPI(){
		return {type:TYPES.GET_HOME_SWIPE_DATA};
	},
	getHomeListDataAPI(){
		return {type:TYPES.GET_HOME_LIST_DATA};
	}
};

export default home;