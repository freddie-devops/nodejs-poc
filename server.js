'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<center><p><font size="3" color="green">Welcome to FreddieMac Spinnaker POC \n by Pricing Devops Team<\p></font></center>\n <center>This is a simple Node Js Application</center> \n <center>we'll be using a very basic example: a Hello World server written with Node.</center>\n <center>This is a Successful Response...:)</center>\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
