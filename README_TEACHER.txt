
# 教练段

##体验课预约

### 获取教练有效时间
/api/lesson/get_teacher_schedule_time

返回：
avaiable_time  教练所有的有效时间
lesson_time 教练已经被定课程
current_time 当前时间（用于日历显示）


### 提交预约课
/api/lesson/schedule_trial_lesson
参数：
user_name
user_mobile
user_ref
lesson_start
lesson_length

其它同
/api/lesson/schedule_lesson


### 我的会员

/api/lesson/teacher/my_vip
/api/lesson/teacher/my_trial_vip

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



## 添加会员

/api/teacher/add_vip

### 输入参数：
student_name
mobile
gender 性别 1男 2女 0默认未知
lesson_count
expired_day 有效天数
package_price 单位分 1分=0.01元

### 输出
student_id
package_id

### 错误返回：
21100, u"未登录,请先登录"
21101, u"请使用教练账号登陆"
21200, u"无法创建课程包"



## 课程日历

/api/teacher/my_schedule

### 输入参数
无

### 输出

{
    "date": "2017-10-01",
    "is_take_off": false,
    "lesson_list": [
        {lesson_obj1},{lesson_obj2}
    ]
}


##贡献统计
/api/teacher/statistics

### 输入参数
start_date:"2017-01-01"
end_date:"2017-02-01"

### 输出

{
    "finish_lesson_count":0,
    "finish_trial_lesson_count":0,
    "recommend_count":0,
    "convert_user_count":0,
    "vip_user_count":0
}



## 教练首页

/api/teacher/home

### 输入
无

### 输出

  {
        "teacher_info":{
            "user_logo":"",
            "user_name":one_user.name,
            "entry_time": one_teacher.entry_at,
            "value":one_teacher.value,
            "rating":"5.0"
        },
        "today_lesson":[],
        "day_2_lesson": [],
        "day_3_lesson": [],
        "statistics":{
            "complete_lesson_count":0，
            "complete_lesson_count_this_month": 0,
            "my_vip_amount":0，)
        }

    }


