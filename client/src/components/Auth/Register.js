import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Register extends Component {
   constructor (props) {
      super(props) 
      this.state = {
        email:'',
        login: '',
        password: '',
        password2: ''
    }
  } 


   render() {
    return (
      <Paper>
       <form>
         <TextField 
             type="email"
             label="Email"
          />
         <TextField 
             label="Login"
             type="text"
          />
          <TextField
             label="Login"
             type="text"
          />
  <TextField
             label="Login"
             type="text"
          />
         <Button />
       </form>
      </Paper>
    )
  }
}

export default Register
