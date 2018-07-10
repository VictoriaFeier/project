import * as TYPES from "../action-types";
import {getOrderInfo} from "../../api/order"

let order = {
	getOrderData(payload){
	    return {
	        type:TYPES.GET_ORDER_INFO,
            payload:getOrderInfo()
        }
    }
};

export default order;