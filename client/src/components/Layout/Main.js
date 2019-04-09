import React, { Component } from 'react' 
import Grid from '@material-ui/core/Grid'
import Header from './Header'

const Main = ({ children }) => (
   <div>
     <Header />
     <Grid container>
         <Grid item>
             {children}
          </Grid>
     </Grid>
   </div>
)


export default Main
