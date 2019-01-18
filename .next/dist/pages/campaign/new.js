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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/parag/Desktop/Pc-Dir/programming-assets/Blockchain/eth-proj/funding/pages/campaign/new.js?entry';


var CampaignNew = function (_Component) {
	(0, _inherits3.default)(CampaignNew, _Component);

	function CampaignNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CampaignNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			minimumContribution: ''
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();
								//create a new campaign
								_context.next = 3;
								return _web2.default.eth.getAccounts();

							case 3:
								accounts = _context.sent;
								_context.next = 6;
								return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
									from: accounts[0]
								});

							case 6:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CampaignNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			}, 'Create a new campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
				label: 'Wei',
				labelPosition: 'right',
				value: this.state.minimumContribution,
				onChange: function onChange(event) {
					return _this3.setState({ minimumContribution: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			})), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, 'Create')));
		}
	}]);

	return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWduL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7Ozs7O29OQUNMLEE7d0IsQUFBUSxBQUNjO0FBRGQsQUFDUCxXLEFBR0Q7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQO1FBQUE7a0VBQUE7ZUFBQTt1Q0FBQTtZQUNWO2NBQUEsQUFBTSxBQUNOO0FBRlU7d0JBQUE7ZUFHYSxjQUFBLEFBQUssSUFIbEIsQUFHYSxBQUFTOztZQUExQjtBQUhJLDRCQUFBO3dCQUFBO2lDQUlKLEFBQVEsUUFBUixBQUNKLGVBQWUsTUFBQSxBQUFLLE1BRGhCLEFBQ3NCLHFCQUR0QixBQUVKO2VBQ0ssU0FQRyxBQUlKLEFBRUMsQUFDQSxBQUFTO0FBRFQsQUFDTCxTQUhJOztZQUpJO1lBQUE7d0JBQUE7O0FBQUE7Z0JBQUE7QTs7Ozs7Ozs7OzsyQkFXRjtnQkFDUjs7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLDBDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQjtlQUFyQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHlDQUFBLEFBQUM7V0FBRCxBQUNPLEFBQ047bUJBRkQsQUFFZSxBQUNkO1dBQU8sS0FBQSxBQUFLLE1BSGIsQUFHbUIsQUFDbEI7Y0FBVSx5QkFBQTtZQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMscUJBQW9CLE1BQUEsQUFBTSxPQUFsRCxBQUFTLEFBQWMsQUFBa0M7QUFKcEU7O2VBQUE7aUJBSEYsQUFDQyxBQUVDLEFBT0Q7QUFQQztBQUNDLHdCQU1GLEFBQUMseUNBQU8sU0FBUjtlQUFBO2lCQUFBO0FBQUE7TUFiSCxBQUNDLEFBRUMsQUFVQyxBQUlIOzs7OztBQWxDd0IsQSxBQXFDMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYXJhZy9EZXNrdG9wL1BjLURpci9wcm9ncmFtbWluZy1hc3NldHMvQmxvY2tjaGFpbi9ldGgtcHJvai9mdW5kaW5nIn0=