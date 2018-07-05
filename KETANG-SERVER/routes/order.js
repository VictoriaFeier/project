const express = require('express'),
    route = express.Router(),
    {writeFile} = require('../utils/promiseFS'),
    PERSONAL_PATH = './json/personal.json',
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
        utils.ADD_STORE(req, res, cat).then(() => {
            res.send({code: 0, msg: 'OK!'});
        }).catch(() => {
            res.send({code: 1, msg: 'NO!'});
        });
        return;
    }

    //=>未登录状态下，临时存储到SESSION中(等到下一次登录成功，也要把SESSION中存储的信息，直接存储到文件中（并且清空SESSION中的信息）
    !req.session.cat ? req.session.cat = {} : null;
    req.session.cat = cat;
    res.send({code: 0, msg: 'OK!'});
});



module.exports = route;