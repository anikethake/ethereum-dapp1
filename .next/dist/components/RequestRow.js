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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/parag/Desktop/Pc-Dir/programming-assets/Blockchain/eth-proj/funding/components/RequestRow.js';


var RequestRow = function (_Component) {
	(0, _inherits3.default)(RequestRow, _Component);

	function RequestRow() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestRow);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							campaign = (0, _campaign2.default)(_this.props.address);
							_context.next = 3;
							return _web2.default.eth.getAccounts();

						case 3:
							accounts = _context.sent;
							_context.next = 6;
							return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this2);
		})), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							//create campaign instance
							campaign = (0, _campaign2.default)(_this.props.address);
							_context2.next = 3;
							return _web2.default.eth.getAccounts();

						case 3:
							accounts = _context2.sent;
							_context2.next = 6;
							return campaign.methods.finalizeRequest(_this.props.id).send({ from: accounts[0] });

						case 6:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this2);
		})), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestRow, [{
		key: 'render',
		value: function render() {
			var Row = _semanticUiReact.Table.Row,
			    Cell = _semanticUiReact.Table.Cell;
			var _props = this.props,
			    id = _props.id,
			    request = _props.request,
			    approversCount = _props.approversCount;

			var readyToFinalize = request.approvalCount > approversCount / 2;
			return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			}, _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, id), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, request.description), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, request.recipient), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, request.complete ? _react2.default.createElement(_semanticUiReact.Button, { color: 'green', __source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, 'Approved') : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, 'Approve')), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, request.complete ? _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', __source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, 'Finalized') : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, 'Finalize')));
		}
	}]);

	return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVE7O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7OztrTixBQUVMLHFGQUFZLG1CQUFBO2lCQUFBO2lFQUFBO2NBQUE7c0NBQUE7V0FDTDtBQURLLGtCQUNNLHdCQUFTLE1BQUEsQUFBSyxNQURwQixBQUNNLEFBQW9CO3VCQUQxQjtjQUVZLGNBQUEsQUFBSyxJQUZqQixBQUVZLEFBQVM7O1dBQTFCO0FBRkssMkJBQUE7dUJBQUE7Y0FHTCxTQUFBLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxBQUErQyxLQUFLLEVBQUMsTUFBSyxTQUhyRCxBQUdMLEFBQW9ELEFBQU0sQUFBUzs7V0FIOUQ7V0FBQTt1QkFBQTs7QUFBQTtlQUFBO0EsYUFNWixBLHNGQUFhLG9CQUFBO2lCQUFBO21FQUFBO2NBQUE7d0NBQUE7V0FDWjtBQUNNO0FBRk0sa0JBRUssd0JBQVMsTUFBQSxBQUFLLE1BRm5CLEFBRUssQUFBb0I7d0JBRnpCO2NBR1csY0FBQSxBQUFLLElBSGhCLEFBR1csQUFBUzs7V0FBMUI7QUFITSw0QkFBQTt3QkFBQTtjQUlOLFNBQUEsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0QsS0FBSyxFQUFDLE1BQUssU0FKckQsQUFJTixBQUFxRCxBQUFNLEFBQVM7O1dBSjlEO1dBQUE7d0JBQUE7O0FBQUE7Z0JBQUE7QTs7Ozs7MkJBT0o7T0FBQSxBQUNELE1BREMsQUFDWSx1QkFEWixBQUNEO09BREMsQUFDSSxPQURKLEFBQ1ksdUJBRFosQUFDSTtnQkFDMEIsS0FGOUIsQUFFbUM7T0FGbkMsQUFFRCxZQUZDLEFBRUQ7T0FGQyxBQUVHLGlCQUZILEFBRUc7T0FGSCxBQUVZLHdCQUZaLEFBRVksQUFDcEI7O09BQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQStELEFBQy9EOzBCQUNHLGNBQUQsT0FBSyxVQUFVLFFBQWYsQUFBdUIsVUFBVSxVQUFVLG1CQUFtQixDQUFDLFFBQS9ELEFBQXVFO2VBQXZFO2lCQUFBLEFBQ0M7QUFERDtJQUFBLGtCQUNFLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsTUFERCxBQUNDLEFBQ0EscUJBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUZELEFBRUMsQUFBZSxBQUNmLDhCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsb0JBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQUhuQyxBQUdDLEFBQU8sQUFBaUMsQUFDeEMsMkJBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUFPO0FBQVA7QUFBQSxjQUpELEFBSUMsQUFBZSxBQUNmLDRCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsY0FBQSxBQUFlLGVBQWdCLEtBTGhDLEFBS0MsQUFDQSxpQ0FBQyxjQUFEOztlQUFBO2lCQUFBLEFBQ0U7QUFERjtBQUFBLGNBQ0UsQUFBUSwyQkFBWSxBQUFDLHlDQUFPLE9BQVIsQUFBYztlQUFkO2lCQUFBO0FBQUE7SUFBQSxFQUFwQixBQUFvQiw4QkFJbkIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxPQUF0QixNQUE0QixTQUFTLEtBQXJDLEFBQTBDO2VBQTFDO2lCQUFBO0FBQUE7SUFBQSxFQVhKLEFBTUMsQUFLRyxBQU1ILDZCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFDRTtBQURGO0FBQUEsY0FDRSxBQUFRLDJCQUNULEFBQUMseUNBQU8sT0FBUixBQUFjO2VBQWQ7aUJBQUE7QUFBQTtJQUFBLEVBREMsQUFDRCwrQkFHQSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUM7ZUFBekM7aUJBQUE7QUFBQTtJQUFBLEVBdkJKLEFBQ0UsQUFpQkMsQUFLQyxBQVFKOzs7OztBQWxEdUIsQSxBQXFEekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFyYWcvRGVza3RvcC9QYy1EaXIvcHJvZ3JhbW1pbmctYXNzZXRzL0Jsb2NrY2hhaW4vZXRoLXByb2ovZnVuZGluZyJ9