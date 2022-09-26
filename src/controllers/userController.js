const userController = {};
const User = require('../entities/UsersEntiti');
const userRepository = require('../repositories/userRepository')


userController.getUser = (req, res) => {
    const user = req.body.username
    const pass = req.body.password
    userRepository.getUser(user, pass)
        .then((users) => {
            //si devuelve mas de un registro
            if (users.rows.length == 0) {
                res.status(400).send('Not Found');
            }
            res.status(200).send('usuario encontrado');
        })
        .catch((error) => {
            res.status(500).send(error.stack);
        })
}

userController.create = (req, res) => {
    //capturar body request
    const newUser= req.body;
    let users = new User(null,newUser.username,newUser.email, newUser.password)
    //llamar metodo del repository y enviamos objeto modelo
    userRepository.create(users)
        .then((resp) => {
            if (resp.rows.length == 0) {
                res.status(400).send({});
            }
            //si inserto correctamente
            users.Id = resp.rows[0].id
            res.status(201).send(users);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}


module.exports = userController