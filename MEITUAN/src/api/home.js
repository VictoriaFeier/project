import axios from './index';

//获取首页轮播图信息
export function queryHomeSwipeData() {
    return axios.get('/seller/banner');
}

//获取首页列表信息
export function queryHomeListData(params) {
    return axios.get('/seller/list',{params});
}