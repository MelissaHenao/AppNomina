const userController = {};
const User = require('../entities/UsersEntiti');
const userRepository = require('../repositories/userRepository')


userController.getUser = (req, res) => {
    const user = req.query.username
    const pass = req.query.password
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

module.exports = userController