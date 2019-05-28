const Validator = require('validator')

module.exports = function(data) {
  const { email, login, password, password2 } = data
  const errors = {}

  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required'
  }

  if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid'
  }

  if (Validator.isEmpty(login)) {
    errors.login = 'Login field is required'
  }

  if (!Validator.isLength(login, { min: 6, max: 30 })) {
    errors.login = 'Login must be between 6 and 30 characters'
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required'
  }

  if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password = 'Password must be between 6 and 30 characters'
  }

  if (Validator.isEmpty(password2)) {
    errors.password = 'Confirm password is required'
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
