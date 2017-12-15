
/**
 *用户登录
 * */
exports.userLogin = function(req, res) {
    console.log(req.body);
    let params = req.body;
    if (Object.is(params.userName, 'fujianbin')) {
        let data = {
            "status": 200,
            "success": true,
            "userType": 'coach',
            "mes": '登录成功'
        };
        res.json(data);
    } else {
        let data = {
            "status": 401,
            "success": true,
            "userType": 'user',
            "mes": '用户未注册'
        };
        res.json(data);
    }
};

/**
 *用户查询课程
 * */
exports.userSearchLesson = function(req, res) {
    console.log(req.body);

};

/**
 *取消课程
 * */
exports.cancelLesson = function(req, res) {
    console.log(req.body);

};
