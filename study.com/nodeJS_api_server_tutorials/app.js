const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!\n');
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');

    require('./models').sequelize.sync({force: true}) // 테이블 생성
        .then(() => {
            console.log('Databases sync');
        });
});

app.use('/api', require('./api/user'));