
/**
 *用户登录
 * */
exports.userLogin = function(req, res) {
    console.log(req.body);
    let params = req.body;
    if (Object.is(params.userName, 'zhuyawei')) {
        let data = {
            "status": 200,
            "success": true,
            "mes": '登录成功'
        };
        res.json(data)
    } else {
        let data = {
            "status": 401,
            "success": true,
            "mes": '用户未注册'
        };
        res.json(data)
    }
    icon-shangchuan-tianchong
    icon-shangchuan
};

/**
 *用户查询课程
 * */
exports.userSearchLesson = function(req, res) {
    console.log(req.body);
    let params = req.body;
    if (Object.is(params.userName, 'zhuyawei')) {
        let data = {
            "status": 200,
            "success": true,
            "mes": '登录成功'
        };
        res.json(data)
    } else {
        let data = {
            "status": 401,
            "success": true,
            "mes": '用户未注册'
        };
        res.json(data)
    }

};

/**
 *取消课程
 * */
exports.cancelLesson = function(req, res) {
    console.log(req.body);
    let params = req.body;
    if (Object.is(params.userName, 'zhuyawei')) {
        let data = {
            "status": 200,
            "success": true,
            "lessonList": [
                {name: '瑜伽', number: 5},
                {name: '锻炼', number: 6},
                {name: '瘦身', number: 7},
                {name: '压腿', number: 8},
                {name: '拉伸', number: 9}
            ]
        };
        res.json(data)
    } else {
        let data = {
            "status": 401,
            "success": true,
            "mes": '用户未注册'
        };
        res.json(data)
    }

};
