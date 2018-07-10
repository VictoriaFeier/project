import axios from './index';

//获取详情页卖家详细信息
export function queryDetailSellerData(sellerID) {
    return axios.get('/seller/info?sellerID='+sellerID);
}

//提交购物车信息
export function submissionCatData(data) {
    return axios.post('/order/commit',data);
}

//提交订单信息
export function submissionOrderData(data) {
    //.....
}

export function getDeatilData() {
    return axios.get("/seller/info?sellerID=1");
}