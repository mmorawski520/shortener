import React, {Component} from 'react';
import Footer from './footer';

class Contact extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        const main = (
            <div className="my-5">
                <div class="container text-white">
                    <h1  >Contact</h1>
                    <p>contact stuff lmao</p>
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
export default Contact;