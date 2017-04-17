// package.json으로 install한 express를 require를 통해 호출하고, express()를 사용해서 어플리케이션을 생성했습니다.
var express = require('express');
var app = express();

/*
경로를 받아들이는 부분은 app.get을 통해 설정할 수 있습니다.
app.get('경로', '실행할 Callback함수')로 설정해 줍니다.
이때, 함수의 인자값으로 받는 req, res는 node에서 제공하는 객체로써, req는 요청을, res는 응답을 해줍니다.
res.send()는 응답으로써 Hello World!라는 문자열을 보내도록 되어 있습니다.
*/
app.get('/', function (req, res) {
    // res.send('Hello Node.js With Express.js!');
    res.sendFile(__dirname + '/app/index.html')
});

// 서버 실행
var server = app.listen(8000, function () {
    console.log('Load Success!');
});

// MySQL 연동
var mysql = require('mysql');
var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '999999999',
    database: 'node_test_db'
});

// 쿼리 실행
dbConnection.query('select * from member', function (err, rows, fields) {
    console.log(rows);
});

var id = 2; // 쿼리에 변수 사용
dbConnection.query('select * from member where id=?', [id] , function (err, rows, fields) {
    console.log("--------------------------------------------------------------------")
    console.log(rows);
});

// Simple REST API - GET
app.get('/test_get/:id', function (req, res) {
    var id = req.params.id;
    dbConnection.query('select * from member where id=?', [id], function (err, rows, fields) {
        res.json(rows);
    })
})

// 요청 바디 설정 - 인코딩, JSON 변환
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// POST
app.post('/test_post', function (req, res) {
    var name = req.body.name,
        gender = req.body.gender,
        age = req.body.age;

    console.log(name);
    console.log(gender);
    console.log(age);

    dbConnection.query('insert into member(name, gender, age) values(?, ?, ?)', [name, gender, age], function (err, rows,fields) {
        res.json(err);
    })
});

// PUT
app.put('/test_put/:id', function (req, res) {
    var id = req.params.id;
    var name = req.body.name,
        gender = req.body.gender,
        age = req.body.age;

    console.log(name);
    console.log(gender);
    console.log(age);

    dbConnection.query('update member set name=?, gender=?, age=? where id=?', [name, gender, age, id], function (err, rows,fields) {
        res.json(err);
    })
});