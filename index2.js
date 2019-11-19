// Type 'npx babel --watch src --out-dir . --presets react-app/prod'
// in the terminal if changes are made to the index.js file.
// This will update the website
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var images = ['images/jlitwin.jpg', 'images/rlitwin.png', 'images/su.jpg'];
// Dont forget to run code above when updating images

var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel() {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this));

        _this.state = {
            count: 0,
            start: false
        };
        return _this;
    }

    _createClass(Carousel, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var max = images.length;

            var changeImg = function changeImg() {
                if (_this2.state.count === max - 1) {
                    _this2.setState({ count: 0 });
                } else {
                    var newNumber = Number(_this2.state.count) + 1;
                    _this2.setState({ count: newNumber });
                }
            };

            var timer = function timer() {
                if (_this2.state.start === false) {
                    setInterval(changeImg, 2000); /* <-- Change time by changing number (2000 = 2 seconds)*/
                    _this2.setState({ start: true });
                }
            };

            return React.createElement(
                'div',
                { className: 'carouselCont', onLoad: timer },
                React.createElement('img', { src: images[this.state.count], className: 'carouselImg' })
            );
        }
    }]);

    return Carousel;
}(React.Component);

ReactDOM.render(React.createElement(Carousel, null), document.getElementById('carousel'));