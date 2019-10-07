'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Data = [{
    id: 'SDOCT',
    name: 'Spectral Domain OCT',
    image: '../images/oct.png',
    description: 'There is a revolutionary diagnostic technique that allows the ophthalmologist to see a detailed cross section of the layers of the retina and vitreous body. Disease is detected while the conventional view of the retina is still normal. Early glaucoma is revealed by a thinning of the nerve fiber layer, diabetic retinopathy by cystic thickening of the retina. Macular degeneration causes deformation to the deep layers of the retina. Abnormal membranes at the interface of the retina and vitreous are revealed before they distort vision.'
}, {
    id: 'FF',
    name: 'Floaters and Flashes',
    image: '../images/floaters.png',
    description: 'These are usually caused by the collapse of the vitreous body in mid life which is entirely normal. Rarely, it can tear the retina resulting in a vision threatening retinal detachment. When discovered before the retina detaches, these tears are easily sealed with laser light.'
}, {
    id: 'DE',
    name: 'Dry Eyes',
    image: '../images/dryeye.png',
    description: 'Very common, especially in women; artificial tears usually suffice. Causing the body\'s own tears to remain longer on the eye is also effective and convenient. Dissolvable plugs are placed in a small lower lid opening that normally drains away tears. This takes only a few seconds. If the symptoms of dryness, grittiness and irritation are improved, a non-dissolvable plug is placed later.'
}, {
    id: 'Cataract',
    name: 'Cataract',
    image: '../images/cataract.png',
    description: 'A frequent cause of glare, especially when driving at night. Modern cataract surgery is much less intrusive than in the past. Before deciding on surgery the need for glasses must be evaluated as well as the presence of macular degeneration. A significant cataract will usually cause vision to drop markedly when a glare tester is used in the office. Vision will improve when tested with a pinhole, indicating that behind the cataract lies a healthy retina and a good surgical result can be expected.</p>'
}, {
    id: 'DRD',
    name: 'Diabetic Retinal Damage',
    image: 'images/diabeticret.png',
    description: 'Public health doctors recommend that the retina of every diabetic be examined once a year and any significant bleeding that occurs be considered for laser treatment. Spectral domain OCT shows all the retinal layers in both cross section and in three dimensions enabling us to see previously invisible processes like subtle swelling of the retina. This technique is useful in macular degeneration, and glaucoma as well.</p>'
}, {
    id: 'Glaucoma',
    name: 'Glaucoma',
    image: '../images/vishnuglauc.png',
    description: 'Progressive damage to the optic nerve with loss of peripheral vision is the hallmark of this disease. Elevated eye pressure is often present but not always. Treatment involves lowering eye pressure with one or more of four classes of eye drops, using light from a tiny laser beam to repair the obstructed drains within the eye or, rarely, bypassing the obstructed drainage system surgically. Fortunately we have several optical methods to measure optic nerve damage and establish progression. Side vision is tested with white light, colored light or motion. Pressure is measured after an anesthetic drop. No air puff is used.'
}, {
    id: 'MD',
    name: 'Macular Degeneration',
    image: '../images/macdegen.png',
    description: 'More and more common as people age. Macular degeneration comes in two forms. Dry macular degeneration is a slow process which damages the retinal cells that give us sharp vision, especially for reading. Wet macular degeneration usually occurs suddenly with bleeding into a macula already afflicted with dry macular degeneration. Prevention involves <u>vitamin therapy</u> for dry macular degeneration. Wet macular degeneration requires use of medications that close off the vessels that are bleeding into the macula. Diagnosis is made by visualizing the macula by Spectral Domain OCT, which allows visualization of all retinal layers in cross section. '
}, {
    id: 'LVS',
    name: 'Low Vision Services',
    image: '../images/lowvision.png',
    description: 'A fine local resource for those who have poor vision even after the best glasses and medical treatment is the Low Vision Service at UC Berkeley. Patients with Macular Degeneration or any condition which cannot be corrected to their satisfaction should arrange for a low vision evaluation. Generally, devices are dispensed which enlarge images so that they fall on the part of the retina that still sees well. A simple example is a proper magnifier and good illumination. A more elaborate example is a video reading machine in which a book is laid under a camera and read on a TV screen. The art is in diminishing unwanted distortions and making sure the image is at the correct distance. The examination costs $274 and the devices are extra. This service is sometimes covered by insurance. There is a detailed form that is completed by the ophthalmologist who will make the referral.'
}];

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = { display: true };
        _this.click = _this.click.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'click',
        value: function click(e) {
            this.setState({ display: !this.state.display });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                Data.map(function (condition) {
                    return React.createElement(
                        'div',
                        { className: 'condCont', key: condition.id },
                        React.createElement(
                            'h3',
                            { className: 'title' },
                            condition.name
                        ),
                        React.createElement('img', { src: condition.image, className: 'condImg' }),
                        React.createElement(
                            'p',
                            { style: { display: _this2.state.display ? 'none' : 'block' }, className: 'description' },
                            condition.description
                        ),
                        React.createElement(
                            'button',
                            { onClick: _this2.click, className: 'condButton' },
                            _this2.state.display ? 'Show Description' : 'Hide Description'
                        )
                    );
                })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('common'));