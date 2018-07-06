import * as TYPES from "../action-types";
import {getDeatilData} from "../../api/detail";

let detail = {
	getDetailDataApi(){
	    return {
	        type:TYPES.GET_DETAIL_DATA,
            payload:getDeatilData()
        }
    },
    addGoods (foods) {
	    return {
	        type:TYPES.ADD_COUNT,
            foods
        }
    },
    reduceGoods (foods) {
	    return {
	        type:TYPES.REDUCE_COUNT,
            foods
        }
    },
    deleteGoods (foods) {
	    return {
	        type:TYPES.DELETE_CAR_DATA,
            foods:[]
        }
    },
    getDetailCar(obj){
	    return {
	        type:TYPES.SET_DETAIL_CAR_DATA,
            obj
        }
    }

};

export default detail;