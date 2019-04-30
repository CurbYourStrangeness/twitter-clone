const router = require('express').Router()
const User = require('../models/User')
const validateRegisterInput = require('../validation/register')

router.route('/register').post((req, res) => {
            const { isValid, errors } = validateRegisterInput(req.body)

        if (!isValid) {
           return res.status(404).json(errors)
        }

        return res.send('Ok!')

        User.findOne({ email: req.body.email })
        .then(user=> {
          if (user) {
               errors.email='Email was used!'
              }
           const newUser = new User({
                email: req.body.email,
                login: req.body.login
            })
      })

module.exports = router
