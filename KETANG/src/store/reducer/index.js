import {combineReducers} from "redux";
import home from "./home";
import detail from "./detail";
import order from "./order";
import person from "./person";

export default combineReducers({
	home,
	detail,
	order,
	person
});