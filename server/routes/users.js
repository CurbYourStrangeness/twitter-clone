const router = require('express').Router()
const User = require('../models/User')
const validateRegisterInput = require('../validation/register')

router.route('/register').post((req, res) => {
  const { isValid, errors } = validateRegisterInput(req.body)

  if (!isValid) {
    return res.status(404).json(errors)
  }

  const { email, login } = req.body

  User.findOne({ email }).then(user => {
    if (user) {
      errors.email='Email was used!'
      return res.status(422).json('User exists.')
    }
   bcrypt.genSalt(10, function (err, salt) {
   bcrypt.hash(req.body.password, salt, function (err, hash) {
    const newUser = new User({
      email,
      login
    })

    newUser.save()
    res.status(201).send('New user created!')
    })
   })
  })
 })

module.exports = router
