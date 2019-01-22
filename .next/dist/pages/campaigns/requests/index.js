'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/parag/Desktop/Pc-Dir/programming-assets/Blockchain/eth-proj/funding/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
	(0, _inherits3.default)(RequestIndex, _Component);

	function RequestIndex() {
		(0, _classCallCheck3.default)(this, RequestIndex);

		return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(RequestIndex, [{
		key: 'renderRow',

		//iterate over row of requests
		value: function renderRow() {
			var _this2 = this;

			return this.props.requests.map(function (request, index) {
				return _react2.default.createElement(_RequestRow2.default, {
					key: index,
					id: index,
					request: request,
					address: _this2.props.address,
					approversCount: _this2.props.approversCount,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 33
					}
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var Header = _semanticUiReact.Table.Header,
			    Row = _semanticUiReact.Table.Row,
			    HeaderCell = _semanticUiReact.Table.HeaderCell,
			    Body = _semanticUiReact.Table.Body;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, ' Pending Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, 'Create a new spending request`'))), _react2.default.createElement(_semanticUiReact.Table, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement(Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement(Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, 'ID'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, 'Description'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, 'Amount'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, 'Recipient'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, 'Approval Count'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, 'Approve'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, 'Finalize'))), _react2.default.createElement(Body, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, this.renderRow())), _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, 'Found ', this.props.requestCount, ' requests'));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var address, campaign, requestCount, approversCount, requests;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								address = props.query.address;
								//get total number of requests

								campaign = (0, _campaign2.default)(address);
								_context.next = 4;
								return campaign.methods.getRequestCount().call();

							case 4:
								requestCount = _context.sent;
								_context.next = 7;
								return campaign.methods.approversCount().call();

							case 7:
								approversCount = _context.sent;
								_context.next = 10;
								return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
									return campaign.methods.requests(index).call();
								}));

							case 10:
								requests = _context.sent;
								return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvdyIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdENvdW50IiwiY2FsbCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVE7O0FBQ2hCLEFBQVEsQUFBVzs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7OztPQXNCTDs7OzhCQUNZO2dCQUNYOztlQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDbEQ7MkJBQU8sQUFBQztVQUFELEFBQ0QsQUFDTDtTQUZNLEFBRUYsQUFDSjtjQUhNLEFBR0csQUFDVDtjQUFTLE9BQUEsQUFBSyxNQUpSLEFBSWMsQUFDcEI7cUJBQWtCLE9BQUEsQUFBSyxNQUxqQixBQUt1Qjs7Z0JBTHZCO2tCQUFQLEFBQU8sQUFPUDtBQVBPO0FBQ04sS0FETTtBQURSLEFBQU8sQUFTUCxJQVRPOzs7OzJCQVdDO09BQUEsQUFDRCxTQURDLEFBQ2dDLHVCQURoQyxBQUNEO09BREMsQUFDTyxNQURQLEFBQ2dDLHVCQURoQyxBQUNPO09BRFAsQUFDWSxhQURaLEFBQ2dDLHVCQURoQyxBQUNZO09BRFosQUFDd0IsT0FEeEIsQUFDZ0MsdUJBRGhDLEFBQ3dCLEFBRWhDOzswQkFDRSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0Esc0NBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO2VBQUE7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQWhCLEFBQXdCLFNBQVEsT0FBTyxFQUFDLGNBQXhDLEFBQXVDLEFBQWM7ZUFBckQ7aUJBQUE7QUFBQTtNQUpILEFBRUMsQUFDQyxBQUNDLEFBR0YscURBQUEsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFEOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQ7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsdUJBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFGRCxBQUVDLEFBQ0EsZ0NBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFIRCxBQUdDLEFBQ0EsMkJBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFKRCxBQUlDLEFBQ0EsOEJBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFMRCxBQUtDLEFBQ0EsbUNBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFORCxBQU1DLEFBQ0EsNEJBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFUSCxBQUNDLEFBQ0MsQUFPQyxBQUdGLCtCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFDRTtBQURGO0FBQUEsV0FuQkYsQUFPQyxBQVlDLEFBQ0UsQUFBSyxBQUdSLCtCQUFBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BQVksZUFBQSxBQUFLLE1BQWpCLEFBQXVCLGNBeEIxQixBQUNFLEFBdUJDLEFBR0g7Ozs7O3dHQS9ENEIsQTs7Ozs7WUFDckI7QSxrQkFBVyxNQUFNLEEsTUFBakIsQSxBQUNQO0FBQ007O0EsbUJBQVcsd0JBQUEsQSxBQUFTOztlQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLGtCQUFqQixBQUFtQyxBOztZQUF4RDtBOztlQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQkFBakIsQUFBa0MsQTs7WUFBekQ7QTs7aUNBR2lCLEFBQVEsVUFDdkIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUNDLE9BREQsQUFFQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBVSxBQUN2QjtnQkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQ3hDO0FBTG9CLEFBQ3JCLEEsU0FBQSxDQURxQjs7WUFBakI7QTt5Q0FTQyxFQUFDLFNBQUQsU0FBVSxVQUFWLFVBQW9CLGNBQXBCLGNBQWtDLGdCQUFsQyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbkJrQixBLEFBb0UzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFyYWcvRGVza3RvcC9QYy1EaXIvcHJvZ3JhbW1pbmctYXNzZXRzL0Jsb2NrY2hhaW4vZXRoLXByb2ovZnVuZGluZyJ9