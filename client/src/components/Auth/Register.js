import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = {
   textField: {
   width: '100%',
   marginBottom: 5
 },
 btnBlock: {
  textAlign: 'center',
  marginBottom: 10,
  marginTop: 20 
 }
}


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
    const { classes } = this.props;

    return (
      <Paper style={{ padding: 15 }}>
       <form>
         <TextField 
             type="email"
             label="Email"
             className={classes.textField}
          />
         <TextField 
             label="Login"
             type="text"
             className={classes.textField}
          />
          <TextField
             label="Password"
             type="password"
             className={classes.textField}
          />
          <TextField
             label="Repeat Password"
             type="password"
             className={classes.textField}
          />
         <div className={classes.btnBlock}>
            <Button variant="outlined">
              Submit
            </Button>
         </div>
       </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(Register)
