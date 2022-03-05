import React, {Component} from 'react';
import Footer from './footer';
import Loaderr from './loader';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {link: '',
                      isActive: true,

        };
    }

    changeHandler = (event) => {
        this.setState({link: event.target.value});
    }
    enterHandler = (event) => {
        if (event.code == "Enter" || event.code === "NumpadEnter") {
            console.log("submitted" + this.state.link);
            this.setState({link: event.target.value, isActive: false});

        }
    }
    submitHandler = (event) => {
        console.log("submited" + this.state.link)
        this.setState({link: event.target.value, isActive: false});
    }

    render() {
        const style = {
            height: "4em",
            padding: "10px",
        };
        const main = (
            <div className="my-5">
                <div className="text-white text-center my-5">
                    <div className="container my-5">
                        <h1>Paste your link here </h1>
                        <div className="mb-3">
                            <label htmlFor="link" className="form-label">yes here, I mean below</label>
                            <input type="text" className="form-control" id="link"
                                   placeholder="Paste your link here" onKeyDown={this.enterHandler}
                                   onChange={this.changeHandler}></input>
                            <button className="btn btn-outline-light btn-lg my-5" onClick={this.submitHandler}>Generate
                                your link
                            </button>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
        )
        const loader=(
            <Loaderr/>
        )
        return (

            this.state.isActive ? main : loader

        );
    }
}

// Exporting the component
export default Main;