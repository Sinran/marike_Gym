 

# 学院端接口

## 会员信息/注册信息

### 获取会员信息
/api/account/get_my_info

#### 返回
{
        "user_info": {
            "user_id":one_user.id,
            "user_name":one_user.name,
            "user_avatar":util_back_resource_url(one_user.avatar_qiniu_id),
            "user_gender":{1:u"男",2:u"女"}.get(one_user.gender,u"未知"),
        }
        "pacakge_info": {
            "package_id":one_package.id,
            "teacher_id":one_package.teacher_id,
            "lesson_count":one_package.lesson_count,
            "teacher_name": "{}".format(one_package.teacher_id)
        }

}

### 设置会员信息
/api/account/get_my_info

#### 输入参数
avatar_qiniu_id 上传头像，返回的第三方存储ID
name
mobile
gender
teacher_id


#### 返回
{"code":0,"msg":"OK"}


## 历史课程
/api/lesson/history

### 返回
{
       "data_list":[
       {
       	"lesson_start_at":"2017-11-11 11:00",
       	"lesson_status":3，
       	“teacher_id":1,
       	"teacher_name":"",
       	"lesson_index":13,
       	"teacher_comment":"教师的评论"	，
       	"student_comment":"学生的评论"	，
       },{}...
       ]
}


## 我的请假/请假记录

### 申请请假

/api/lesson/ask_for_leave

#### 说明
请假期间的课会被标记无效 

#### 输入
start_date
end_date

#### 返回
{"code":0,"msg":"OK"}


###请假历史

/api/lesson/leave_history

#### 返回
{
	"data_list":[
	{
		"start_date":"2011-11-11",
		"end_date":"2011-11-11",
		"leave_msg":"请假原因"
	}
	],
	"amount_day":10,
}



##爽约记录 /取消记录

### 爽约历史

/api/lesson/student_absent_history

#### 返回
{
	"data_list":[
	{
		"lesson_start_at":"2011-11-11 11:00:00",
		"lesson_end_at":"2011-11-11 12:00:00",
		"lesson_id":1,
	}
	],
	"amount_lesson":3,
}


### 取消历史记录
/api/lesson/canceld_history

#### 返回
{
	"data_list":[
	{
		"lesson_start_at":"2011-11-11 11:00:00",
		"lesson_end_at":"2011-11-11 12:00:00",
		"lesson_id":1,
	}
	],
	"amount_lesson":3,
}


## 登陆/注册

### 发送验证码
/api/account/send_captcha

#### 输入
mobile

#### 返回
{"code":0,"msg":"OK"}


## 登陆/注册
/api/account/login_mobile

#### 输入
mobile
captcha_code

#### 输出
{
	"code":0,"msg":"ok",
	{ "user_id"1,"y-token":"随机uuid，用户的登陆令牌"
	}
}


## 立即预约

### 获取教练有效时间
/api/teacher/available_time

#### 输入
teacher_id

#### 输出 (TODO 等待讨论)
{
	"available_list":
	[
		'2017-10-25':[0,1,5,6,7,9,10,]，
		‘2017-10-26’：[0-6,11-22],
		‘2017-10-27’：[00:00-06:30,11:00-22:10],
	]
}


### 预约
/api/lesson/schedule_lesson

#### 输入
teacher_id
start_time
package_id?

#### 输出 (TODO 等待讨论)
{
	"code":0,"msg":"ok"
}


## 评价

### 评分页面获取课程信息
/api/lesson/get_lesson_info_for_rating


#### 输入
lesson_id

#### 输出
{
	"code":0,"msg":"ok",
	"data":{
	"teacher_id":1,
	"teacher_name":"",
	"teacher_avatar":"",
	"average_score":"4.5",
	"lesson_start_at":"2011-11-11 11:00",
	"lesson_end_at":"2011-11-11 12:00"
	}
}


### 提交评价
/api/lesson/post_comment

#### 说明
课程正常结束，并且在一定时间内才能拼假

#### 输入
lesson_id
lesson_score
student_comment

#### 输出
{
	"code":0,"msg":"ok"
}



# 教练段


##体验课预约

### 获取教练有效时间
/api/teacher/available_time


### 提交预约课
/api/lesson/schedule_trial_lesson
新增参数：
user_name
user_mobile
user_ref

其它同
/api/lesson/schedule_lesson


### 我的会员

/api/teacher/my_vip
/api/teacher/my_trial_vip

### 返回
{
       "data_list":[
       {
       	"un_have_lesson":10,
			"lesson_amount":36
       	“student_id":1,
       	"student_name":"",
       	"student_rating":4.9,
			"package_created_at":"2011-11-11"
			"package_price":700000
			"aviable_time":"12个月",
			"expir_at":"2018-11-11"
			"ref":""
       },{}...
       ]
}

 
