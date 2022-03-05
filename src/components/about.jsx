import React, {Component} from 'react';
import Footer from './footer';
class About extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        const main = (
            <div className="my-5">
                <div class="container text-white">
                    <h1  >About us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum augue, iaculis eu mattis sit amet, posuere eget elit. Curabitur gravida sagittis lacus id vulputate. Sed cursus, orci nec maximus feugiat, augue dolor consectetur ipsum, vel vestibulum justo nunc a magna. Phasellus in rutrum turpis, at porttitor quam. Donec vel accumsan lorem. Suspendisse aliquam scelerisque arcu, id ullamcorper urna fermentum quis. Maecenas a commodo ipsum. Sed urna urna, accumsan nec justo et, laoreet ullamcorper massa.

                        Nulla vel porttitor lacus, eget malesuada ligula. Sed eget ligula nisi. Vivamus molestie non turpis sed fermentum. Cras sit amet bibendum tortor. Praesent efficitur maximus suscipit. Nulla laoreet fermentum eros non sollicitudin. Etiam urna ex, tempus ac facilisis cursus, pharetra sit amet nisi. Donec auctor malesuada risus, a pulvinar quam mattis at. Cras facilisis arcu quis dolor consequat blandit. Aenean consectetur libero eu dolor consectetur, eu fermentum neque mollis. Aliquam placerat luctus consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent ut cursus</p>
                </div>

                <Footer/>
            </div>
        )

        return (

             main

        );
    }
}

// Exporting the component
export default About;