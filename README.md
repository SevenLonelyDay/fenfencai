### 这是一个查询分分彩的项目

- 使用的技术
> 定时任务 `npm i node-schedule --save`
activeMQ stomp推送消息 `npm i stomp-client --save`
mysql 存储开奖信息 `npm i mysql --save`
http请求接口信息 `npm i request --save`

- 获取开奖信息接口

>get请求 `http://mma.qq.com/cgi-bin/im/online`
请求回来内容`online_resp({"c":309320807,"ec":0,"h":321328693})`
