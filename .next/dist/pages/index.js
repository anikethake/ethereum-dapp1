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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/parag/Desktop/Pc-Dir/programming-assets/Blockchain/eth-proj/funding/pages/index.js?entry';
//.. means up one dir


var CampaignIndex = function (_Component) {
	(0, _inherits3.default)(CampaignIndex, _Component);

	function CampaignIndex() {
		(0, _classCallCheck3.default)(this, CampaignIndex);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignIndex, [{
		key: 'renderCampaigns',
		value: function renderCampaigns() {
			//iterate through the address
			var items = this.props.campaigns.map(function (address) {
				return {
					header: address,
					description: _react2.default.createElement('a', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 20
						}
					}, 'View Campaign'),
					fluid: true
				};
			});
			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			});
		}

		// async componentDidMount() {
		// 	//const campaigns = await factory.methods.getDeployedCampaigns().call();
		// 	console.log(campaigns);
		// }

		//JSX

	}, {
		key: 'render',
		value: function render() {
			//return <div>Address of the campaign-> { this.props.campaigns[0] }</div>;
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement('h2', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, 'Open Campaigns'), _react2.default.createElement(_semanticUiReact.Button, { floated: 'right',
				content: 'Create Campaign',
				icon: 'add circle',
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}), this.renderCampaigns()));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var campaigns;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _factory2.default.methods.getDeployedCampaigns().call();

							case 2:
								campaigns = _context.sent;
								return _context.abrupt('return', { campaigns: campaigns });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJMYXlvdXQiLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBRWYsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7Ozs7OztBQUZuQjs7O0lBS00sQTs7Ozs7Ozs7Ozs7b0NBT2EsQUFDakI7QUFDQTtPQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQ2pEOzthQUFPLEFBQ0UsQUFDUjtrQ0FBYSxjQUFBOztpQkFBQTttQkFBQTtBQUFBO0FBQUEsTUFBQSxFQUZQLEFBRU8sQUFDYjtZQUhELEFBQU8sQUFHQSxBQUVQO0FBTE8sQUFDTjtBQUZGLEFBQWMsQUFPZCxJQVBjO3dDQU9QLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7ZUFBbkI7aUJBQVAsQUFBTyxBQUNQO0FBRE87SUFBQTtBQUdSOztBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7MkJBQ1MsQUFDUjtBQUNBOzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQTtBQURBO0FBQUEsSUFBQSxrQkFDQSxjQUFBOztlQUFBO2lCQUFBLEFBRUE7QUFGQTtBQUFBLHNCQUVBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BRkEsQUFFQSxBQUNBLG1DQUFBLEFBQUMseUNBQU8sU0FBUixBQUFnQixBQUNoQjthQURBLEFBQ1EsQUFDUjtVQUZBLEFBRUssQUFDTDthQUhBOztlQUFBO2lCQUhBLEFBR0EsQUFLRTtBQUxGO1lBTEQsQUFDQyxBQUNBLEFBUUUsQUFBSyxBQUlQOzs7Ozs7Ozs7Ozs7ZUF0Q3VCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQUFBdUMsQTs7WUFBekQ7QTt5Q0FDRSxFQUFFLFdBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUprQixBLEFBNEMzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFyYWcvRGVza3RvcC9QYy1EaXIvcHJvZ3JhbW1pbmctYXNzZXRzL0Jsb2NrY2hhaW4vZXRoLXByb2ovZnVuZGluZyJ9