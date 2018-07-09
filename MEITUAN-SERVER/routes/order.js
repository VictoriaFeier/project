const express = require('express'),
    route = express.Router(),
    {writeFile} = require('../utils/promiseFS'),
    ORDER_PATH = './json/order.json',
    utils = require('../utils/utils');

//=>提交购物车信息
route.post('/commit', (req, res) => {
    let personID = req.session.personID,//=>登录用户的ID
        cat = req.body;//=>传递的课程ID，我就是要把这个课程加入购物车
    /*let temp = req.body;
    console.log(temp);
    let temparr= Object.getOwnPropertyNames(temp);
    temparr.forEach(item=>{
        console.log(item+"-----"+temp[item]);
    })*/
    //courseID = parseFloat(courseID);

    //=>已经登录状态下，把信息直接存储到JSON中即可（用户在其它平台上登录，也可以从JSON中获取到数据，实现信息跨平台）
    if (personID) {
        cat = cat || {};
        if (Object.getOwnPropertyNames(cat).length === 0) return;
        utils.ADD_STORE(req, res, cat)
        res.send({code: 0, msg: 'OK!'});
        return;
    }

    //=>未登录状态下，临时存储到SESSION中(等到下一次登录成功，也要把SESSION中存储的信息，直接存储到文件中（并且清空SESSION中的信息）
    !req.session.cat ? req.session.cat = {} : null;
    req.session.cat = cat;
    res.send({code: 0, msg: 'OK!'});
});


route.post('/pay', (req, res) => {
    let {sellerID,sellerInfo} = req.body,
        personID = req.session.personID;
    
    if(personID){
        let orderInfo = {
            id: req.orderDATA.length === 0 ? 1 : (parseFloat(req.orderDATA[req.orderDATA.length - 1].id) + 1),//=>ID自增长
            personID,
            sellerID,
            sellerInfo,//须多一个配送时间
            state: 1,//=>默认是订单还没送达
            time: new Date().getTime()
        }
        
        req.orderDATA.push(orderInfo);
        writeFile(ORDER_PATH, req.orderDATA).then(()=>{
            res.send({code: 0, msg: 'OK!'});
        }).catch(()=>{
            res.send({code: 1, msg: 'NO!'});
        });
        return;
    }
    res.send({code: 1, msg: 'NO LOGIN!'});
});

route.get('/info', (req, res) => {
    let state = parseFloat(req.query.state) || 0,
        personID = parseFloat(req.session.personID);
    if(personID){
        let isWrite = false;
        let sellerInfos = [];
        req.orderDATA.forEach((item,index)=>{
            if(item.personID===personID){
                let remainderTime;
                if(item.state==1){
                    let deliveryTime = parseFloat(item.sellerInfo.deliveryTime || 0)*60*1000;
                    remainderTime = deliveryTime - (new Date().getTime()-item.time);
                    if(remainderTime<=0){
                        isWrite = true;
                        item.state=2;
                        req.orderDATA[index].state=2;
                    }
                }

                if(state==0||state==item.state){
                    let sellerInfo = {
                        sellerID:item.sellerID,
                        state:item.state,
                        time:item.time,
                        sellerInfo:item.sellerInfo
                    }
                    if(item.state==1){
                        sellerInfo.remainderTime=remainderTime;
                    }
                    sellerInfos.push(sellerInfo);
                }
                
            }
        });
        if(isWrite){
            writeFile(ORDER_PATH, req.orderDATA).then(()=>{
                res.send({
                    code: 0,
                    msg: 'OK!',
                    data:sellerInfos
                });
            }).catch(()=>{
                res.send({code: 1, msg: 'NO LOGIN!'});
            });
        }else{
            res.send({
                code: 0,
                msg: 'OK!',
                data:sellerInfos
            });
        }
        return;
    }
    res.send({code: 1, msg: 'NO LOGIN!'});
});


module.exports = route;