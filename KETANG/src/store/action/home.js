import * as TYPES from "../action-types";
import {queryList} from '../../api/home';
import detail from './detail';

let home = {
	getHomeSwipeDataAPI(){
		return {type:TYPES.GET_HOME_SWIPE_DATA};
	},
	getHomeListDataAPI(payload={}){
		let {limit=10,page=1}=payload;
		return async function (dispatch,getState) {
			let result = await queryList({
				limit,
				page
			});
			dispatch({
				type: TYPES.GET_HOME_LIST_DATA,
				result
			});
			if (Object.getOwnPropertyNames(getState().detail.cat).length === 0 && result.cat) {
				dispatch(detail.setDetailCatAllDataAPI(result.cat));
			}
		}
	}
};

export default home;