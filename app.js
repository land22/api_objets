const express = require('express');

const app = express();
const stuffRoutes = require('./routes/stuff');
const userRoute = require('./routes/user');
const dotenv = require('dotenv').config();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

mongoose.connect(process.env.LINK,
      { useNewUrlParser:true,
        useUnifiedTopology:true })
.then(()=> console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff', stuffRoutes);

app.use('/api/auth', userRoute);




module.exports = app;