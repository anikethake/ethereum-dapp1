const routes = require('next-routes')() //() means it returns a function

//define a new route mapping
//check for the patter we are looking for like campaign/0bbscbvGCXfg
//: signifies that it will be a wild card
routes
	.add('/campaigns/new', '/campaigns/new')
	.add('/campaigns/:address', '/campaigns/show/')
	.add('/campaigns/:address/requests', '/campaigns/requests/index')
	.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;

