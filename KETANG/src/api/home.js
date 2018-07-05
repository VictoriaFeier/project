import axios from './index';

//=>获取轮播图数据
export function queryBanner(){
    return axios.get('seller/banner');
}

//=>获取商家列表信息
export function queryList(payload){

    return axios.get('seller/list',{
        params: payload
    });
}