const express = require('express'); 
require('dotenv').config();
const routes = require('./routes');

const app = express();

// Middleware
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

app.listen(process.env.PORT, (error) =>{ 
	if(!error) 
		console.log("Server is successfully running, and app is listening on port " + process.env.PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
