import * as TYPES from "../action-types";
import {queryInfo,checkLogin} from '../../api/person';
let person = {
    queryBaseInfo() {
        return {
            type: TYPES.PERSON_QUERY_BASE,
            payload: queryInfo()
        };
    },
    getPersonLoginInfoAPI(){
        return {
            type: TYPES.GET_PERSON_LOGIN_INFO,
            payload: checkLogin()
        };
    },
    changePersonLoginInfo(val){
        return {
            type:TYPES.CHANGE_PERSON_LOGIN_INFO,
            val
        };
    }
};

export default person;
