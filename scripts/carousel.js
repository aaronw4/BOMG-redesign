// Type 'npx babel --watch src --out-dir . --presets react-app/prod'
// in the terminal if changes are made to the index.js file.
// This will update the website
'use strict';

const images = [
    'images/jlitwin.jpg',
    'images/rlitwin.png',
    'images/su.jpg'
]
// Dont forget to run code above when updating images

class Carousel extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            start: false
        }
    }

    render() {  
        var max = images.length;

        const changeImg = () => {
            if (this.state.count === max - 1) {
                this.setState({count: 0});                
            } else {
                var newNumber = Number(this.state.count) + 1;
                this.setState({count: newNumber});                
            } 
        }

        const timer = () => {
            if (this.state.start === false) {
            setInterval(changeImg, 2000); /* <-- Change time by changing number (2000 = 2 seconds)*/
            this.setState({start: true});
            }
        }

        return(
            <div className='carouselCont' onLoad={timer}>         
                <img src={images[this.state.count]} className='carouselImg'/>
            </div>
        );
    }
}

ReactDOM.render(<Carousel/>, document.getElementById('carousel'));