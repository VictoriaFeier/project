import axios from "./index";

export  function getOrderInfo(state) {
    return axios.get("/order/info",{
        params:{
            state
        }
    });
}