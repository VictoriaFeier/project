import * as TYPES from "../action-types";
import index from "./index";

let init_data = {
	detailData:[],
	cat:{
		1:{
			totalPrice:10,
			totalNum:6,
			type:[
				{name:"包子",num:10,unitPrice:3},
				{name:"稀饭",num:10,unitPrice:3}
			]
		},
		3:{
			totalPrice:10,
			totalNum:6,
			type:[
				{name:"包子",num:10,unitPrice:3}
			]
		}
	}
};

export default function detail(state=init_data,action){
	state=JSON.parse(JSON.stringify(state));
	switch(action.type){
		case TYPES.GET_DETAIL_DATA:
			let result=action.payload.data.goods;
            state.detailData=result;
            break;
		case TYPES.SET_DETAIL_CAR_DATA:
            state = {...state,cat:{...state.cat,[action.obj.id]:action.obj.info}};
			break;
        case TYPES.ADD_COUNT:
            state.cat.info.type.forEach((item,index)=>{
                if (item.name === action.foods.name) {
                    item.num=item.num+1
                }
            })
            break;
        case TYPES.REDUCE_COUNT:
            state.obj.info.type.forEach((item,index)=>{
                if (item.name === action.foods.name) {
                    state.cat[index] = action.foods.name
                }
            })
            break;
		case TYPES.DELETE_CAR_DATA:
            console.log(action.foods);
            state.cat.info.type=action.foods;
			break;

    }
	return state;
}