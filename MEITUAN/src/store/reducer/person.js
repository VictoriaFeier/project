import * as TYPES from '../action-types';

let INIT_STATE = {
    baseInfo: null,
    isLogin:false
};
export default function person(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    let payload = {};
    switch (action.type) {
        case TYPES.PERSON_QUERY_BASE:
            payload = action.payload;
            parseFloat(payload.code) === 0 ? state.baseInfo = payload.data : null;
            break;
        case TYPES.GET_PERSON_LOGIN_INFO:
            payload = action.payload;
            state.isLogin = (payload.code == 0 ? true : false);
            break;
        case TYPES.CHANGE_PERSON_LOGIN_INFO:
            state.isLogin = action.val;
    }
    return state;
};