const { comparePassword } = require('../helpers/bcrypt')
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

    static Login(req, res) {
        const { email, password } = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(user => {
                if (!user) {
                    throw {
                        name: "User Login Error",
                        devMessage: `User with email ${email} not found`
                    }
                }
                const isCorrect = comparePassword(password, user.password)
                if (!isCorrect) {
                    throw {
                        name: "User Login Error",
                        devMessage: `User's password with email ${email} does not match`
                    }
                }
                let response = {
                    id: user.id,
                    username: user.username,
                    email: user.email
                }
                return res.status(200).json(response)
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }
}

module.exports = UserController