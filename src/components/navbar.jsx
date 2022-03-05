// Importing combination
import React, {Component} from 'react';
import Main from './main';
import About from './about';
import Contact from './contact'
class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHome: true,
            isAbout: false,
            isContact: false
        };
    }
    changeToAbout = () => {
        this.setState({
            isHome:false,
            isAbout:true,
            isContact:false});
    }
    changeToHome = () => {
        this.setState({
            isHome:true,
            isAbout:false,
            isContact:false});
    }
    changeToContact = () => {
        this.setState({
            isHome:false,
            isAbout:false,
            isContact:true});
    }
    render() {
        const style = {
            height: "4em",
            padding: "10px",
        };


        const nav =(<nav className="navbar navbar-expand-lg navbar-light   px-5" style={style}>
            <a className="navbar-brand disabled text-white" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <button className="nav-link text-white btn btn-link "  onClick={this.changeToHome}>Home</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-white btn btn-link "  onClick={this.changeToAbout}>Something about us</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-white btn btn-link "  onClick={this.changeToContact}>Contact</button>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Coming soon</a>
                    </li>
                </ul>
            </div>
        </nav>)

        const main =(<Main/>);
        const about =(<About/>)
        const contact =(<Contact/>)

        return (
                <section>
                    {nav}
                    { this.state.isHome ? main : null}
                    { this.state.isAbout ? about : null}
                    { this.state.isContact ? contact : null}
                </section>


        );

    }
}

// Exporting the component
export default Navbar;