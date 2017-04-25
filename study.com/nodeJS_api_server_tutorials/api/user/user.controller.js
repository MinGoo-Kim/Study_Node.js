// Routing Controller

const models = require('../../models');

// index(): GET /users
exports.index = (req, res) => {
    models.User.findAll()
        .then(users => res.json(users));
};

// show(): GET /users/:id
exports.show = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    }

    models.User.findOne({
        where: {
            id: id
        }
    }).then(user => {
        if (!user) {
            return res.status(404).json({error: 'No User'});
        }

        return res.json(user);
    });
};

// destroy(): DELETE /users/:id
exports.destroy = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    }

    models.User.destroy({
        where: {
            id: id
        }
    }).then(() => res.status(204).send());
};

// create(): POST /users
exports.create = (req, res) => {
    const name = req.body.name || '';
    if (!name.length) {
        return res.status(400).json({error: 'Incorrect name'});
    }

    models.User.create({
        name: name
    }).then((user) => res.status(201).json(user))
};

// update(): PUT /users/:id
exports.update = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    }

    const name = req.body.name || '';
    if (!name.length) {
        return res.status(400).json({error: 'Incorrect name'});
    }

    models.User.findOne({
        where: {
            id: id
        }
    }).then(user => {
        if (!user) {
            return res.status(404).json({error: 'No User'});
        }

        user.update({
          name: name
        }).then((user) => res.status(201).json(user))
    });
};

// 크롬확장프로그램 페이지 내용물 가져오기 테스트
exports.text = (req, res) => {
    console.log("in API");
    console.log(req.body.token)
    const text = req.body.text || '';
    const token = req.body.token || '';
    if (!text.length || !token.length) {
        return res.status(400).json({error: 'Incorrect text or token'});
    }

    models.InnerText.create({
        text: text,
        token: token
    }).then((inner_text) => res.status(201).json(inner_text))
};