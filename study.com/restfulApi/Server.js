var express = require("express");
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var md5 = require('MD5'); // 암호화 모듈
var rest = require("./REST.js");
var app  = express();

function REST(){
    var self = this;
    self.connectMysql();
};

// MySQL 연동
REST.prototype.connectMysql = function() {
    var self = this;
    var pool      =    mysql.createPool({
        connectionLimit : 100,
        host     : 'localhost',
        user     : 'root',
        password : '999999999',
        database : 'node_test_db',
        debug    :  false
    });
    pool.getConnection(function(err,connection){
        if(err) {
            self.stop(err);
        } else {
            self.configureExpress(connection);
        }
    });
}

// API 설정
REST.prototype.configureExpress = function(connection) {
    var self = this;
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    var router = express.Router();
    app.use('/api', router);
    var rest_router = new rest(router,connection,md5);
    self.startServer();
}

// 서버 실행
REST.prototype.startServer = function() {
    app.listen(8000,function(){
        console.log("All right ! I am alive at Port 8000.");
    });
}

// DB 연동 실패
REST.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL n" + err);
    process.exit(1);
}

new REST();