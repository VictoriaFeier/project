import * as TYPES from "../action-types";
import {queryDetailSellerData} from "../../api/detail.js";

let detail = {
    setDetailCatDataAPI(obj){
        return {
            type:TYPES.SET_DETAIL_CAT_DATA,
            obj
        }
    },
    setDetailCatAllDataAPI(cat){
        return {
            type:TYPES.SET_DETAIL_CAT_ALL_DATA,
            cat
        }
    }



    /*
     getDetailSellerDataAPI(sellerID){
     return {
     type:TYPES.GET_DETAIL_SELLER_DATA,
     payload:queryDetailSellerData(sellerID)
     }
     }*/
};

export default detail;