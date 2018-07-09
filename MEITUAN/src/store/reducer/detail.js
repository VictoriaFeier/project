import * as TYPES from "../action-types";
/*
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
}*/
let init_data = {
	cat:{
		
	}
}
export default function detail(state=init_data,action){
	switch(action.type){
		case TYPES.SET_DETAIL_CAT_DATA:
			state = {...state,cat:{...state.cat,[action.obj.id]:action.obj.info}};
			break;
		case TYPES.SET_DETAIL_CAT_ALL_DATA:
			state = {...state,cat:action.cat};
			break;
	}
	return state;
}