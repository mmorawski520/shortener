// Importing combination
import React, {Component} from 'react';

class Footer extends Component {


    render() {
        const style = {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            color: "white"
        };
        return (

            <footer className="bg-light text-center text-lg-start  fixed-bottom">

                <div className="text-center p-3" style={style}>
                    Just a Footer
                </div>

            </footer>
        );
    }
}

// Exporting the component
export default Footer;