const express = require('express');

const app = express();

// we expect to have to parse json from request bodies, 
// so we need the JSON middleware
app.use(express.json());

app.post('/cats', (req, res) => {
    
   return res.status(201).json()
  });

module.exports = app;