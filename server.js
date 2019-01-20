const { createServer } = require('http');
const next = require('next');

//dev flag specifies whether we are running in production or development mode.
//ODE_ENV is a global env variable
const app = next({
	dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
	createServer(handler).listen(3000, (err) => {
		if(err) throw err;
		console.log('Ready on localhost:3000');
	});
});


//after this customize the package.json file
//scripts  