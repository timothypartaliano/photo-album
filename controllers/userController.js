const { User } = require('../models')

class UserController {
    static register(req, res) {
        const { email, password, username } = req.body
        User.create({
            email,
            password,
            username
        })
            .then(result => {
                let response = {
                    id: result.id,
                    username: result.username,
                    email: result.email
                }
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(500).json(err)
                console.log(err);
            })
    }
}

module.exports = UserController