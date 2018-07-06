import * as TYPES from "../action-types";

let init_data = {
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
	switch(action.type){
		
	}
	return state;
}