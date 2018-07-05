import * as TYPES from "../action-types";
import { queryInfo} from '../../api/person';
let person = {
    queryUserInfo() {
        return {
            type: TYPES.QUERY_USER_INFO,
            payload: queryInfo()
        };
    }
};

export default person;
