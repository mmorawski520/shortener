
import React, {Component} from 'react';
import Loader from "react-loader-spinner";
import Footer from './footer';
class  Loaderr extends Component {

    constructor(props) {
        super(props);
        this.state = {isActive: true};
    }
    changeDisplay(bool) {
        this.setState({
            isActive: bool
        });
    }

    render() {
    const loader=(

        <div className="d-flex justify-content-center align-items-center my-5">loader<Loader
            type="ThreeDots"
            color="#EEEEEE"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
            <Footer/>
        </div>
    )
        return (
            this.state.isActive ? loader : null
        );
    }
}

// Exporting the component
export default Loaderr;