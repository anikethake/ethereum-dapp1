'use strict';

var routes = require('next-routes')(); //() means it returns a function

//define a new route mapping
//check for the patter we are looking for like campaign/0bbscbvGCXfg
//: signifies that it will be a wild card
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show/').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZixBLDBCQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0EsT0FDRSxBQURGLElBQ00sQUFETixrQkFDd0IsQUFEeEIsa0JBRUUsQUFGRixJQUVNLEFBRk4sdUJBRTZCLEFBRjdCLG9CQUdFLEFBSEYsSUFHTSxBQUhOLGdDQUdzQyxBQUh0Qyw2QkFJRSxBQUpGLElBSU0sQUFKTixvQ0FJMEMsQUFKMUM7O0FBTUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFyYWcvRGVza3RvcC9QYy1EaXIvcHJvZ3JhbW1pbmctYXNzZXRzL0Jsb2NrY2hhaW4vZXRoLXByb2ovZnVuZGluZyJ9