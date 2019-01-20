'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/parag/Desktop/Pc-Dir/programming-assets/Blockchain/eth-proj/funding/components/RequestRow.js';


var RequestRow = function (_Component) {
	(0, _inherits3.default)(RequestRow, _Component);

	function RequestRow() {
		(0, _classCallCheck3.default)(this, RequestRow);

		return (0, _possibleConstructorReturn3.default)(this, (RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).apply(this, arguments));
	}

	(0, _createClass3.default)(RequestRow, [{
		key: 'render',
		value: function render() {
			var Row = _semanticUiReact.Table.Row,
			    Cell = _semanticUiReact.Table.Cell;
			var _props = this.props,
			    id = _props.id,
			    request = _props.request;

			return _react2.default.createElement(Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			}, _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, id), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, request.description), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, request.value));
		}
	}]);

	return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiUmVxdWVzdFJvdyIsIlJvdyIsIkNlbGwiLCJwcm9wcyIsImlkIiwicmVxdWVzdCIsImRlc2NyaXB0aW9uIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFROzs7Ozs7O0ksQUFFVjs7Ozs7Ozs7Ozs7MkJBRUk7T0FBQSxBQUNELE1BREMsQUFDWSx1QkFEWixBQUNEO09BREMsQUFDSSxPQURKLEFBQ1ksdUJBRFosQUFDSTtnQkFDVSxLQUZkLEFBRW1CO09BRm5CLEFBRUQsWUFGQyxBQUVEO09BRkMsQUFFRyxpQkFGSCxBQUVHLEFBQ1g7OzBCQUNHLGNBQUQ7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDRSxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLE1BREQsQUFDQyxBQUNBLHFCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsY0FGRCxBQUVDLEFBQWUsQUFDZiw4QkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLGNBSkgsQUFDRSxBQUdDLEFBQWUsQUFHbEI7Ozs7O0FBWnVCLEEsQUFlekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFyYWcvRGVza3RvcC9QYy1EaXIvcHJvZ3JhbW1pbmctYXNzZXRzL0Jsb2NrY2hhaW4vZXRoLXByb2ovZnVuZGluZyJ9