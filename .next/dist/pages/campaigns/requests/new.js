'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/parag/Desktop/Pc-Dir/programming-assets/Blockchain/eth-proj/funding/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
	(0, _inherits3.default)(RequestNew, _Component);

	function RequestNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			description: '',
			recipient: '',
			loading: false,
			errorMessage: ''

		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, _this$state, description, value, recipient, accounts;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();
								campaign = (0, _campaign2.default)(_this.props.address);
								_this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

								_this.setState({ loading: true, errorMessage: '' });
								_context.prev = 4;
								_context.next = 7;
								return _web2.default.eth.getAccounts();

							case 7:
								accounts = _context.sent;
								_context.next = 10;
								return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({
									from: accounts[0]
								});

							case 10:

								_routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
								_context.next = 16;
								break;

							case 13:
								_context.prev = 13;
								_context.t0 = _context['catch'](4);

								_this.setState({ errorMessage: _context.t0.message });

							case 16:
								_this.setState({ loading: false });

							case 17:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[4, 13]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, 'Back`'))), _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, 'Create a new spending request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.description,
				onChange: function onChange(event) {
					return _this3.setState({ description: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, 'Value in ETH'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.recipient,
				onChange: function onChange(event) {
					return _this3.setState({ recipient: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'OOPS!', content: 'Only the manager of the campaign can create a spending request', __source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, 'Create')));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
				var address;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								address = props.query.address;
								return _context2.abrupt('return', { address: address });

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getInitialProps(_x2) {
				return _ref3.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBUSxBQUFNLEFBQVM7O0FBQy9CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQWM7O0FBQzdCLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFHYjs7Ozs7Ozs7Ozs7Ozs7O2tOQUVMLEE7VUFBUSxBQUNELEFBQ047Z0JBRk8sQUFFSyxBQUNaO2NBSE8sQUFHRyxBQUNWO1lBSk8sQUFJQyxBQUNSO2lCQUxPLEFBS00sQTs7QUFMTixBQUNQLFcsQUFhRDt3RkFBVyxpQkFBQSxBQUFNLE9BQU47OERBQUE7O2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFDQTtBQUZJLG1CQUVPLHdCQUFTLE1BQUEsQUFBSyxNQUZyQixBQUVPLEFBQW9CO3NCQUNLLE1BSGhDLEFBR3FDLE9BSHJDLEFBR0YsMEJBSEUsQUFHRixhQUhFLEFBR1csb0JBSFgsQUFHVyxPQUhYLEFBR2tCLHdCQUhsQixBQUdrQixBQUM1Qjs7Y0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVMsTUFBTSxjQUpuQixBQUlWLEFBQWMsQUFBNEI7d0JBSmhDO3dCQUFBO2VBTWMsY0FBQSxBQUFLLElBTm5CLEFBTWMsQUFBUzs7WUFBMUI7QUFORyw0QkFBQTt3QkFBQTt3QkFPSCxBQUFTLFFBQVQsQUFBaUIsY0FBakIsQUFBK0IsYUFBYSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FBN0QsQUFBNEMsQUFBdUIsVUFBbkUsQUFBNkUsV0FBN0UsQUFDTDtlQUNLLFNBVEcsQUFPSCxBQUNBLEFBQ0EsQUFBUztBQURULEFBQ0wsU0FGSzs7WUFLTjs7dUJBQUEsQUFBTywwQkFBd0IsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLFVBWmpDO3dCQUFBO0FBQUE7O1lBQUE7d0JBQUE7d0NBY1Q7O2NBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYSxZQWRuQixBQWNULEFBQWMsQUFBZ0I7O1lBRy9CO2NBQUEsQUFBSyxTQUFTLEVBQUMsU0FqQkwsQUFpQlYsQUFBYyxBQUFTOztZQWpCYjtZQUFBO3dCQUFBOztBQUFBOzZCQUFBO0E7Ozs7Ozs7Ozs7MkJBcUJGO2dCQUNSOzswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO2VBQUE7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQyx5Q0FBTyxTQUFSO2VBQUE7aUJBQUE7QUFBQTtNQUhILEFBQ0MsQUFDQyxBQUNDLEFBR0YsNEJBQUEsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFORCxBQU1DLEFBQ0Esa0RBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO2VBQW5EO2lCQUFBLEFBQ0E7QUFEQTtzQkFDQyxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsZ0NBQUEsQUFBQztXQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ2xCO2NBQVUseUJBQUE7WUFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLGFBQVksTUFBQSxBQUFNLE9BQTFDLEFBQVMsQUFBYyxBQUEwQjtBQUY1RDs7ZUFBQTtpQkFIRCxBQUNBLEFBRUMsQUFLRDtBQUxDO0FBQ0Msd0JBSUQsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLGlDQUFBLEFBQUM7V0FDTyxLQUFBLEFBQUssTUFEYixBQUNtQixBQUNsQjtjQUFVLHlCQUFBO1lBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFNLE1BQUEsQUFBTSxPQUFwQyxBQUFTLEFBQWMsQUFBb0I7QUFGdEQ7O2VBQUE7aUJBVkQsQUFRQSxBQUVDLEFBS0Q7QUFMQztBQUNDLHdCQUlELGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSw4QkFBQSxBQUFDO1dBQ08sS0FBQSxBQUFLLE1BRGIsQUFDbUIsQUFDbEI7Y0FBVSx5QkFBQTtZQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsV0FBVSxNQUFBLEFBQU0sT0FBeEMsQUFBUyxBQUFjLEFBQXdCO0FBRjFEOztlQUFBO2lCQWpCRCxBQWVBLEFBRUMsQUFLRDtBQUxDO0FBQ0Msd0JBSUYsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQTlCLEFBQXNDO2VBQXRDO2lCQXRCQSxBQXNCQSxBQUNBO0FBREE7dUJBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO2VBQXBDO2lCQUFBO0FBQUE7TUEvQkYsQUFDQyxBQU9DLEFBdUJBLEFBSUY7Ozs7OzBHQTlENEIsQTs7Ozs7WUFDckI7QSxrQkFBVyxNQUFNLEEsTUFBakIsQTswQ0FDQSxFQUFDLFNBQUQsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWJnQixBLEFBNEV6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BhcmFnL0Rlc2t0b3AvUGMtRGlyL3Byb2dyYW1taW5nLWFzc2V0cy9CbG9ja2NoYWluL2V0aC1wcm9qL2Z1bmRpbmcifQ==