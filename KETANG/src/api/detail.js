import  axios from "./index";

export function getDeatilData() {
    return axios.get("/seller/info?sellerID=1");
}