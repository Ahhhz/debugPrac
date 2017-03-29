const express = require('express');
const app = express();

app.use('/', express.static('./public'));

app.get('/api/info', (request, response) => {

	response.header('Content-Type', 'application/json');
	response.send({
	    "message": "Hello, Wrold!",
	    "success": true
	});

});

app.listen(4000, () => {
	console.log('Listening Here 4K')
});
