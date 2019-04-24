const express = require('express');
const dotenv = require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');

//setup environment
require('dotenv').config();

//mongo db connect
mongoose.connect(process.env.MONGODB_URL, { useNewUrlparser: true }, err=> { 
      if(err)
       console.log(err);
   }
);

const app = express();

//run app
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
