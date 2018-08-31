var Stomp = require('stomp-client');
var destination = '/topic/myTopic';
var client = new Stomp('127.0.0.1', 61613, 'zkquser', 'zkquser');


var lianjie = () => {
    client.connect(function (sessionId) {
        // client.subscribe(destination, function (body, headers) {
        //     console.log('From MQ:', body);
        // });
    });
}
var push = (message) => {
    client.publish(destination, message);
}

var mq = {
    push: push,
    lianjie: lianjie
}

module.exports = mq;