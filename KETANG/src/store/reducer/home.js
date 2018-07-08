import * as TYPES from "../action-types";

let init_data = {
    swipeData: [],
    listData: {
        total: 1,
        limit: 10,
        page: 1,
        data: []
    }
};
export default function home(state = init_data, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        //=>获取轮播图数据
        case TYPES.GET_HOME_SWIPE_DATA:

            break;

        //=>获取商家列表信息
        case TYPES.GET_HOME_LIST_DATA:
            let {result}=action;
            if(parseFloat(result.code)===0){
                state.listData.total = parseFloat(result.total);
                state.listData.limit = parseFloat(result.limit);
                state.listData.page = parseFloat(result.page);
            }
            break;
    }
    return state;
};