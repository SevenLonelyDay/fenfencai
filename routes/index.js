var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1:3306',
  user: 'admin',
  password: 'Zkq930913.',
  database: 'location'
});

/* GET home page. */
router.get('/', function (req, res, next) {
  var data = req.query || req.params;
  if (data) {
    connection.query("INSERT INTO location(lat,lng,city,addr,adcode,accuracy,module,nation,province,type) VALUES(?,?,?,?,?,?,?,?,?,?)", [data.lat, data.lng, data.city, data.addr, data.adcode, data.accuracy, data.module, data.nation, data.province, data.type], function (err, result) {
      if (err) throw err;
    })
  }

  res.json({
    title: 'beijing'
  })
  // res.render('index', { title: 'Express' });
});


module.exports = router;