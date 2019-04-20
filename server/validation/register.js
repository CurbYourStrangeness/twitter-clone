const Validator = require('validator')

module.exports = function (data){
    let errors = {}
   
    if (!Validator.isEmpty(data.email)){
       errors.email = 'Email field is required'
    }

    if (!Validator.isEmail(data.email)) {
       errors.email = 'Email is invalid'
    }
   
    if (Validator.isEmpty(data.login)) {
        errors.login = "Login field is required"
    }

    if (!Validator.isLength(data.login, { min: 6, max: 30 })) {
       errors.login = 'Login must be between 6 and 30 characters'
    } 
    
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Email field is required'
    } 

   if (Validator.isLength(data.password, { min: 6, max: 30 })){
       errors.password = 'Password must between 6 and 30 characters'
   }


  
}
   
