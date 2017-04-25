const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_api_codelab', 'root', '999999999')

// User 모델 생성
const User = sequelize.define('user', {
    name: Sequelize.STRING
});

// InnerText 모델 생성
const InnerText = sequelize.define('inner_text', {
    text: Sequelize.TEXT,
    token: Sequelize.STRING
})

module.exports = {
    sequelize: sequelize,
    User: User,
    InnerText: InnerText
}