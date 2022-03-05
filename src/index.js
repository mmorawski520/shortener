import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import Main from './components/main';
import Loaderr from './components/loader';
require('././db/mongoose')
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(

    <React.StrictMode>
        <div className="image-fluid min-vh-100" style={{
            backgroundImage: "linear-gradient(to right top, #845ec2, #965dc0, #a75dbe, #b75cbb, #e35fa9, #ec62a3, #f3659d, #fa6a97, #ff6f91)"
        }}>
            <Navbar/>


        </div>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
