var request = require('request');
var schedule = require("node-schedule");
var connection = require('./mysql');
var mq = require('./mq');

var getCode = () => {
    setTimeout(() => {
        request('http://mma.qq.com/cgi-bin/im/online', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let a = body.toString();
                let b = a.split('online_resp(')[1];
                let c = b.split(')')[0];
                let data = JSON.parse(c);
                let qishu = getQiShu();
                let message = {
                    kaijiang: data.c,
                    qishu: qishu
                };
                mq.push(JSON.stringify(message));
                connection.query("INSERT INTO fenfencai(num,qishu) VALUES(?,?)", [data.c, qishu], function (err, result) {
                    if (err) throw err;
                })
            }
        })
    }, 2000)

}
var starts = () => {
    var date = new Date(2018, 7, 7, 21, 50, 1);
    schedule.scheduleJob(date, function () {
        dingshiqi();
    });
}

var dingshiqi = () => {
    mq.lianjie();
    var rule1 = new schedule.RecurrenceRule();
    var times1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
    rule1.minute = times1;
    schedule.scheduleJob(rule1, function () {
        getCode();
    })
}

var getQiShu = () => {
    let year = new Date().getFullYear();
    let month = (new Date().getMonth() + 1);
    let d = new Date().getDate();
    let start = parseInt(new Date(`${year}-${month}-${d} 0:0:0`).getTime() / 60000);
    let now = parseInt(new Date().getTime() / 60000);
    return now - start;
}

module.exports = dingshiqi;