import * as TYPES from "../action-types";
import {queryHomeSwipeData} from "../../api/home.js";
import {queryHomeListData} from "../../api/home.js";
import detail from "./detail";
// import 

let home = {
	changeHomeIsLoading(val){
		return {
			type:TYPES.CHANGE_HOME_ISLOADING,
			val
		}
	},
	getHomeSwipeDataAPI(){
		return {
			type:TYPES.GET_HOME_SWIPE_DATA,
			payload:queryHomeSwipeData()
		};
	},
	getHomeListDataAPI(){
		//此处加载到之后，还可能需要通过session数据来写redux中的cat状态
		//加载成功后，做一些事。===>>> 要用到中间件

		return async function(dispatch,getState){
			/*pageData:{
				hasMore:true,
    		limit:10,
    		page:0,
    		isLoading:false
			}*/
			let {hasMore,limit,page,isLoading} = getState().home.pageData;
			if(!hasMore||isLoading) return;

			let params = {limit,page:(page+1)};
			//加载前，修改redux里的isLoading为true
			dispatch(home.changeHomeIsLoading(true));

			let res = await queryHomeListData(params);
			dispatch({
				type:TYPES.GET_HOME_LIST_DATA,
				payload:res
			});
			if(Object.getOwnPropertyNames(getState().detail.cat).length===0&&res.cat){
				dispatch(detail.setDetailCatAllDataAPI(res.cat));
			}
		}
	}
};

export default home;