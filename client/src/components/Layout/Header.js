import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
const styles = {
  root: {
     flexgrow: 1
    }
}

const Header = ({ classes }) => {
  return (
     <div className={classes.root}>
       <AppBar position="static">
           <Toolbar>
             <Typography variant="h6" color="inherit">
                Tweeters
             </Typography>
           </Toolbar>
       </AppBar>
     </div>
  )
}


export default withStyles(styles)(Header)
